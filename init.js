window.TradingApp = {
    'Settings': {
        'currentDay': new Date()
    },
    'Algo': {},
    'Watchlist': [
        {
            symbol: 'BIIB',
            ajbuy: 246,
            ajsell: 240
        },
        {
            symbol: 'TSLA',
            ajbuy: 1073,
            ajsell: 1060
        },
        {
            symbol: 'SPY'
        },
        {
            symbol: 'QQQ'
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