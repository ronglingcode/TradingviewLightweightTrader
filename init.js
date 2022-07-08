window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false,
        'maxStocksCount': 8
    },
    'Algo': {},
    'StockCandidates': {
        'GME': {
            volumeSum: 30996, tradingSum: 3939119, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 130, boxdown: 127,
            //longTargets: [{ price: 129.7, percentage: 0.5 }],
            shortTargets: [{ price: 123.8, percentage: 0.2 }, { price: 122.7, percentage: 0.4 }]
        },
        'TWTR': {
            volumeSum: 204164, tradingSum: 7614893, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 37.5, boxdown: 37,
            //longTargets: [{ price: 9.98, percentage: 0.3 }, { price: 10.05, percentage: 0.3 }],
            shortTargets: [{ price: 36.51, percentage: 0.2 }, { price: 36.05, percentage: 0.5 }]
        },
        'UPST': {
            volumeSum: 965889, tradingSum: 26660591, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 28.5, boxdown: 27,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
        },
        'AFRM': {
            volumeSum: 255403, tradingSum: 5691557, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 40.25, boxdown: 38.5,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            shortTargets: [{ price: 21.37, percentage: 0.3 }]
        },
        'TSLA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 703.5, boxdown: 699,
            //longTargets: [{ price: 679.5, percentage: 0.35 }],
            //shortTargets: [{ price: 666.37, percentage: 0.25 }]
        },
        'NVDA': {
            volumeSum: 184018, tradingSum: 28289007, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 150, boxdown: 148,
            longTargets: [{ price: 156, percentage: 0.1 }, { price: 156.5, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'AMD': {
            volumeSum: 289054, tradingSum: 22134159, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 75.75, boxdown: 75,
            longTargets: [{ price: 78.8, percentage: 0.1 }, { price: 78.95, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'BABA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 61.2, boxdown: 60.2,,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'SPY': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxdown: 80, boxup: 88,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'QQQ': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 22, boxdown: 21.1,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 277.85, percentage: 0.25 }, { price: 277.1, percentage: 0.25 }]
        },
        'IWM': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
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
