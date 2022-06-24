window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'StockCandidates': {
        'ZEN': {
            symbol: 'ZEN', volumeSum: 3661907, tradingSum: 300187321, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 119.5, boxdown: 118
        },
        'AMD': {
            symbol: 'AMD', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 81.5
        },
        'AAPL': {
            symbol: 'AAPL', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            //boxup: 47.75, boxdown: 46
        },
        'MSFT': {
            symbol: 'MSFT', volumeSum: 53561, tradingSum: 14011489, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 8, boxdown: 7.25
        },
        'TSLA': {
            symbol: 'TSLA', volumeSum: 121044, tradingSum: 85998186, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 714, boxdown: 708
        },
        'NVDA': {
            symbol: 'NVDA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 63.5, boxdown: 62
        },
        'PDD': {
            symbol: 'PDD', volumeSum: 106038, tradingSum: 7024086, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 66.75, boxdown: 65.8,
        },
        'NIO': {
            symbol: 'NIO', volumeSum: 1830018, tradingSum: 40203230, premktHigh: 0, premktLow: 99999999,
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
