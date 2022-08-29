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

    const flattenPosition = async (symbol) => {
        if (window.TradingApp.Firestore.pendingOrdersBySymbol[symbol]) {
            clearTimeout(window.TradingApp.Firestore.pendingOrdersBySymbol[symbol])
        }
        window.TradingApp.Firestore.clearPinnedTargets(symbol);
        let finished = window.TradingApp.TOS.flattenPosition(symbol);
        return finished;
    };

    const swapPosition = async (symbol) => {
        let account = window.TradingApp.Firestore.getAccountForSymbol(symbol);
        let position = account.position;
        let isLong = true;
        if (position.longQuantity > 0) {
            isLong = true;
        } else if (position.shortQuantity > 0) {
            isLong = false;
        } else {
            return;
        }
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