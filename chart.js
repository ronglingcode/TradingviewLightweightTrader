window.TradingApp.Chart = (function () {
    const initialize = () => {
        var chart = LightweightCharts.createChart(
            document.getElementById("chart"),
            window.TradingApp_Settings_Tradingview.chartSettings
        );
        var volumeSeries = chart.addHistogramSeries({
            color: '#E1F5FE',
            priceFormat: {
                type: 'volume',
            },
            priceScaleId: '',
            scaleMargins: {
                top: 0.7,
                bottom: 0,
            },
        });
        var candleSeries = chart.addCandlestickSeries(window.TradingApp_Settings_Tradingview.candlestickSeriesSettings);
        var vwapSeries = chart.addLineSeries({
            color: '#6a1b9a',
            lineWidth: 1,
            crosshairMarkerVisible: false
        });

        let openRangeSeriesList = window.TradingApp.Indicators.createOpenRangeSeries(chart);

        function myClickHandler(param) {
            if (!param.point) {
                return;
            }

            console.log(`Click at ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
            console.log(param)
            console.log(candleSeries.coordinateToPrice(param.point.y));
        }

        chart.subscribeClick(myClickHandler);

        function myKeyDownHandler(keyboardEvent) {
            let code = keyboardEvent.code;
            if (keyboardEvent.shiftKey) {
                // shift key maps to thinkorswim shortcuts
                if (code === "KeyC") {
                    // shift + c: cancel all
                    console.log("cancel all");
                } else if (code === "KeyF") {
                    console.log("flatten");
                }
            } else {
                if (code === "KeyB") {
                    console.log("breakout buy");
                } else if (code === "KeyS") {
                    console.log("breakdown sell");
                }
            }
        }

        document.getElementById("chart").addEventListener('keydown', myKeyDownHandler);

        function myCrosshairMoveHandler(param) {
            console.log(param);
            if (!param.point) {
                return;
            }

            //console.log(`Crosshair moved to ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
        }

        chart.subscribeClick(myCrosshairMoveHandler);
        let openingCandle;
        window.TradingApp.DB.initialize();
        volumeSeries.setData(window.TradingApp.DB.volumes);

        let candles = window.TradingApp.DB.candles;
        let vwap = window.TradingApp.DB.vwap;
        /*
        openRangeSeriesList[0].setData(window.TradingApp.DB.openLow3R);
        openRangeSeriesList[1].setData(window.TradingApp.DB.openLow2R);
        openRangeSeriesList[2].setData(window.TradingApp.DB.openLow1R);
        openRangeSeriesList[3].setData(window.TradingApp.DB.openLow);
        openRangeSeriesList[4].setData(window.TradingApp.DB.openPrice);
        openRangeSeriesList[5].setData(window.TradingApp.DB.openHigh);
        openRangeSeriesList[6].setData(window.TradingApp.DB.openHigh1R);
        openRangeSeriesList[7].setData(window.TradingApp.DB.openHigh2R);
        openRangeSeriesList[8].setData(window.TradingApp.DB.openHigh3R);
        */
        vwapSeries.setData(vwap);
        for (let i = 0; i < candles.length; i++) {
            let d = new Date(candles[i].time * 1000);
            // UTC 22:30 is market open time
            if (d.getHours() == 22 && d.getMinutes() == 30) {
                openingCandle = candles[i];
            }
        }

        candleSeries.setData(candles);
        window.TradingApp.Indicators.openRangeBreakoutPriceLines(openingCandle).forEach(priceLine => {
            candleSeries.createPriceLine(priceLine);
        });
        let lastCandle = candles[candles.length - 1];
        let lastCandleClose = lastCandle.close;

        setInterval(function () {
            lastCandle.close = lastCandleClose + Math.random() - 0.5;
            lastCandle.high = Math.max(lastCandle.high, lastCandle.close);
            lastCandle.low = Math.min(lastCandle.low, lastCandle.close);
            candleSeries.update(lastCandle);
        }, 200);
    };
    return {
        initialize
    }
})();