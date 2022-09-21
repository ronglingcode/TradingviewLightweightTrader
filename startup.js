window.TradingApp = {
    'Settings': {
        'currentDay': new Date(), //('2022-01-28 6:30'),
        'drawIndicatorsAsSeries': true,
        // I can focus on no more than 4 stocks at the same time,
        // see details in https://sunrisetrading.atlassian.net/browse/TPS-161
        'maxStocksCount': 4,
    },
    'Algo': {},
    'Controller': {},
    'Profiles': {},
    'StockCandidates': {
        'AAPL': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            //boxup: 74, boxdown: 70
            //longTargets: [{ price: 157.5, percentage: 0.3 }],
            //shortTargets: [{ price: 170.3, percentage: 0.3 }]
        },
        'MU': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            //boxup: 162.5, boxdown: 158,
            //longTargets: [{ price: 59.95, percentage: 0.3 }],
            //shortTargets: [{ price: 50.7, percentage: 0.3 }]
        },
        'META': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 151, boxdown: 149,
            //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
            //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
        },
        'MRNA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 126, boxdown: 124,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 166.02, percentage: 0.3 }, { price: 165.6, percentage: 0.2 }]
        },
        'TSLA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 308.5, boxdown: 306.5,
            //longTargets: [{ price: 715, percentage: 0.2 }, { price: 718, percentage: 0.3 }, { price: 710, percentage: 0.3 }],
            //shortTargets: [{ price: 695.5, percentage: 0.25 }, { price: 693, percentage: 0.25 }]
        },
        'NVDA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'short',
            deferTrading: false,
            boxup: 141.5, boxdown: 139.5,
            //longTargets: [{ price: 715, percentage: 0.2 }, { price: 718, percentage: 0.3 }, { price: 710, percentage: 0.3 }],
            //shortTargets: [{ price: 695.5, percentage: 0.25 }, { price: 693, percentage: 0.25 }]
        },
        'BNTX': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            deferTrading: false,
            boxup: 127.5, boxdown: 125,
            //longTargets: [{ price: 156, percentage: 0.1 }, { price: 156.5, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'BA': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            deferTrading: false,
            boxup: 148, boxdown: 145.5,
            //longTargets: [{ price: 78.8, percentage: 0.1 }, { price: 78.95, percentage: 0.4 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'PYPL': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            //bias: 'long',
            deferTrading: false,
            boxup: 93.5, boxdown: 92,
            //longTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }],
            //shortTargets: [{ price: 123, percentage: 0.25 }, { price: 123, percentage: 0.25 }]
        },
        'AMD': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
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
            boxup: 385.53, boxdown: 382.65,
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
        'UPRO': {
            volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
            deferTrading: false
        }
    },
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    },
    'Test': {
        'Fixtures': {}
    }
};
window.TradingApp.Profiles.getActiveProfile = () => {
    let name = window.TradingApp.Secrets.activeProfile;
    return window.TradingApp.Profiles[name];
};