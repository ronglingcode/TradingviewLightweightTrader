window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'Watchlist': [
        {
            symbol: 'SPY',
            //bias: 'short',
            //ajbuy: 380,
            //ajsell: 375
        },
        {
            symbol: 'AAPL',
            //ajsell: 540,
            //ajbuy: 550
            //            bias: 'short'
        },
        /*
        {
            symbol: 'TSLA',
            //            bias: 'long',
            //ajbuy: 950,
            //ajsell: 930
        }, {
            symbol: 'V',
            bias: 'short',
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
