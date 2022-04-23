window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'StockCandidates': {
        'GPS': {
            symbol: 'GPS', initialVolume: 0, initialTradingAmount: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            ajbuy: 12, ajsell: 11.25
        },
        'ATEN': {
            symbol: 'ATEN', initialVolume: 0, initialTradingAmount: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            ajbuy: 14.8, ajsell: 14.5,
        },
        'SNAP': {
            symbol: 'SNAP', initialVolume: 0, initialTradingAmount: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //ajsell: 80, ajbuy: 88
        },
        'QQQ': {
            symbol: 'QQQ', initialVolume: 0, initialTradingAmount: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //ajbuy: 22, ajsell: 21.1
        }
    },
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    }
};

let top4 = [
    window.TradingApp.StockCandidates['SNAP'],
    window.TradingApp.StockCandidates['ATEN'],
    window.TradingApp.StockCandidates['GPS'],
    window.TradingApp.StockCandidates['QQQ'],
];
window.TradingApp.Watchlist = top4;

let currentDay = window.TradingApp.Settings.currentDay;
let currentDayStr = `${currentDay.getFullYear()}-${currentDay.getMonth() + 1}-${currentDay.getDate()}`;

let dtStartTime = new Date(`${currentDayStr} 01:00`);
dtStartTime.setTime(dtStartTime.getTime() + ((-3) * 60 * 60 * 1000)); // new york 1:00:00 AM
window.TradingApp.Settings.dtStartTime = dtStartTime;

window.TradingApp.Settings.marketOpenTime = new Date(`${currentDayStr} 06:30:00`);
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
