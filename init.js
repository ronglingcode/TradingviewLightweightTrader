window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-02-04 6:30'), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'Watchlist': [
        {
            symbol: 'F',
            initialVolume: 0,
            initialTradingAmount: 0,
            premktHigh: 0,
            premktLow: 99999999,
            bias: 'short',
            //ajbuy: 36.5,
            //ajsell: 33.5,
        },
        /*
        {
            symbol: 'FB',
            initialVolume: 131130,
            initialTradingAmount: 31558197,
            premktHigh: 0,
            premktLow: 99999999,
            bias: 'short',
            ajsell: 140,
            ajbuy: 144
        },
        {
            symbol: 'PINS',
            initialVolume: 0,
            initialTradingAmount: 0,
            premktHigh: 0,
            premktLow: 99999999,
            //bias: 'short',
            //ajbuy: 118.5,
            //ajsell: 115
        }, {
            symbol: 'SPY',
            initialVolume: 0,
            initialTradingAmount: 0,
            premktHigh: 0,
            premktLow: 99999999,
            //bias: 'short',
            //ajbuy: 192,
            //ajsell: 184
        }*/
    ],
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    }
};
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
