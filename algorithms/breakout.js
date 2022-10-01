window.TradingApp.Algo.Breakout = (function () {
    // return a number between 0 to 1 for share size multiplier
    // 0 means cannot make the trade
    // 1 means trade with full size
    const checkRules = (symbol, entryPrice, stopOutPrice) => {
        let isLong = entryPrice > stopOutPrice;
        if (window.TradingApp.Secrets.isTestAccount) {
            // bypass check rules if this account is for testing
            return 1;
        }
        if (!window.TradingApp.Profiles.getActiveProfile().settings.entryRulesEnabled) {
            return 1;
        }
        if (!checkRuleForDeferTrading(symbol)) {
            window.TradingApp.Firestore.logError(`checkRule: need to defer trading for ${symbol}`);
            return 0;
        }
        if (!checkRuleForDailyMaxLoss()) {
            window.TradingApp.Firestore.logError(`checkRule: Daily max loss exceeded`);
            return 0;
        }
        if (!checkRuleForTimeWindow()) {
            window.TradingApp.Firestore.logError(`checkRule: Time Window rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForTradesCount(symbol, isLong)) {
            window.TradingApp.Firestore.logError(`checkRule: Trades Count rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForVwap(symbol, entryPrice, stopOutPrice)) {
            window.TradingApp.Firestore.logError(`checkRule: Vwap rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForBias(symbol, entryPrice, stopOutPrice)) {
            window.TradingApp.Firestore.logError(`checkRule: Bias rule failed for ${symbol}`);
            return 0;
        }
        if (!checkRuleForOpenCandle(symbol, entryPrice, stopOutPrice)) {
            window.TradingApp.Firestore.logError(`checkRule: OpenCandle rule failed for ${symbol}`);
            return 0;
        }
        return 1;
    };
    const checkRuleForDeferTrading = (symbol) => {
        let stockSettings = window.TradingApp.StockCandidates[symbol];
        if (stockSettings.deferTrading) {
            let secondsSinceMarketOpen = window.TradingApp.Helper.getSecondsSinceMarketOpen(new Date());
            if (secondsSinceMarketOpen >= 5 * 60 - 5) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 1;
        }
    };
    const checkRuleForDailyMaxLoss = () => {
        let currentLoss = window.TradingApp.Firestore.getProfitAndLossFromCache() * (-1);
        if (currentLoss > 3 * window.TradingApp.Algo.RiskManager.MaxDailyLoss) {
            return 0;
        } else {
            return 1;
        }
    };
    const checkRuleForTradesCount = (symbol, isLong) => {
        let count = window.TradingApp.Firestore.getTradesCount();
        if (count < 5) {
            return 1;
        } else {
            // 5 trades now, only allow add to existing positions
            let netQuantity = window.TradingApp.Firestore.getPositionNetQuantity(symbol);
            if (netQuantity == 0) {
                // new position, disallow
                window.TradingApp.Firestore.logDebug(`no more than 5 trades/day for new position`);
                return 0;
            }
            if (netQuantity > 0 && isLong) {
                window.TradingApp.Firestore.logDebug(`add to existing long positions `);
                return 1;
            }
            else if (netQuantity < 0 && !isLong) {
                window.TradingApp.Firestore.logDebug(`add to existing short positions`);
                return 1;
            }
            window.TradingApp.Firestore.logError(`should not reach here`);
            return 0;
        }
    };
    const checkRuleForTimeWindow = () => {
        let secondsSinceMarketOpen = window.TradingApp.Helper.getSecondsSinceMarketOpen(new Date());
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

    // https://sunrisetrading.atlassian.net/browse/TPS-145
    // if the entry is within first 2 minutes and last 2 minutes was above vwap
    // cannot short on the breakdown
    const checkRuleForPremarketVwap = (symbol, isLong) => {

    };

    const submitBreakoutOrders = async (symbol, entryPrice, stopOut, setupQuality, multiplier) => {
        let orders = [];
        let checkResult = checkRules(symbol, entryPrice, stopOut);
        if (checkResult == 0) {
            return;
        }
        multiplier = multiplier * checkResult;
        let orderType = window.TradingApp.OrderFactory.OrderType.STOP;
        orders = window.TradingApp.OrderFactory.createEntryOrdersWithFixedRisk(symbol, orderType, entryPrice, stopOut, setupQuality, multiplier);

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
        let multiplier = window.TradingApp.Chart.getMultiplier(window.TradingApp.Main.widgets[symbol]);

        if (code === "KeyB") {
            window.TradingApp.Firestore.logInfo("breakout buy for " + symbol + " " + multiplier);
        } else if (code === "KeyS") {
            window.TradingApp.Firestore.logInfo("breakdown sell for " + symbol + " " + multiplier);
        }
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