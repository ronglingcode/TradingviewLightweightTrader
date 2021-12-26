window.TradingApp.Chart = (function () {
    const createChartWidget = (tabIndex, stock) => {
        let symbol = stock.symbol;
        let widget = {
            stock: stock
        };
        let ChartSettings = window.TradingApp.ChartSettings;
        widget.htmlContents = {
            chart: document.getElementById("chart" + tabIndex),
            symbol: document.getElementById("symbol" + tabIndex)
        };
        widget.htmlContents.symbol.innerText = stock.symbol;
        widget.chart = LightweightCharts.createChart(
            widget.htmlContents.chart,
            ChartSettings.chartSettings
        );
        var volumeSeries = widget.chart.addHistogramSeries(ChartSettings.volumeSeriesSettings);
        var candleSeries = widget.chart.addCandlestickSeries(ChartSettings.candlestickSeriesSettings);
        var vwapSeries = widget.chart.addLineSeries(ChartSettings.vwapSettings);
        // comment out because open range indicators are price levels instead of series. 
        // series affects the price scale
        //let openRangeSeriesList = window.TradingApp.Indicators.createOpenRangeSeries(chart);

        function myClickHandler(param) {
            if (!param.point) {
                return;
            }

            console.log(`${widget.stock.symbol}: click at ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
            console.log(param)
            console.log(candleSeries.coordinateToPrice(param.point.y));
        }

        widget.chart.subscribeClick(myClickHandler);

        function myKeyDownHandler(keyboardEvent) {
            let code = keyboardEvent.code;
            if (keyboardEvent.shiftKey) {
                // shift key maps to thinkorswim shortcuts
                if (code === "KeyC") {
                    // shift + c: cancel all
                    console.log("cancel all for " + widget.stock.symbol);
                } else if (code === "KeyF") {
                    console.log("flatten for " + widget.stock.symbol);
                }
            } else {
                if (code === "KeyB") {
                    console.log("breakout buy for " + widget.stock.symbol);
                } else if (code === "KeyS") {
                    console.log("breakdown sell for " + widget.stock.symbol);
                }
            }
        }

        widget.htmlContents.chart.addEventListener('keydown', myKeyDownHandler);

        function myCrosshairMoveHandler(param) {
            console.log(param);
            if (!param.point) {
                return;
            }
            //console.log(`Crosshair moved to ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
        }

        widget.chart.subscribeClick(myCrosshairMoveHandler);
        let openingCandle;
        window.TradingApp.DB.initialize(stock.symbol);
        volumeSeries.setData(window.TradingApp.DB.dataBySymbol[symbol].volumes);

        let candles = window.TradingApp.DB.dataBySymbol[symbol].candles;
        let vwap = window.TradingApp.DB.dataBySymbol[symbol].vwap;
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
        return widget;
    };
    return {
        createChartWidget
    }
})();