window.TradingApp.Algo.Flatten = (function () {
    // return true if ok to flatten
    const checkRules = (symbol) => {
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

    return {
        checkRules,
    };
})();