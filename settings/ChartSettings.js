window.TradingApp.ChartSettings = (function () {
    const chartSettings = {
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
        crosshair: {
            mode: 0,
            vertLine: {
                style: LightweightCharts.LineStyle.Solid
            },
            horzLine: {
                style: LightweightCharts.LineStyle.Solid
            }
        },
        rightPriceScale: {
            borderColor: 'rgba(197, 203, 206, 0.8)'
        },
        timeScale: {
            borderColor: 'rgba(197, 203, 206, 0.8)',
            timeVisible: true,
        },
    };

    const candlestickSeriesSettings = {
        //upColor: '#08b265',
        //downColor: '#fb3434',// 'rgb(255,82,82)',
        //wickUpColor: '#08b265',// '#26a69a',// 'rgb(38,166,154)',
        //wickDownColor: '#fb3434',// '#ac2e2e',//'rgb(255,82,82)',
        borderVisible: false,
        scaleMargins: {
            top: 0,
            bottom: 0.3,
        },
    };
    const volumeSeriesSettings = {
        color: '#E1F5FE',
        priceFormat: {
            type: 'volume',
        },
        priceScaleId: '',
        scaleMargins: {
            top: 0.7,
            bottom: 0,
        }
    };
    const vwapSettings = {
        color: '#6a1b9a',
        lineWidth: 1,
        crosshairMarkerVisible: false
    };

    return {
        chartSettings,
        candlestickSeriesSettings,
        volumeSeriesSettings,
        vwapSettings
    };
})();