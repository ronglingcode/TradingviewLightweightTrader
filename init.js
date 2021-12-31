window.TradingApp = {
    'Settings': {
        'currentDay': new Date()
    },
    'Algo': {},
    'Watchlist': [
        {
            symbol: 'PTON',
            bias: 'short',
            //            ajbuy: 246,
            //          ajsell: 240
        },
        {
            symbol: 'XPEV',
            bias: 'long'
            //            ajbuy: 1073,
            //          ajsell: 1060
        },
        {
            symbol: 'KWEB',
            bias: 'long'
        },
        {
            symbol: 'BABA',
            bias: 'long'
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