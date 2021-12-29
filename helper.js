window.TradingApp.Helper = (function () {
    const tvTimestampToLocalJsDate = (timestamp) => {
        let d = new Date(timestamp * 1000);
        let offset = d.getTimezoneOffset();
        d.setTime(d.getTime() + (offset * 60 * 1000));
        return d;
    };
    return {
        tvTimestampToLocalJsDate
    };
})();