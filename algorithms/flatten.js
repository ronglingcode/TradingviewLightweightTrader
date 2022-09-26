window.TradingApp.Algo.Flatten = (function () {
    // return true if ok to flatten
    // see some trade examples in https://sunrisetrading.atlassian.net/browse/TPS-80
    const checkRules = (symbol) => {
        if (!window.TradingApp.Profiles.getActiveProfile().settings.flattenRulesEnabled) {
            return true;
        }
        // TODO: check whether it's within 0.2R
        if (!checkRuleForTimeSinceEntry(symbol))
            return false;

        return true;
    };

    const checkRuleForTimeSinceEntry = (symbol) => {
        let secondsSinceEntry = window.TradingApp.AutoTrader.getEntryTimeFromNowInSeconds(symbol);
        let remainingSeconds = window.TradingApp.AutoTrader.getRemainingCoolDownInSeconds(symbol);
        let secondsSinceMarketOpen = window.TradingApp.Helper.getSecondsSinceMarketOpen(new Date());
        if (remainingSeconds > 0 && secondsSinceMarketOpen < 60 * 10) {
            window.TradingApp.Firestore.logInfo(`cannot flatten ${symbol} within first 5 minutes before 6:40 AM, ${secondsSinceEntry} seconds so far, ${remainingSeconds} to go`);
            return false;
        }
        return true;
    };

    const flattenPosition = async (symbol) => {
        if (!checkRules(symbol)) {
            return;
        }
        if (window.TradingApp.Firestore.pendingOrdersBySymbol[symbol]) {
            clearTimeout(window.TradingApp.Firestore.pendingOrdersBySymbol[symbol])
        }
        window.TradingApp.Firestore.clearPinnedTargets(symbol);
        //let finished = window.TradingApp.TOS.flattenPosition(symbol);
        let finished = window.TradingApp.Controller.OrderFlow.flattenPosition(symbol);
        return finished;
    };

    const swapPosition = async (symbol) => {
        let netQuantity = window.TradingApp.Firestore.getPositionNetQuantity(symbol);
        if (netQuantity == 0) {
            return;
        }
        let isLong = netQuantity > 0;

        flattenPosition(symbol);
        // entry orders and exit orders can submit at the same time
        let code = isLong ? 'KeyB' : 'KeyS';
        window.TradingApp.Algo.Breakout.prepareBreakoutOrders(symbol, code);
    };

    return {
        checkRules,
        flattenPosition,
        swapPosition
    };
})();