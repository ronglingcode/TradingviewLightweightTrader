window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-07-22 6:30'), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false,
        'maxStocksCount': 8
    },
    'Algo': {},
    'StockCandidates': {
        'META': {
            volumeSum: 324283, tradingSum: 56584778, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 174.5, boxdown: 172.5,
            //longTargets: [{ price: 157.5, percentage: 0.3 }],
            shortTargets: [{ price: 170.3, percentage: 0.3 }]
        },
        'TTD': {
            volumeSum: 68352, tradingSum: 3242565, premktHigh: 0, premktLow: 99999999,
            bias: 'short',
            deferTrading: false,
            boxup: 47.5, boxdown: 46.5,
            //longTargets: [{ price: 59.95, percentage: 0.3 }],
            //shortTargets: [{ price: 50.7, percentage: 0.3 }]
        },
        'AXP': {
            volumeSum: 77998, tradingSum: 12239350, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 162, boxdown: 156,
            //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
            //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
        },
        'NVDA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            //boxup: 152.5, boxdown: 151,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 166.02, percentage: 0.3 }, { price: 165.6, percentage: 0.2 }]
        },
        'TSLA': {
            volumeSum: 417779, tradingSum: 344561578, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 831, boxdown: 820,
            //longTargets: [{ price: 715, percentage: 0.2 }, { price: 718, percentage: 0.3 }, { price: 710, percentage: 0.3 }],
            //shortTargets: [{ price: 695.5, percentage: 0.25 }, { price: 693, percentage: 0.25 }]
        },
        'AAPL': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            deferTrading: false,
            //boxup: 150, boxdown: 148,
            //longTargets: [{ price: 156, percentage: 0.1 }, { price: 156.5, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'USEA': {
            //volumeSum: 508257, tradingSum: 19785249, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            deferTrading: false,
            //boxup: 75.75, boxdown: 75,
            //longTargets: [{ price: 78.8, percentage: 0.1 }, { price: 78.95, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'SMCI': {
            volumeSum: 41506, tradingSum: 2239405, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            deferTrading: false,
            //boxup: 61.2, boxdown: 60.2,,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'SPY': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            //boxdown: 80, boxup: 88,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'QQQ': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            //boxup: 22, boxdown: 21.1,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 277.85, percentage: 0.25 }, { price: 277.1, percentage: 0.25 }]
        },
        'IWM': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            deferTrading: false,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'DIA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            deferTrading: false
        },
        'UPRO': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            deferTrading: false
        }
    },
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    }
};

// only pick the best stocks, stocks with biggest news to trade
// be selective
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
