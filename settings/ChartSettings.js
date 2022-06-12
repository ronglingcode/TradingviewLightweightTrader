window.TradingApp.ChartSettings = (function () {
    const defaultRed = 'rgb(255,82,82)';
    const defaultGreen = 'rgb(38,166,154)';
    const chartSettings = {
        width: 800,
        height: 440,
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
            //fixLeftEdge: true,
            rightOffset: 10,
            barSpacing: 10
        },
        /*
        grid: {
            vertLines: { visible: false },
            horzLines: { visible: false }
        }*/
    };

    const getChartSettings = (tabIndex) => {
        let wideWidth = 1628;
        let stocksCount = window.TradingApp.Watchlist.length
        if (stocksCount == 4) {
            return chartSettings;
        } else if (stocksCount == 3) {
            if (tabIndex == 0 || tabIndex == 2) {
                return chartSettings;
            } else {
                return {
                    ...chartSettings,
                    width: wideWidth
                };
            }

        } else if (stocksCount == 2) {
            return {
                ...chartSettings,
                width: wideWidth
            };
        }
    }

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
        },
        priceLineVisible: false
    };
    const vwapSettings = {
        color: '#6a1b9a',
        lineWidth: 1,
        crosshairMarkerVisible: false,
        autoscaleInfoProvider: () => null,
        priceLineVisible: false
    };

    const cloudAreaCandleSettings = {
        upColor: '#EFEBE9',
        downColor: '#EFEBE9',
        wickUpColor: '#EFEBE9',
        wickDownColor: '#EFEBE9',
        borderVisible: false,
        lastValueVisible: false,
        autoscaleInfoProvider: () => null,
        priceLineVisible: false
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

    const preMarketLineSettings = {
        color: 'black',
        lineWidth: 1,
        autoscaleInfoProvider: () => null,
        crosshairMarkerVisible: false,
        lastValueVisible: false,
        priceLineVisible: false
    };

    const openRangeLineSettings = {
        lineWidth: 1,
        crosshairMarkerVisible: false,
        priceLineVisible: false,
        lastValueVisible: false,
        autoscaleInfoProvider: () => null
    }

    return {
        chartSettings,
        getChartSettings,
        candlestickSeriesSettings,
        volumeSeriesSettings,
        vwapSettings,
        cloudAreaCandleSettings,
        cloudLineSettings,
        defaultRed,
        defaultGreen,
        preMarketLineSettings,
        openRangeLineSettings
    };
})();