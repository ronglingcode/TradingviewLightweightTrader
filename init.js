window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-01-01')
    },
    'Algo': {},
    'Watchlist': [
        {
            symbol: 'PTON',
            bias: 'short',
            //            ajbuy: 246,
            //          ajsell: 240
        },
        /*
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
        }*/
    ],
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    }
};
window.TradingApp.Settings.marketOpenTime = window.TradingApp.Settings.currentDay;
window.TradingApp.Settings.marketOpenTime.setHours(6);
window.TradingApp.Settings.marketOpenTime.setMinutes(30);
window.TradingApp.Settings.marketOpenTime.setSeconds(0, 0);

// setup reminder for first minute close
let now = new Date();
let rightBeforeFirstMinuteClose = new Date();
rightBeforeFirstMinuteClose.setHours(6);
rightBeforeFirstMinuteClose.setMinutes(30);
rightBeforeFirstMinuteClose.setSeconds(50);
let waitTime = rightBeforeFirstMinuteClose - now;
if (waitTime > 0) {
    setTimeout(() => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Check all stocks for first minute close";
        window.speechSynthesis.speak(msg);
    }, waitTime);
}
