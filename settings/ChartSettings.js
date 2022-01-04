window.TradingApp.ChartSettings = (function () {
    const defaultRed = 'rgb(255,82,82)';
    const defaultGreen = 'rgb(38,166,154)';
    const chartSettings = {
        width: 800,
        height: 545,
        layout: {
            backgroundColor: '#ffffff',
            textColor: 'rgba(33, 56, 77, 1)',
        },
        grid: {
            horzLines: {
                //color: '#F0F3FA',
            },
            vertLines: {
                //color: '#F0F3FA',
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
            //fixRightEdge: true,
            rightOffset: 10
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
        crosshairMarkerVisible: false,
        autoscaleInfoProvider: () => null,
    };

    const cloudAreaCandleSettings = {
        upColor: '#EFEBE9',
        downColor: '#EFEBE9',
        wickUpColor: '#EFEBE9',
        wickDownColor: '#EFEBE9',
        borderVisible: false,
        lastValueVisible: false,
        autoscaleInfoProvider: () => null,
    }

    const cloudLineSettings = {
        color: 'rgba(17, 17 ,31,0.7)',
        lineWidth: 2,
        crosshairMarkerVisible: false,
        autoscaleInfoProvider: () => null,
        lastValueVisible: false,
        lineStyle: LightweightCharts.LineStyle.SparseDotted,
        priceLineVisible: false
    };

    return {
        chartSettings,
        candlestickSeriesSettings,
        volumeSeriesSettings,
        vwapSettings,
        cloudAreaCandleSettings,
        cloudLineSettings,
        defaultRed,
        defaultGreen
    };
})();