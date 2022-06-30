window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'StockCandidates': {
        'RH': {
            symbol: 'RH', volumeSum: 29308, tradingSum: 6363364, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 220, boxdown: 212
        },
        'UPST': {
            symbol: 'UPST', volumeSum: 402158, tradingSum: 12996624, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 32.5, boxdown: 31.25
        },
        'NKE': {
            symbol: 'NKE', volumeSum: 349036, tradingSum: 37551572, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 108.5, boxdown: 107
        },
        'NIO': {
            symbol: 'NIO', volumeSum: 2929120, tradingSum: 61069566, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 38.34, boxdown: 37.3
        },
        'TSLA': {
            symbol: 'TSLA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 678, boxdown: 668
        },
        'NVDA': {
            symbol: 'NVDA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 63.5, boxdown: 62
        },
        'PDD': {
            symbol: 'PDD', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 68, boxdown: 67,
        },
        'BABA': {
            symbol: 'BABA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 61.2, boxdown: 60.2,
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
        },
        'IWM': {
            symbol: 'IWM', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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
    window.TradingApp.Watchlist.push(window.TradingApp.StockCandidates[stock.symbol]);
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
