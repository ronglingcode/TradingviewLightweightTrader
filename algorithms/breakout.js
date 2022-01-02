window.TradingApp.Algo.Breakout = (function () {
    const checkRules = (symbol, entryPrice, stopOutPrice) => {
        if (!checkRuleForVwap(symbol, entryPrice, stopOutPrice)) {
            return false;
        }
        return true;
    };
    const checkRuleForVwap = (symbol, entryPrice, stopOutPrice) => {
        let minutesSinceMarketOpen = (new Date() - window.TradingApp.Settings.marketOpenTime) / 60000;
        if (minutesSinceMarketOpen >= 0 && minutesSinceMarketOpen <= 5) {
            let vwap = window.TradingApp.DB.dataBySymbol[symbol].vwap;
            let currentVwap = vwap[vwap.length - 1];
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
    const submitBreakoutOrders = async (symbol, entryPrice, stopOut, setupQuality, multiplier) => {
        let orderType = window.TradingApp.OrderFactory.OrderType.STOP;
        if (!checkRules(symbol, entryPrice, stopOut)) {
            console.log("failed rule");
            return;
        }
        let orders = window.TradingApp.OrderFactory.createEntryOrdersWithFixedRisk(symbol, orderType, entryPrice, stopOut, setupQuality, multiplier);
        console.log(orders[0]);
        orders.forEach(order => {
            window.TradingApp.TOS.placeOrderBase(order);
        });
    };

    const roundPrice = (price, up) => {
        if (up) {
            return parseInt(price * 100 + 1) / 100;
        } else {
            return parseInt(price * 100 - 1) / 100;
        }
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

        return roundPrice(p, code === "KeyS");
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

        return roundPrice(p, code === "KeyB");
    };

    const test = () => {
        submitBreakoutOrders("MSFT", 340, 320, "a", 1);
    };
    return {
        submitBreakoutOrders,
        test,
        getStopLossPrice,
        getEntryPrice,
        checkRules
    };
})();