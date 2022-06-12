window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-06-10 6:30'), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        'preMarketTrading': false
    },
    'Algo': {},
    'StockCandidates': {
        'DOCU': {
            symbol: 'DOCU', volumeSum: 1168365, tradingSum: 76478482, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 67, boxdown: 64
        },
        'NFLX': {
            symbol: 'NFLX', volumeSum: 160061, tradingSum: 29403716, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 184, boxdown: 180
        },
        'NVAX': {
            symbol: 'NVAX', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 47.75, boxdown: 46
        },
        'COIN': {
            symbol: 'COIN', volumeSum: 94928, tradingSum: 6395870, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 67.5, boxdown: 66.25
        },
        'PDD': {
            symbol: 'PDD', volumeSum: 573579, tradingSum: 35820728, premktHigh: 0, premktLow: 99999999,
            bias: 'short',
            boxup: 62.75, boxdown: 61
        },
        'TSLA': {
            symbol: 'TSLA', volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            boxup: 707, boxdown: 695
        },
        'BABA': {
            symbol: 'BABA', volumeSum: 5262371, tradingSum: 626251173, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            boxup: 118, boxdown: 112,
        },
        'AMZN': {
            symbol: 'AMZN', volumeSum: 45648, tradingSum: 4173173, premktHigh: 0, premktLow: 99999999,
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
let bestStocksToTradeToday = [
    window.TradingApp.StockCandidates['DOCU'],
    window.TradingApp.StockCandidates['NFLX'],
    //window.TradingApp.StockCandidates['TSLA'],
    //window.TradingApp.StockCandidates['SPY'],
];
window.TradingApp.Watchlist = bestStocksToTradeToday;

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
