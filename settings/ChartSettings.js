let chartSettings = {
    width: 1000,
    height: 500,
    layout: {
        backgroundColor: '#ffffff',
        textColor: 'rgba(33, 56, 77, 1)',
    },
	grid: {
        horzLines: {
          color: '#F0F3FA',
        },
        vertLines: {
          color: '#F0F3FA',
        },
    },
    /* comment out because LightweightCharts is not loaded
    crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},*/
    crosshair: { mode: 0},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
        timeVisible: true
	},
};

let candlestickSeriesSettings = {
    upColor: 'rgb(38,166,154)',
    downColor: 'rgb(255,82,82)',
    wickUpColor: '#26a69a',// 'rgb(38,166,154)',
    wickDownColor: 'rgb(255,82,82)',
    borderVisible: false,
};

window.TradingApp_Settings_Tradingview = {
    'chartSettings': chartSettings,
    'candlestickSeriesSettings': candlestickSeriesSettings
};