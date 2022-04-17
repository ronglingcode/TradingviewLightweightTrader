window.TradingApp.Helper = (function () {
    const tvTimestampToLocalJsDate = (timestamp) => {
        let d = new Date(timestamp * 1000);
        let offset = d.getTimezoneOffset();
        d.setTime(d.getTime() + (offset * 60 * 1000));
        return d;
    };

    const getMinutesSinceMarketOpen = (jsDate) => {
        return (jsDate - window.TradingApp.Settings.marketOpenTime) / 60000;
    };

    const getSecondsSinceMarketOpen = (jsDate) => {
        return (jsDate - window.TradingApp.Settings.marketOpenTime) / 1000;
    }
    return {
        tvTimestampToLocalJsDate,
        getMinutesSinceMarketOpen,
        getSecondsSinceMarketOpen
    };
})();