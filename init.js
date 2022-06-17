window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'StockCandidates': {
        'BABA': {
            symbol: 'BABA', volumeSum: 1935862, tradingSum: 214544639, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 119.5, boxdown: 118
        },
        'ROKU': {
            symbol: 'ROKU', volumeSum: 82307, tradingSum: 6734784, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 81.5
        },
        'AAPL': {
            symbol: 'NVAX', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 47.75, boxdown: 46
        },
        'AMD': {
            symbol: 'AMD', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 67.5, boxdown: 66.25
        },
        'TSLA': {
            symbol: 'TSLA', volumeSum: 314025, tradingSum: 211453676, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            // boxup: 63.5, boxdown: 62
        },
        'PDD': {
            symbol: 'PDD', volumeSum: 344203, tradingSum: 21510668, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 63.5, boxdown: 62
        },
        'BA': {
            symbol: 'BA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            //boxup: 91.25, boxdown: 90,
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
window.TradingApp.Watchlist = []
bestStocksToTradeToday.forEach(symbol => {
    window.TradingApp.Watchlist.push(window.TradingApp.StockCandidates[symbol]);
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
