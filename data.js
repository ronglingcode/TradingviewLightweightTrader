window.TradingData = {
    'StockSelection': {
        'index': [{ symbol: 'QQQ', highQualityNews: 'practice' }, { symbol: 'SPY', highQualityNews: 'practice' }],
        '10/24/2022': {
            'SPYRange': { 'high': 378, 'low': 369.4 },
            'stocks': [
                {
                    symbol: 'FUTU', highQualityNews: 'china GDP',
                    longTargets: [],
                    shortTargets: [{ price: 28.05, percentage: 0.1 }]
                },
                {
                    symbol: 'TSLA', highQualityNews: 'china gdp',
                    longTargets: [],
                    shortTargets: [{ price: 200.3, percentage: 0.2 }]
                },
                {
                    symbol: 'PDD', highQualityNews: 'china gdp',
                    longTargets: [],
                    shortTargets: [{ price: 48.6, percentage: 0.2 }]
                },
                {
                    symbol: 'BABA', highQualityNews: 'china gdp',
                    longTargets: [{ price: 67, percentage: 0.2 }],
                    shortTargets: [{ price: 60.1, percentage: 0.2 }]
                },
                /*
                {
                    symbol: 'SPY', highQualityNews: 'pmi numbers',
                    longTargets: [{ price: 378.03, percentage: 0.3 }],
                    shortTargets: []
                }*/
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'FUTU': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 30, boxdown: 28.5,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 211, boxdown: 204,
                    deferTrading: false,
                },
                'PDD': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 50, boxdown: 48,
                    deferTrading: false,
                },
                'BABA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 64.5, boxdown: 62.5,
                    deferTrading: false,
                },
            }
        },
        '10/20/2022': {
            'SPYRange': { 'high': 371.4, 'low': 365.93 },
            'stocks': [
                {
                    symbol: 'IBM', highQualityNews: 'earnings',
                    longTargets: [{ price: 129.9, percentage: 0.3 }],
                    shortTargets: []
                },
                {
                    symbol: 'TSLA', highQualityNews: 'earnings',
                    longTargets: [{ price: 214, percentage: 0.3 }],
                    shortTargets: [{ price: 200.5, percentage: 0.3 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'job numbers',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'job numbers',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'IBM': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 128.5, boxdown: 126.5,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 210.5, boxdown: 206,
                    deferTrading: false,
                },
            }
        },
        '10/18/2022': {
            'SPYRange': { 'high': 369.7, 'low': 363.14 },
            'stocks': [
                {
                    symbol: 'FUBO', highQualityNews: 'raise guidance',
                    longTargets: [{ price: 4.98, percentage: 0.2 }],
                    shortTargets: []
                },
                {
                    symbol: 'TSLA', highQualityNews: 'earnings tomorrow',
                    longTargets: [{ price: 234, percentage: 0.2 }],
                    shortTargets: []
                },
                /*
                {
                    symbol: 'CRM', highQualityNews: 'investor take stake',
                    longTargets: [],
                    shortTargets: [{ price: 152.1, percentage: 0.3 }]
                },*/
                {
                    symbol: 'QQQ', highQualityNews: 'europe news',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'europe news',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'FUBO': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'MSFT': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'QQQ': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    boxup: 230, boxdown: 227,
                    deferTrading: false,
                },
                'CRM': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    deferTrading: false,
                },
            }
        },
        '10/12/2022': {
            'SPYRange': { 'high': 361.46, 'low': 355.56 },
            'stocks': [
                {
                    symbol: 'MRNA', highQualityNews: 'partner with merck for cancer vaccine',
                    longTargets: [{ price: 139.8, percentage: 0.2 }, { price: 141.98, percentage: 0.2 }],
                    shortTargets: [{ price: 68.05, percentage: 0.2 }]
                },
                {
                    symbol: 'TSLA', highQualityNews: 'analyst short',
                    longTargets: [],
                    shortTargets: [{ price: 215.45, percentage: 0.1 }, { price: 215.06, percentage: 0.1 }]
                },
                {
                    symbol: 'BA', highQualityNews: 'downgrade',
                    longTargets: [],
                    shortTargets: [{ price: 127.2, percentage: 0.1 }, { price: 125.5, percentage: 0.3 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'PPI numbers',
                    longTargets: [],
                    shortTargets: [{ price: 35.625, percentage: 0.2 }]
                }
            ],
            'StockCandidates': {
                'SAMPLE': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                    //boxup: 32.5, boxdown: 31,
                    //longTargets: [{ price: 80.5, percentage: 0.1 }, { price: 80.9, percentage: 0.25 }],
                    //shortTargets: [{ price: 26.55, percentage: 0.20 }, { price: 25.55, percentage: 0.50 }]
                },
                'MRNA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
                'BA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
                'SPY': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
                'TSLA': {
                    volumeSum: 0, tradingSum: 0, premktHigh: 0, premktLow: 99999999,
                    bias: 'short',
                    deferTrading: false,
                },
            }
        },
        '10/11/2022': {
            'SPYRange': { 'high': 366.56, 'low': 358.72 },
            'stocks': [
                {
                    symbol: 'COIN', highQualityNews: 'partner with google',
                    longTargets: [],
                    shortTargets: [{ price: 68.05, percentage: 0.2 }]
                },
                {
                    symbol: 'RBLX', highQualityNews: 'downgrade',
                    longTargets: [],
                    shortTargets: [{ price: 32.05, percentage: 0.1 }, { price: 31.6, percentage: 0.1 }]
                },
                {
                    symbol: 'META', highQualityNews: 'downgrade',
                    longTargets: [],
                    shortTargets: [{ price: 130.1, percentage: 0.3 }]
                },
                {
                    symbol: 'DASH', highQualityNews: 'contractor laws',
                    longTargets: [],
                    shortTargets: [{ price: 41.2, percentage: 0.2 }, { price: 40.5, percentage: 0.2 }]
                }
            ],
        },
        '10/10/2022': {
            'SPYRange': { 'high': 366.5, 'low': 358.7 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'delivery',
                    longTargets: [{ price: 228.5, percentage: 0.3 }],
                    shortTargets: [{ price: 220.1, percentage: 0.2 }]
                },
                {
                    symbol: 'AMD', highQualityNews: 'us china lows',
                    longTargets: [{ price: 57.9, percentage: 0.3 }],
                    shortTargets: [{ price: 57.2, percentage: 0.3 }]
                },
                {
                    symbol: 'RIVN', highQualityNews: 'recall',
                    longTargets: [{ price: 32.9, percentage: 0.5 }],
                    shortTargets: [{ price: 30.1, percentage: 0.3 }, { price: 29.8, percentage: 0.2 }]
                },
                {
                    symbol: 'PYPL', highQualityNews: 'retract announcement',
                    longTargets: [{ price: 89.5, percentage: 0.3 }],
                    shortTargets: [{ price: 83.2, percentage: 0.3 }]
                }
            ],
        },
        '10/7/2022': {
            'SPYRange': { 'high': 375.5, 'low': 367.94 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'semi truck production',
                    longTargets: [{ price: 238.5, percentage: 0.1 }, { price: 239.5, percentage: 0.1 }],
                    shortTargets: [{ price: 234.1, percentage: 0.3 }]
                },
                {
                    symbol: 'AMD', highQualityNews: 'cuts outlook',
                    longTargets: [{ price: 65.5, percentage: 0.1 }, { price: 65.97, percentage: 0.2 }],
                    shortTargets: [{ price: 233.35, percentage: 0.1 }, { price: 228.1, percentage: 0.3 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'non farm payroll',
                    longTargets: [{ price: 277.62, percentage: 0.3 }],
                    shortTargets: [{ price: 273.72, percentage: 0.1 }, { price: 272.52, percentage: 0.1 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'non farm payrolls',
                    longTargets: [{ price: 370.7, percentage: 0.3 }],
                    shortTargets: [{ price: 367.7, percentage: 0.2 }]
                }
            ],
        },
        '10/6/2022': {
            'SPYRange': { 'high': 383.12, 'low': 372.56 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'price cuts',
                    longTargets: [{ price: 244.1, percentage: 0.1 }, { price: 245, percentage: 0.3 }],
                    shortTargets: [{ price: 234.1, percentage: 0.3 }]
                },
                {
                    symbol: 'PINS', highQualityNews: 'upgrade',
                    longTargets: [{ price: 25.88, percentage: 0.2 }, { price: 26.7, percentage: 0.2 }],
                    shortTargets: []
                },
                {
                    symbol: 'QQQ', highQualityNews: 'jobless numbers',
                    longTargets: [{ price: 282.72, percentage: 0.3 }],
                    shortTargets: [{ price: 280.27, percentage: 0.3 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'jobless numbers',
                    longTargets: [{ price: 376.93, percentage: 0.3 }],
                    shortTargets: [{ price: 375.58, percentage: 0.1 }]
                }
            ],
        },
        '10/5/2022': {
            'SPYRange': { 'high': 379.65, 'low': 373.94 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'elon buy twitter', longTargets: [],
                    shortTargets: [{ price: 244.1, percentage: 0.1 }, { price: 241.5, percentage: 0.1 }, { price: 242.5, percentage: 0.1 }, { price: 238.5, percentage: 0.3 }]
                },
                {
                    symbol: 'AMD', highQualityNews: 'price cut', longTargets: [],
                    shortTargets: [{ price: 66.3, percentage: 0.1 }, { price: 65.97, percentage: 0.1 }, { price: 65.5, percentage: 0.1 }, { price: 64.92, percentage: 0.1 }]
                },
                {
                    symbol: 'QQQ', highQualityNews: 'oil production cut',
                    longTargets: [{ price: 279.41, percentage: 0.1 }, { price: 279.9, percentage: 0.1 }, { price: 280.22, percentage: 0.3 }],
                    shortTargets: [{ price: 276.8, percentage: 0.3 }, { price: 275.8, percentage: 0.3 }]
                },
                {
                    symbol: 'SPY', highQualityNews: 'oil production cut',
                    longTargets: [{ price: 375.2, percentage: 0.3 }],
                    shortTargets: [{ price: 373.42, percentage: 0.1 }, { price: 372.95, percentage: 0.3 }]
                }
            ],
        },
        '10/4/2022': {
            'SPYRange': { 'high': 368.38, 'low': 363.11 },
            'stocks': [
                { symbol: 'RIVN', highQualityNews: 'delivery numbers good', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] },
                { symbol: 'TSLA', highQualityNews: 'RIVN news', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] },
                { symbol: 'QQQ', highQualityNews: '7am job numbers', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] },
                { symbol: 'SPY', highQualityNews: '7am job numbers', longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }] }
            ],
        },
        '10/3/2022': {
            'SPYRange': { 'high': 361.47, 'low': 356.83 },
            'stocks': [
                {
                    symbol: 'TSLA', highQualityNews: 'delivery numbers miss',
                    longTargets: [{ price: 157.5, percentage: 0.3 }], shortTargets: [{ price: 170.3, percentage: 0.3 }]
                },
                { symbol: 'NIO', highQualityNews: 'delivery', targets: [] },
                { symbol: 'QQQ', highQualityNews: 'europe give up tax cuts', targets: [] },
                { symbol: 'SPY', highQualityNews: 'europe give up tax cuts', targets: [] }
            ],
        },
        '9/30/2022': {
            'SPYRange': { 'high': 368, 'low': 360.7 },
            'stocks': [
                { symbol: 'NKE', highQualityNews: 'earnings' },
                { symbol: 'TSLA', highQualityNews: 'AI day' },
                //{ symbol: 'META', highQualityNews: 'hiring freez' },
                { symbol: 'MU', highQualityNews: 'earnings' },
                // { symbol: 'QQQ', highQualityNews: 'GDP, job numbers' },
                { symbol: 'SPY', highQualityNews: 'GDP, job numbers' }
            ],
        },
        '9/29/2022': {
            'SPYRange': { 'high': 371.32, 'low': 365.97 },
            'stocks': [
                { symbol: 'AAPL', highQualityNews: 'BoA downgrade' },
                { symbol: 'TSLA', highQualityNews: 'small firm price cut' },
                //{ symbol: 'KMX', highQualityNews: 'earnings, below at time low' },
                { symbol: 'BIIB', highQualityNews: 'second day drug news' },
                // { symbol: 'QQQ', highQualityNews: 'GDP, job numbers' },
                { symbol: 'SPY', highQualityNews: 'GDP, job numbers' }
            ],
        },
        '9/28/2022': {
            'SPYRange': { 'high': 366.5, 'low': 362.2 },
            'stocks': [
                { symbol: 'AAPL', highQualityNews: 'production news' }, { symbol: 'BIIB', highQualityNews: 'phase 3' },
                { symbol: 'LLY', highQualityNews: 'BIIB news' }, { symbol: 'PRTA', highQualityNews: 'BIIB news' },
                //{ symbol: 'QQQ', highQualityNews: 'market' },{ symbol: 'SPY', highQualityNews: 'market' }
            ],
        },
        '6/10/2022': ['DOCU', 'NFLX', 'TSLA', 'SPY'],
        '6/13/2022': ['AMD', 'TSLA', 'QQQ', 'SPY'],
        '6/14/2022': ['ORCL', 'COIN', 'QQQ', 'SPY'],
        '6/15/2022': ['QQQ', 'SPY', 'SNOW', 'NIO'],
        '6/16/2022': ['QQQ', 'SPY', 'TSLA', 'BA'],
        '6/17/2022': ['QQQ', 'SPY', 'BABA', 'ROKU'],
        '6/21/2022': ['TSLA', 'NIO', 'QQQ', 'SPY'],
        '6/22/2022': ['AAPL', 'AMD', 'QQQ', 'TSLA'],
        '6/23/2022': ['TSLA', 'SNOW', 'PEV', 'SPY'],
        '6/24/2022': ['TSLA', 'ZEN', 'QQQ', 'SPY'],
        '6/27/2022': [
            { symbol: 'CHWY', news: 'upgrade' }, { symbol: 'COIN', news: 'downgrade' },
            { symbol: 'QQQ', news: '' }, { symbol: 'SPY', news: '' }],
        '6/28/2022': [
            { symbol: 'LI', news: 'offering' }, { symbol: 'TCOM', news: 'earnings gap up' },
            { symbol: 'DIS', news: 'earnings gap up' }, { symbol: 'NKE', news: 'earnings gap down' }],
        '6/29/2022': [
            { symbol: 'UPST', news: 'downgrade' }, { symbol: 'NIO', news: 'short seller report' },
            { symbol: 'QQQ', news: '' }, { symbol: 'SPY', news: '' }],
        '6/30/2022': [
            { symbol: 'TSLA', news: 'relative strong' }, { symbol: 'RH', news: 'earnings miss, price cut' },
            { symbol: 'QQQ', news: 'PCE data' }, { symbol: 'SPY', news: 'PCE data' }],
        '7/1/2022': [
            { symbol: 'KSS', news: 'aquisition talk failed' }, { symbol: 'AMD', news: 'earnings miss' },
            { symbol: 'TSLA', news: 'expecting good deliveries' }, { symbol: 'SPY', news: '' }],
        '7/5/2022': [
            { symbol: 'TSLA', news: 'delivery not good' }, { symbol: 'BNTX', news: 'patent lawsuit' },
            { symbol: 'AMD', news: 'very weak' },
            { symbol: 'QQQ', news: 'russia cut pipeline drags down market' }, { symbol: 'SPY', news: 'russia cut pipeline drags down market' }],
        '7/6/2022': [
            { symbol: 'DASH', news: 'amazon with grubhub' }, { symbol: 'UBER', news: 'amazon with grubhub' },
            { symbol: 'TDOC', news: 'tier 1 upgrade' }, { symbol: 'AMD', news: 'continue strength' },
            { symbol: 'QQQ', news: '' }, { symbol: 'SPY', news: '' }],
        '7/7/2022': [
            { symbol: 'GME', news: 'stock split approval' }, { symbol: 'USEA', news: 'new stock' },
            { symbol: 'NVDA', news: 'samsung good news' }, { symbol: 'AMD', news: 'samsung good news' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '7/8/2022': [
            { symbol: 'UPST', news: 'bad preliminary Q2' }, { symbol: 'TWTR', news: 'elon not buying' },
            { symbol: 'GME', news: 'CFO and layoff' },
            { symbol: 'QQQ', news: 'econ data release' }, { symbol: 'SPY', news: 'econ data release' }],
        '7/11/2022': [
            { symbol: 'META', news: 'small firm downgrade' }, { symbol: 'TSLA', news: 'elon not buy twitter, not need to sell TSLA to raise cash' },
            { symbol: 'BABA', news: 'china news' }, { symbol: 'DWAC', news: 'elon not buying twitter' },
            { symbol: 'QQQ', news: 'big gap' }, { symbol: 'SPY', news: 'big gap' }],
        '7/12/2022': [
            { symbol: 'XLE', news: 'oil crash premarket' }, { symbol: 'TSLA', news: 'twitter news/lawsuit continues' },
            { symbol: 'QQQ', news: 'stronger than SPY' }, { symbol: 'SPY', news: 'gap below y-low' }],
        '7/13/2022': [
            { symbol: 'U', news: 'buy IS for too much money' }, { symbol: 'SPY', news: 'CPI data high' },
            { symbol: 'QQQ', news: 'CPI data high' }],
        '7/14/2022': [
            { symbol: 'JPM', news: 'earnings miss' }, { symbol: 'TSM', news: 'earnings beat' },
            { symbol: 'AMD', news: 'upgrade & TSM up' }, { symbol: 'NVDA', news: 'TSM up' },
            { symbol: 'QQQ', news: 'PPI data' }, { symbol: 'SPY', news: 'PPI data' }],
        '7/15/2022': [
            { symbol: 'AMD', news: 'chips strong' }, { symbol: 'NVDA', news: 'chips strong' },
            { symbol: 'QQQ', news: 'retail data' }, { symbol: 'SPY', news: 'retail data' }],
        '7/18/2022': [
            { symbol: 'BA', news: 'big order' }, { symbol: 'GS', news: 'earnings beat' },
            { symbol: 'AMD', news: 'semi' }, { symbol: 'NVDA', news: 'semi' },
            { symbol: 'QQQ', news: 'big gap up' }, { symbol: 'SPY', news: 'big gap up' }],
        '7/19/2022': [
            { symbol: 'IBM', news: 'earnings, big gap down' }, { symbol: 'APLS', news: 'FDA granted priority review' },
            { symbol: 'AAPL', news: 'slow hiring' }, { symbol: 'NVDA', news: 'ASML earnings coming' },
            { symbol: 'QQQ', news: 'big gap up' }, { symbol: 'SPY', news: 'big gap up' }],
        '7/20/2022': [
            { symbol: 'NFLX', news: 'earnings, big gap up' }, { symbol: 'TSLA', news: 'TWTR wins fast trail agains Musk' },
            { symbol: 'AMD', news: 'ASML earnings' }, { symbol: 'NVDA', news: 'ASML earnings' },
            { symbol: 'QQQ', news: 'europ river dry' }, { symbol: 'SPY', news: 'europ river dry' }],
        '7/21/2022': [
            { symbol: 'MSFT', news: 'slow hiring' }, { symbol: 'DOCU', news: 'downgrade' },
            { symbol: 'AMD', news: 'chips law' }, { symbol: 'TSLA', news: 'earnings' },
            { symbol: 'UAL', news: 'earnings' }, { symbol: 'SMCI', news: 'earnings' },
            { symbol: 'QQQ', news: 'job numbers' }, { symbol: 'SPY', news: 'job numbers' }],
        '7/22/2022': [
            { symbol: 'META', news: 'snap earnings' }, { symbol: 'TTD', news: 'snap earnings' },
            { symbol: 'AXP', news: 'earnings beat' }, { symbol: 'TSLA', news: 'upgrade' }],
        '7/25/2022': [
            { symbol: 'NVDA', news: 'chips price cut' }, { symbol: 'AMD', news: 'chips price cut' },
            { symbol: 'META', news: 'price cut' }, { symbol: 'TSLA', news: 'upgrade' }],
        '7/26/2022': [
            { symbol: 'WMT', news: 'cut outlook' }, { symbol: 'SHOP', news: 'layoff' },
            { symbol: 'COST', news: 'WMT down' }, { symbol: 'COIN', news: 'SEC investigation' },
            { symbol: 'CHWY', news: 'downgrade' }, { symbol: 'BABA', news: 'listing' }],
        '7/27/2022': [
            { symbol: 'BA', news: 'earnings' }, { symbol: 'SAVA', news: 'criminal investigation' },
            { symbol: 'SPOT', news: 'earnings' }, { symbol: 'SHOP', news: 'earnings' },
            { symbol: 'QQQ', news: 'consumer condifident at 10am' }, { symbol: 'SPY', news: 'consumer condifident at 10am' }],
        '7/28/2022': [
            { symbol: 'TSLA', news: 'energy bill' }, { symbol: 'META', news: 'earnings' },
            { symbol: 'QQQ', news: 'gdp numbers' }, { symbol: 'SPY', news: 'gdp numbers' }],
        '7/29/2022': [
            { symbol: 'ROKU', news: 'earnings' }, { symbol: 'BABA', news: 'Jack Ma give up ant control' },
            { symbol: 'AAPL', news: 'earnings' }, { symbol: 'AMZN', news: 'earnings' },
            { symbol: 'INTC', news: 'earnings' }, { symbol: 'TSLA', news: 'market move' },
            { symbol: 'QQQ', news: 'PCE numbers' }, { symbol: 'SPY', news: 'PCE numbers' }],
        '8/1/2022': [
            { symbol: 'BA', news: 'clear delivery' }, { symbol: 'TSLA', news: 'chinese EV delivery numbers' },
            { symbol: 'QQQ', news: 'US china news' }, { symbol: 'SPY', news: 'US china news' }],
        '8/2/2022': [
            { symbol: 'PINS', news: 'earnings' }, { symbol: 'SNOW', news: 'downgrade' },
            { symbol: 'QQQ', news: 'US china news' }, { symbol: 'SPY', news: 'US china news' }],
        '8/3/2022': [
            { symbol: 'PYPL', news: 'earnings' }, { symbol: 'MTCH', news: 'earnings' },
            { symbol: 'AMD', news: 'earnings' }, { symbol: 'NVDA', news: 'AMD earnings' },
            { symbol: 'QQQ', news: 'FED says soft landing' }, { symbol: 'SPY', news: 'FED says soft landing' }],
        '8/5/2022': [
            { symbol: 'TWLO', news: 'earnings' }, { symbol: 'NET', news: 'AMD earnings' },
            { symbol: 'SQ', news: 'earnings' }, { symbol: 'DASH', news: 'earnings' },
            { symbol: 'QQQ', news: 'nonfarm payroll' }, { symbol: 'SPY', news: 'nonfarm payroll' }],
        '8/9/2022': [
            { symbol: 'NVAX', news: 'guidance down' }, { symbol: 'UPST', news: 'earnings' },
            { symbol: 'TSLA', news: 'delivery numbers' }, { symbol: 'U', news: 'Chatter' },
            { symbol: 'QQQ', news: 'small gap down' }, { symbol: 'SPY', news: 'small gap down' }],
        '8/10/2022': [
            { symbol: 'TSLA', news: 'elon done selling' }, { symbol: 'RBLX', news: 'earnings' },
            { symbol: 'TTD', news: 'earnings' }, { symbol: 'NVAX', news: 'price cuts' },
            { symbol: 'QQQ', news: 'CPI good' }, { symbol: 'SPY', news: 'CPI good' }],
        '8/12/2022': [
            { symbol: 'BABA', news: 'china news' }, { symbol: 'ILMN', news: 'earnings' },
            { symbol: 'QQQ', news: 'consumer sentiment' }, { symbol: 'SPY', news: 'consumer sentiment' }],
        '8/31/2022': [
            { symbol: 'SNAP', news: 'layoff news' }, { symbol: 'BABA', news: 'china news' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/1/2022': [
            { symbol: 'OKTA', news: 'earnings' }, { symbol: 'MDB', news: 'earnings' },
            { symbol: 'NVDA', news: 'china license' }, { symbol: 'AMD', news: 'NVDA news' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/2/2022': [
            { symbol: 'TSLA', news: 'new month sales' }, { symbol: 'LULU', news: 'earnings' },
            { symbol: 'AAPL', news: 'xiao lang pick' },
            { symbol: 'BABA', news: 'china lockdown' },
            { symbol: 'NVDA', news: 'downgrade' },
            { symbol: 'QQQ', news: 'non farm payroll' }, { symbol: 'SPY', news: 'non farm payroll' }],
        '9/6/2022': [
            { symbol: 'TSLA', news: 'upgrade' }, { symbol: 'AAPL', news: 'new product conference' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/8/2022': [
            { symbol: 'ASAN', news: 'earnings' }, { symbol: 'FSLR', news: 'upgrade' },
            { symbol: 'QQQ', news: 'gap down' }, { symbol: 'SPY', news: 'gap down' }],
        '9/9/2022': [
            { symbol: 'DOCU', news: 'earnings' }, { symbol: 'ZS', news: 'earnings' },
            { symbol: 'QQQ', news: 'gap down' }, { symbol: 'SPY', news: 'gap down' }],
        '9/12/2022': [
            { symbol: 'RBLX', news: 'down rating' }, { symbol: 'AAPL', news: 'stronger' },
            { symbol: 'QQQ', news: 'gap up' }, { symbol: 'SPY', news: 'gap up' }],
        '9/13/2022': [
            { symbol: 'CVNA', news: 'gap down' }, { symbol: 'TSLA', news: 'every day' },
            { symbol: 'COIN', news: 'weaker' }, { symbol: 'AAPL', news: 'stronger' },
            { symbol: 'QQQ', news: 'CPI' }, { symbol: 'SPY', news: 'CPI' }],
        '9/14/2022': [
            { symbol: 'SQ', news: 'downgrade' }, { symbol: 'TSLA', news: 'every day' },
            { symbol: 'META', news: 'weaker' }, { symbol: 'AAPL', news: 'in play' },
            { symbol: 'QQQ', news: 'range day' }, { symbol: 'SPY', news: 'range day' }],
        '9/15/2022': [
            { symbol: 'ADBE', news: 'acquisition' }, { symbol: 'NFLX', news: 'upgrade' },
            { symbol: 'META', news: 'weaker' }, { symbol: 'TSLA', news: 'stronger' },
            { symbol: 'QQQ', news: 'retail sales' }, { symbol: 'SPY', news: 'retail sales' }],
        '9/16/2022': [
            { symbol: 'FDX', news: 'earnings' }, { symbol: 'AMZN', news: 'FDX drag' },
            { symbol: 'QQQ', news: 'gap down, big trend' }, { symbol: 'SPY', news: 'gap down, big trend' }],
        '9/20/2022': [
            { symbol: 'F', news: 'production stuck' }, { symbol: 'PYPL', news: 'downgrade' },
            { symbol: 'BNTX', news: 'covid over' }, { symbol: 'MRNA', news: 'covid over' },
            { symbol: 'TSLA', news: 'momemutum' }, { symbol: 'BA', news: 'supply deal' },
            { symbol: 'QQQ', news: 'gap down range day' }, { symbol: 'SPY', news: 'gap down range day' }],
        '9/21/2022': [
            { symbol: 'TSLA', news: 'relative strength' }, { symbol: 'AAPL', news: 'heavy weight' },
            { symbol: 'LMT', news: 'war escalate' }, { symbol: 'SPY', news: 'FOMC day' }],
        '9/22/2022': [
            { symbol: 'TSLA', news: 'recall' }, { symbol: 'LI', news: 'launch new SUV' },
            { symbol: 'CRM', news: 'raise guidance' }, { symbol: 'SQ', news: 'downgrade' }],
        '9/23/2022': {
            'SPYRange': { 'high': 123, 'low': 567 },
            'stocks': [
                { symbol: 'COIN', highQualityNews: 'downgrade' }, { symbol: 'FDX', highQualityNews: 'earnings' },
                { symbol: 'QQQ', highQualityNews: 'big gap down' }, { symbol: 'SPY', highQualityNews: 'big gap down' }],
        },
        '9/26/2022': {
            'SPYRange': { 'high': 369.72, 'low': 363 },
            'stocks': [
                { symbol: 'TSLA', highQualityNews: 'fire in berlin factory' }, { symbol: 'WYNN', highQualityNews: 'upgrade' },
                { symbol: 'QQQ', highQualityNews: 'big gap down' }, { symbol: 'SPY', highQualityNews: 'big gap down' }],
        },
        '9/27/2022': {
            'SPYRange': { 'high': 369.72, 'low': 363.11 },
            'stocks': [
                { symbol: 'TSLA', highQualityNews: 'twiter case delayed' }, { symbol: 'NVDA', highQualityNews: 'upgrade' },
                { symbol: 'COIN', highQualityNews: 'fed talk crypto' }, { symbol: 'SPY', highQualityNews: 'durable goods data' }],
        },
    }
};