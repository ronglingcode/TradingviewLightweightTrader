window.TradingApp.Algo.Breakout = (function () {
    // return a number between 0 to 1 for share size multiplier
    // 0 means cannot make the trade
    // 1 means trade with full size
    const checkRules = (symbol, entryPrice, stopOutPrice) => {
        if (!checkRuleForDailyMaxLoss()) {
            window.TradingApp.Firestore.logInfo(`checkRule: Daily max loss exceeded`);
            return 0;
        }
        if (!checkRuleForTimeWindow()) {
            window.TradingApp.Firestore.logInfo(`checkRule: Time Window rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForTradesCount()) {
            window.TradingApp.Firestore.logInfo(`checkRule: Trades Count rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForVwap(symbol, entryPrice, stopOutPrice)) {
            window.TradingApp.Firestore.logInfo(`checkRule: Vwap rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForBias(symbol, entryPrice, stopOutPrice)) {
            window.TradingApp.Firestore.logInfo(`checkRule: Bias rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForOpenCandle(symbol, entryPrice, stopOutPrice)) {
            window.TradingApp.Firestore.logInfo(`checkRule: OpenCandle rule failed for ${symbol}`);
            return 0;
        }
        return 1;
    };
    const checkRuleForDailyMaxLoss = () => {
        let currentLoss = window.TradingApp.Firestore.getProfitAndLossFromCache() * (-1);
        if (currentLoss > 3 * window.TradingApp.Algo.RiskManager.MaxDailyLoss) {
            return 0;
        } else {
            return 1;
        }
    };
    const checkRuleForTradesCount = () => {
        let count = window.TradingApp.Firestore.getTradesCount();
        if (count >= 5) {
            window.TradingApp.Firestore.logInfo(`no more than 5 trades/day`);
            return 0;
        }
        return 1;
    };
    const checkRuleForTimeWindow = () => {
        let secondsSinceMarketOpen = (new Date() - window.TradingApp.Settings.marketOpenTime) / 1000;
        let minutesSinceMarketOpen = secondsSinceMarketOpen / 60;
        // only allow new trades after first 1 minute candle close
        // cannot take trades after 30 minutes of market open
        // add a few seconds as buffer
        console.log("seconds: " + secondsSinceMarketOpen);
        if (58 <= secondsSinceMarketOpen && secondsSinceMarketOpen <= (30 * 60 + 10)) {
            return 1;
        } else {
            return 0;
        }
    };

    const checkRuleForVwap = (symbol, entryPrice, stopOutPrice) => {
        let minutesSinceMarketOpen = (new Date() - window.TradingApp.Settings.marketOpenTime) / 60000;
        if (minutesSinceMarketOpen >= 0) {
            let vwap = window.TradingApp.DB.dataBySymbol[symbol].vwap;
            let currentVwap = vwap[vwap.length - 1].value;
            window.TradingApp.Firestore.logInfo(`check vwap rule for ${symbol}, entry: ${entryPrice}, stop: ${stopOutPrice}, vwap ${currentVwap}`);
            if (entryPrice > stopOutPrice) {
                // buy orders
                if (entryPrice < currentVwap) {
                    return false;
                }
            } else {
                // sell orders
                if (entryPrice > currentVwap) {
                    return false;
                }
            }
        }
        return true;
    };
    const checkRuleForBias = (symbol, entryPrice, stopOutPrice) => {
        let bias = window.TradingApp.AutoTrader.getStockBias(symbol);
        if (bias === 'long') {
            if (entryPrice < stopOutPrice) {
                // block trade against bias because taking an opposite trade can lead to
                // missing the entry for original trade bias
                return false;
            }
        } else if (bias === 'short') {
            if (entryPrice > stopOutPrice) {
                //return confirm("buy orders on short bias, still continue?");
                return false;
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
            let checkResult = checkRules(symbol, entryPrice, stopOut);
            if (checkResult == 0) {
                return;
            }
            multiplier = multiplier * checkResult;
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
        checkRules,
        checkRuleForDailyMaxLoss,
    };
})();