window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-05-13 6:30'), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'StockCandidates': {
        'AFRM': {
            symbol: 'AFRM', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 25.75, boxdown: 24
        },
        'GME': {
            symbol: 'GME', volumeSum: 36482, tradingSum: 3490241, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 98, boxdown: 95.5
        },
        'RBLX': {
            symbol: 'RBLX', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 41, boxdown: 39
        },
        'BYND': {
            symbol: 'BYND', volumeSum: 99525, tradingSum: 1996779, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 21, boxdown: 19
        },
        'TSLA': {
            symbol: 'TSLA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 785, boxdown: 770
        },
        'NVDA': {
            symbol: 'NVDA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 2600, boxdown: 2570,
        },
        'SPY': {
            symbol: 'SPY', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxdown: 80, boxup: 88
        },
        'QQQ': {
            symbol: 'QQQ', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 22, boxdown: 21.1
        }
    },
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    }
};

let top4 = [
    window.TradingApp.StockCandidates['AFRM'],
    window.TradingApp.StockCandidates['SPY'],
    window.TradingApp.StockCandidates['TSLA'],
    window.TradingApp.StockCandidates['GME'],
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
