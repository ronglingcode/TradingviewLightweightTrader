window.TradingApp.AutoTrader = (function () {
    const defaultEntryCoolDownInSeconds = {
        'bigTrendDay': 300, // 5 minutes
        'rangeDay': 210 // 3.5 minutes
    };

    let stateBySymbol = {};

    const getEntryCoolDownInSeconds = () => {
        let trend = getMarketTrendType();
        if (trend == 0) {
            return defaultEntryCoolDownInSeconds.rangeDay;
        } else {
            return defaultEntryCoolDownInSeconds.bigTrendDay;
        }
    };
    const addStocksFromWatchlist = (stocks) => {
        stocks.forEach(stock => {
            stateBySymbol[stock.symbol] = {};
        });
    }

    const getStockBias = (symbol) => {
        for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
            let element = window.TradingApp.Watchlist[i];
            if (element.symbol === symbol) {
                return element.bias;
            }
        }
        return '';
    };
    const onFirstMinuteClose = (symbol, candle, vwap) => {
        window.TradingApp.Firestore.logDebug("onFirstMinuteClose " + symbol + ", vwap: " + vwap);
        let bias = getStockBias(symbol);
        if (stateBySymbol[symbol].manualTriggered === true) {
            return;
        }
        // first minute close, try open range breakout pattern
        if (bias === 'long') {
            if (candle.high >= vwap) {
                window.TradingApp.Firestore.logInfo("onFirstMinuteClose: auto trigger long for " + symbol);
            }
        } else if (bias === 'short') {
            if (candle.low <= vwap) {
                window.TradingApp.Firestore.logInfo("onFirstMinuteClose: auto trigger short for " + symbol);
            }
        }
    };

    const onSecondMinuteClose = (symbol, candle0, candle1) => {
        // second minute close, check for triangle consolidation
        if (candle0.high >= candle1.high && candle0.low <= candle1.low) {
            window.TradingApp.Firestore.logDebug("onSecondMinuteClose: triangle consolidation for " + symbol);
        }
        checkBreakoutAfterCandleClose(symbol, candle0, candle1);
    };

    const onThirdMinuteClose = (symbol, candle0, candle1, candle2) => {
        // second minute close, check for triangle consolidation
        if (candle0.high >= candle1.high && candle0.low <= candle1.low) {
            window.TradingApp.Firestore.logDebug("onSecondMinuteClose: triangle consolidation for " + symbol);
        }
        checkBreakoutAfterCandleClose(symbol, candle0, candle2);
    };

    const checkBreakoutAfterCandleClose = (symbol, openCandle, closedCandle) => {
        let bias = getStockBias(symbol);
        // if long bias, check for false breakdown open range low
        if (bias === 'long') {
            checkFalseBreakdown(symbol, openCandle.low, closedCandle);
        } else if (bias === 'short') {
            checkFalseBreakout(symbol, openCandle.high, closedCandle);
        } else {
            // if no bias, check both sides
            checkFalseBreakdown(symbol, openCandle.low, closedCandle);
            checkFalseBreakout(symbol, openCandle.high, closedCandle);
        }
    };
    const checkFalseBreakdown = (symbol, breakdownLevel, candle) => {
        if (candle.low < breakdownLevel && candle.close > breakdownLevel) {
            window.TradingApp.Firestore.logInfo('draw false breakdown marker for ' + symbol);
            notifyEntrySignal(symbol, true);
            window.TradingApp.Chart.addMarker(symbol, {
                time: candle.time,
                position: 'belowBar',
                color: 'green',
                shape: 'arrowUp',
                text: 'false breakdown'
            });
        }
    };

    const checkFalseBreakout = (symbol, breakoutLevel, candle) => {
        if (candle.high > breakoutLevel && candle.close < breakoutLevel) {
            window.TradingApp.Firestore.logInfo('draw false breakout marker for ' + symbol);
            notifyEntrySignal(symbol, false);
            window.TradingApp.Chart.addMarker(symbol, {
                time: candle.time,
                position: 'aboveBar',
                color: 'red',
                shape: 'arrowDown',
                text: 'false breakout'
            });
        }
    };

    const notifyEntrySignal = (symbol, isLong) => {
        window.TradingApp.Helper.playNotificationSound();
        window.TradingApp.Helper.blinkChart(symbol, isLong);
    };

    const manualTrigger = (symbol, trigger) => {
        stateBySymbol[symbol].manualTriggered = trigger;
    };

    const countTrades = (accountData) => {
        // assume accountData is not null
        // otherwise the API might returned errors anyway
        let orders = accountData.securitiesAccount.orderStrategies;
        if (!orders) {
            return 0;
        }
        let filledOrders = window.TradingApp.OrderFactory.extractFilledOrders(orders);

        filledOrders.sort((a, b) => (a.closeTime > b.closeTime ? 1 : -1))
        let totalTrades = 0;
        let positions = {};
        for (let i = 0; i < filledOrders.length; i++) {
            let order = filledOrders[i];
            let symbol = window.TradingApp.OrderFactory.getOrderSymbol(order);
            let previousQuantity = 0;
            if (symbol in positions) {
                previousQuantity = positions[symbol];
            }
            if (previousQuantity == 0) {
                totalTrades++; // opened a new position
            }
            if (window.TradingApp.OrderFactory.isSellOrder(order.orderLegCollection[0].instruction)) {
                positions[symbol] = previousQuantity - order.filledQuantity;
            } else {
                positions[symbol] = previousQuantity + order.filledQuantity;
            }
        }
        return totalTrades;
    };

    const getEntryTimeFromNowInSeconds = (symbol) => {
        let accountData = window.TradingApp.Firestore.getAccountForSymbol(symbol);
        if (!accountData || !accountData.orders) {
            return -1;
        }
        let orders = accountData.orders;
        let filledOrders = window.TradingApp.OrderFactory.extractFilledOrders(orders);
        let foundFirst = false;
        let earliestTime = null;
        for (let i = 0; i < filledOrders.length; i++) {
            let order = filledOrders[i];
            let tradeSymbol = window.TradingApp.OrderFactory.getOrderSymbol(order);
            if (tradeSymbol != symbol) {
                continue;
            }
            if (!foundFirst || earliestTime > order.closeTime) {
                earliestTime = order.closeTime;
                foundFirst = true;
            }
        }
        if (!foundFirst) {
            return -1;
        }
        let now = new Date();
        let tradeTime = new Date(earliestTime);
        let seconds = (now - tradeTime) / 1000;
        console.log(`${symbol} first entry ${seconds} seconds ago`);
        return seconds;
    };

    const getRemainingCoolDownInSeconds = (symbol) => {
        let entryTimeFromNow = getEntryTimeFromNowInSeconds(symbol);
        let entryCoolDownInSeconds = getEntryCoolDownInSeconds();
        if (entryTimeFromNow == -1 || entryTimeFromNow > entryCoolDownInSeconds)
            return 0;
        else
            return entryCoolDownInSeconds - entryTimeFromNow;
    };

    // 1: up trend
    // 0: range
    // -1: down trend
    const getMarketTrendType = () => {
        let openPrice = window.TradingApp.Firestore.getStockState('SPY', 'openPrice');
        let spyRange = window.TradingApp.Algo.StockSelection.getSPYRange();

        if (openPrice > spyRange.high)
            return 1;
        if (openPrice < spyRange.low)
            return -1;
        return 0;
    };

    return {
        stateBySymbol,
        addStocksFromWatchlist,
        getRemainingCoolDownInSeconds,
        manualTrigger,
        getStockBias,
        onFirstMinuteClose,
        onSecondMinuteClose,
        onThirdMinuteClose,
        countTrades,
        getEntryTimeFromNowInSeconds,
        getMarketTrendType,
    }
})();