window.TradingApp.AutoTrader = (function () {
    let stateBySymbol = {};
    window.TradingApp.Watchlist.forEach(element => {
        stateBySymbol[element.symbol] = {};
    });

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
        window.TradingApp.Firestore.logInfo("onFirstMinuteClose " + symbol + ", vwap: " + vwap);
        let bias = getStockBias(symbol);
        window.TradingApp.Firestore.logInfo("bias for " + symbol + bias);
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
            window.TradingApp.Firestore.logInfo("onSecondMinuteClose: triangle consolidation for " + symbol);
        }
        let bias = getStockBias(symbol);
        if (bias === 'long') {
            checkFalseBreakdown(symbol, candle0.low, candle1);
        } else if (bias === 'short') {
            checkFalseBreakout(symbol, candle0.high, candle1);
        }
    };

    const onThirdMinuteClose = (symbol, candle0, candle1, candle2) => {
        // second minute close, check for triangle consolidation
        if (candle0.high >= candle1.high && candle0.low <= candle1.low) {
            window.TradingApp.Firestore.logInfo("onSecondMinuteClose: triangle consolidation for " + symbol);
        }
        let bias = getStockBias(symbol);
        // if long bias, check for false breakdown open range low
        if (bias === 'long') {
            checkFalseBreakdown(symbol, candle0.low, candle2);
        } else if (bias === 'short') {
            checkFalseBreakout(symbol, candle0.high, candle2);
        }
    };
    const checkFalseBreakdown = (symbol, breakdownLevel, candle) => {
        if (candle.low < breakdownLevel && candle.close > breakdownLevel) {
            window.TradingApp.Firestore.logInfo('draw false breakdown marker for ' + symbol);
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
            window.TradingApp.Chart.addMarker(symbol, {
                time: candle.time,
                position: 'aboveBar',
                color: 'red',
                shape: 'arrowDown',
                text: 'false breakout'
            });
        }
    }

    const manualTrigger = (symbol, trigger) => {
        stateBySymbol[symbol].manualTriggered = trigger;
    };

    const countTrades = (accountData) => {
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

    return {
        stateBySymbol,
        manualTrigger,
        getStockBias,
        onFirstMinuteClose,
        onSecondMinuteClose,
        onThirdMinuteClose,
        countTrades,
    }
})();