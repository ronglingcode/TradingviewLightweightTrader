window.TradingApp.Algo.Breakout = (function () {
    const checkRules = (symbol, entryPrice, stopOutPrice) => {
        if (!checkRuleForVwap(symbol, entryPrice, stopOutPrice)) {
            return false;
        }
        if (!checkRuleForBias(symbol, entryPrice, stopOutPrice)) {
            return false;
        }
        if (!checkRuleForOpenCandle(symbol, entryPrice, stopOutPrice)) {
            return false;
        }
        return true;
    };
    const checkRuleForVwap = (symbol, entryPrice, stopOutPrice) => {
        let minutesSinceMarketOpen = (new Date() - window.TradingApp.Settings.marketOpenTime) / 60000;
        if (minutesSinceMarketOpen >= 0 && minutesSinceMarketOpen <= 5) {
            let vwap = window.TradingApp.DB.dataBySymbol[symbol].vwap;
            let currentVwap = vwap[vwap.length - 1].value;
            window.TradingApp.Firestore.logInfo(`check vwap rule for ${symbol}, entry: ${entryPrice}, stop: ${stopOutPrice}, vwap ${currentVwap}`);
            if (entryPrice > stopOutPrice) {
                // buy orders
                if (entryPrice < currentVwap) {
                    return confirm("entry against vwap, still continue?");
                }
            } else {
                // sell orders
                if (entryPrice > currentVwap) {
                    return confirm("entry against vwap, still continue?");
                }
            }
        }
        return true;
    };
    const checkRuleForBias = (symbol, entryPrice, stopOutPrice) => {
        let bias = window.TradingApp.AutoTrader.getStockBias(symbol);
        if (bias === 'long') {
            if (entryPrice < stopOutPrice) {
                return confirm("sell orders on long bias, still continue?");
            }
        } else if (bias === 'short') {
            if (entryPrice > stopOutPrice) {
                return confirm("buy orders on short bias, still continue?");
            }
        }
        return true;
    };
    // avoid chase the first candle during second candle
    const checkRuleForOpenCandle = (symbol, entryPrice, stopOutPrice) => {
        let openingCandle = window.TradingApp.DB.dataBySymbol[symbol].openingCandle;
        if (!openingCandle)
            return true;

        let seconds = window.TradingApp.Helper.getSecondsSinceMarketOpen(new Date());
        if (seconds >= 120)
            return true;

        if (entryPrice > stopOutPrice) {
            // try to go long
            if (window.TradingApp.Algo.Pattern.isGreenOpenBar(openingCandle)) {
                return false;
            }
        } else {
            // try to go short
            if (window.TradingApp.Algo.Pattern.isRedOpenBar(openingCandle)) {
                return false;
            }
        }
        return true;
    };

    const submitBreakoutOrders = async (symbol, entryPrice, stopOut, setupQuality, multiplier) => {
        let orders = [];
        if (window.TradingApp.Settings.preMarketTrading) {
            orders = window.TradingApp.OrderFactory.createPreMarketOrderWithFixedRisk(symbol, entryPrice, stopOut, setupQuality, multiplier);
        } else {
            if (!checkRules(symbol, entryPrice, stopOut)) {
                console.log("failed rule");
                return;
            }
            let orderType = window.TradingApp.OrderFactory.OrderType.STOP;
            orders = window.TradingApp.OrderFactory.createEntryOrdersWithFixedRisk(symbol, orderType, entryPrice, stopOut, setupQuality, multiplier);
        }
        orders.forEach(order => {
            window.TradingApp.TOS.placeOrderBase(order);
        });
    };

    const getStopLossPrice = (symbol, code) => {
        // if stop loss drawn, use stop loss drawn on the chart
        // if not drawn, use high/low of the day
        let p = 0;
        if (TradingApp.Main.widgets[symbol].stopLossPriceLine) {
            p = TradingApp.Main.widgets[symbol].stopLossPriceLine.options().price;
        } else {
            if (code === "KeyB") {
                p = window.TradingApp.DB.dataBySymbol[symbol].lowOfDay;
            } else if (code === "KeyS") {
                p = window.TradingApp.DB.dataBySymbol[symbol].highOfDay;
            }
        }
        if (code === "KeyB") {
            p = Math.floor(p * 100) / 100;
        } else if (code === "KeyS") {
            p = Math.ceil(p * 100) / 100;
        }
        return p;
    };

    const getEntryPrice = (symbol, code) => {
        // if entry price drawn, use entry price drawn on the chart
        // if not drawn, use high/low of the day
        let p = 0;
        if (TradingApp.Main.widgets[symbol].entryPriceLine) {
            p = TradingApp.Main.widgets[symbol].entryPriceLine.options().price;
        } else {
            if (code === "KeyB") {
                p = window.TradingApp.DB.dataBySymbol[symbol].highOfDay;
            } else if (code === "KeyS") {
                p = window.TradingApp.DB.dataBySymbol[symbol].lowOfDay;
            }
        }

        if (code === "KeyB") {
            p = Math.ceil(p * 100) / 100;
        } else if (code === "KeyS") {
            p = Math.floor(p * 100) / 100;
        }

        return p;
    };

    const test = () => {
        submitBreakoutOrders("MSFT", 340, 320, "a", 1);
    };

    const prepareBreakoutOrders = (symbol, code) => {
        let stopOutPrice = getStopLossPrice(symbol, code);
        let entryPrice = getEntryPrice(symbol, code);
        if (code === "KeyB") {
            window.TradingApp.Firestore.logInfo("breakout buy for " + symbol);
        } else if (code === "KeyS") {
            window.TradingApp.Firestore.logInfo("breakdown sell for " + symbol);
        }
        let multiplier = window.TradingApp.Chart.getMultiplier(window.TradingApp.Main.widgets[symbol]);
        submitBreakoutOrders(symbol, entryPrice, stopOutPrice, "A", multiplier);
    };

    return {
        submitBreakoutOrders,
        prepareBreakoutOrders,
        test,
        getStopLossPrice,
        getEntryPrice,
        checkRules
    };
})();