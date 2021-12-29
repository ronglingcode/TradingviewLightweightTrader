window.TradingApp = {
    'Settings': {
        'currentDay': new Date()
    },
    'Algo': {},
    'Watchlist': [
        {
            symbol: 'APPS'
        },
        {
            symbol: 'TSLA'
        },
        {
            symbol: 'QQQ'
        },
        {
            symbol: 'SPY'
        }
    ],
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    }
};
window.TradingApp.Settings.marketOpenTime = new Date();
window.TradingApp.Settings.marketOpenTime.setHours(6);
window.TradingApp.Settings.marketOpenTime.setMinutes(30);
window.TradingApp.Settings.marketOpenTime.setSeconds(0, 0);