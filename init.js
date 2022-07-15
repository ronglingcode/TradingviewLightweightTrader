window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false,
        'maxStocksCount': 8
    },
    'Algo': {},
    'StockCandidates': {
        'JPM': {
            volumeSum: 631613, tradingSum: 68567778, premktHigh: 0, premktLow: 99999999,
            bias: 'short',
            boxup: 110, boxdown: 107,
            //longTargets: [{ price: 129.7, percentage: 0.5 }],
            shortTargets: [{ price: 106.35, percentage: 0.4 }]
        },
        'TSM': {
            volumeSum: 309756, tradingSum: 25643653, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 37.5, boxdown: 37,
            //longTargets: [{ price: 9.98, percentage: 0.3 }, { price: 10.05, percentage: 0.3 }],
            //shortTargets: [{ price: 36.51, percentage: 0.2 }, { price: 36.05, percentage: 0.5 }]
        },
        'AMD': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 79, boxdown: 78,
            //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
            //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
        },
        'NVDA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 152.5, boxdown: 151,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 166.02, percentage: 0.3 }, { price: 165.6, percentage: 0.2 }]
        },
        'TSLA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 725, boxdown: 718,
            //longTargets: [{ price: 715, percentage: 0.2 }, { price: 718, percentage: 0.3 }, { price: 710, percentage: 0.3 }],
            //shortTargets: [{ price: 695.5, percentage: 0.25 }, { price: 693, percentage: 0.25 }]
        },
        'a': {
            volumeSum: 184018, tradingSum: 28289007, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 150, boxdown: 148,
            longTargets: [{ price: 156, percentage: 0.1 }, { price: 156.5, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'b': {
            volumeSum: 289054, tradingSum: 22134159, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 75.75, boxdown: 75,
            longTargets: [{ price: 78.8, percentage: 0.1 }, { price: 78.95, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'COIN': {
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
        },
        'DIA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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
let nonShortableStocks = ['GME'];
let stocksNotGoodForDayTrading = [];
bestStocksToTradeToday.forEach(stock => {
    let symbol = stock.symbol;
    let skipMessage = `skip ${symbol} because `;
    if (nonShortableStocks.includes(symbol)) {
        console.log(`${skipMessage}it's not shortable, it trades differently than regular stocks.`);
        return;
    }
    if (stocksNotGoodForDayTrading.includes(symbol)) {
        console.log(`${skipMessage}it's not good for day trading, even with news, it trades poorly in the past.`);
        return;
    }
    if (!stock.news) {
        console.log(`${skipMessage}has no news.`);
        return;
    }

    let candidate = window.TradingApp.StockCandidates[symbol];
    candidate.symbol = symbol;
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
