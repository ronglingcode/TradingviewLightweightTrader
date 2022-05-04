window.TradingApp.Algo.Pattern = (function () {
    const isRedBar = (bar) => {
        return bar.close < bar.open;
    };
    const isGreenBar = (bar) => {
        return bar.close > bar.open;
    };
    const getTotalRange = (bar) => {
        return bar.high - bar.low;
    };
    const getBodyRatio = (bar) => {
        let total = getTotalRange(bar);
        let body = Math.abs(bar.open - bar.close);
        return body / total;
    }
    const isRedOpenBar = (bar) => {
        if (!isRedBar(bar))
            return false;
        // body is more than 1/3 of the total candle
        return getBodyRatio(bar) >= 0.34;
    };
    const isGreenOpenBar = (bar) => {
        if (!isGreenBar(bar))
            return false;
        // body is more than 1/3 of the total candle
        return getBodyRatio(bar) >= 0.34;
    };
    return {
        isRedOpenBar: isRedOpenBar,
        isGreenOpenBar: isGreenOpenBar,
        getBodyRatio: getBodyRatio,
    };
})();