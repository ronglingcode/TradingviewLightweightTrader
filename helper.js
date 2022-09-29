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
    };
    const roundToCents = (price) => {
        return Math.round(price * 100) / 100;
    };
    const toUserTimeString = (seconds) => {
        let m = Math.floor(seconds / 60);
        let s = seconds - m * 60;
        return `${m} minutes ${s} seconds`;
    };
    const playNotificationSound = () => {
        const audio = new Audio("/resources/notification_sound.wav");
        audio.play();
    };
    return {
        tvTimestampToLocalJsDate,
        getMinutesSinceMarketOpen,
        getSecondsSinceMarketOpen,
        roundToCents,
        toUserTimeString,
        playNotificationSound,
    };
})();