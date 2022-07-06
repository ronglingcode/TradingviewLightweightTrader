window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false,
        'maxStocksCount': 8
    },
    'Algo': {},
    'StockCandidates': {
        'COIN': {
            volumeSum: 70792, tradingSum: 3795812, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 152, boxdown: 147,
            //longTargets: [{ price: 153.94, percentage: 0.25 }],
            shortTargets: [{ price: 51.7, percentage: 0.4 }]
        },
        'UBER': {
            volumeSum: 302896, tradingSum: 6615092, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 53.75, boxdown: 52,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 21.4, percentage: 0.1 }, { price: 21.3, percentage: 0.15 }]
        },
        'DASH': {
            volumeSum: 183689, tradingSum: 12795661, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 70, boxdown: 67.5,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            shortTargets: [{ price: 67.55, percentage: 0.15 }, { price: 67.05, percentage: 0.30 }]
        },
        'TDOC': {
            volumeSum: 74198, tradingSum: 2942605, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 40.25, boxdown: 38.5,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'TSLA': {
            volumeSum: 152128, tradingSum: 102335271, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 672.5, boxdown: 665,
            longTargets: [{ price: 679.5, percentage: 0.35 }],
            shortTargets: [{ price: 666.37, percentage: 0.25 }]
        },
        'NVDA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 150, boxdown: 148,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'AMD': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 75.75, boxdown: 75,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
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
            volumeSum: 1331258, tradingSum: 502848192, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxdown: 80, boxup: 88,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'QQQ': {
            volumeSum: 1381186, tradingSum: 385612970, premktHigh: 0, premktLow: 99999999,
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
