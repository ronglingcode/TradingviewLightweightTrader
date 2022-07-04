window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-07-01 6:30'), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false,
        'maxStocksCount': 8
    },
    'Algo': {},
    'StockCandidates': {
        'KSS': {
            volumeSum: 1478880, tradingSum: 43472966, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 30, boxdown: 28.5,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 27.8, percentage: 0.4 }]
        },
        'MU': {
            volumeSum: 704423, tradingSum: 37105943, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 53.75, boxdown: 52,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'NKE': {
            volumeSum: 349036, tradingSum: 37551572, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 108.5, boxdown: 107,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'NIO': {
            volumeSum: 2929120, tradingSum: 61069566, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 38.34, boxdown: 37.3,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'TSLA': {
            volumeSum: 122630, tradingSum: 82895761, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 685, boxdown: 672,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'NVDA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 150, boxdown: 148,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'AMD': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 75.75, boxdown: 75,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'BABA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 61.2, boxdown: 60.2,,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'SPY': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxdown: 80, boxup: 88,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'QQQ': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 22, boxdown: 21.1,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
        },
        'IWM': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //longTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }],
            //shortTargets: [{ price: 123, percentage: 30 }, { price: 123, percentage: 30 }]
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
let bestStocksToTradeToday = window.TradingData.StockSelection[currentDay.toLocaleDateString()];
window.TradingApp.Watchlist = [];
bestStocksToTradeToday.forEach(stock => {
    let candidate = window.TradingApp.StockCandidates[stock.symbol];
    candidate.symbol = stock.symbol;
    window.TradingApp.Watchlist.push(candidate);
});

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
