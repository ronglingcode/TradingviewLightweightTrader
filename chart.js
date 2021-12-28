window.TradingApp.Chart = (function () {
    const updateUI = (symbol, className, text) => {
        let htmlContainter = window.TradingApp.Main.widgets[symbol].htmlContents.container;
        let target = htmlContainter.getElementsByClassName(className)[0];
        target.innerText = text;
    };
    const createChartWidget = (tabIndex, stock) => {
        let symbol = stock.symbol;
        let widget = {
            stock: stock,
            tabIndex: tabIndex,
            crosshairPrice: 0
        };
        widget.htmlContents = {
            chart: document.getElementById("chart" + tabIndex),
            symbol: document.getElementById("symbol" + tabIndex),
            container: document.getElementById("chartContainer" + tabIndex)
        };
        widget.htmlContents.symbol.innerText = stock.symbol;
        widget.chart = LightweightCharts.createChart(
            widget.htmlContents.chart,
            window.TradingApp.ChartSettings.chartSettings
        );
        widget.orbSeries = widget.chart.addCandlestickSeries(window.TradingApp.ChartSettings.cloudAreaCandleSettings);
        var volumeSeries = widget.chart.addHistogramSeries(window.TradingApp.ChartSettings.volumeSeriesSettings);
        var candleSeries = widget.chart.addCandlestickSeries(window.TradingApp.ChartSettings.candlestickSeriesSettings);
        var vwapSeries = widget.chart.addLineSeries(window.TradingApp.ChartSettings.vwapSettings);
        widget.volumeSeries = volumeSeries;
        widget.candleSeries = candleSeries;
        widget.vwapSeries = vwapSeries;

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

        widget.htmlContents.container.addEventListener('mouseover', function (mouseEvent) {
            for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
                let element = document.getElementById("chartContainer" + i);
                if (i === widget.tabIndex) {
                    element.classList.add("active");
                    window.TradingApp.State.activeSymbol = widget.stock.symbol;
                    window.TradingApp.State.activeTabIndex = widget.tabIndex;
                    widget.htmlContents.container.focus();
                } else {
                    element.classList.remove("active");
                }
            }
        });
        function myCrosshairMoveHandler(param) {
            if (!param.point) {
                return;
            }
            let price = candleSeries.coordinateToPrice(param.point.y);
            widget.crosshairPrice = price;
        }

        widget.chart.subscribeCrosshairMove(myCrosshairMoveHandler);
        /*
        let openingCandle;
        window.TradingApp.DB.initialize(stock.symbol);
        volumeSeries.setData(window.TradingApp.DB.dataBySymbol[symbol].volumes);

        let candles = window.TradingApp.DB.dataBySymbol[symbol].candles;
        let vwap = window.TradingApp.DB.dataBySymbol[symbol].vwap;

        openRangeSeriesList[0].setData(window.TradingApp.DB.openLow3R);
        openRangeSeriesList[1].setData(window.TradingApp.DB.openLow2R);
        openRangeSeriesList[2].setData(window.TradingApp.DB.openLow1R);
        openRangeSeriesList[3].setData(window.TradingApp.DB.openLow);
        openRangeSeriesList[4].setData(window.TradingApp.DB.openPrice);
        openRangeSeriesList[5].setData(window.TradingApp.DB.openHigh);
        openRangeSeriesList[6].setData(window.TradingApp.DB.openHigh1R);
        openRangeSeriesList[7].setData(window.TradingApp.DB.openHigh2R);
        openRangeSeriesList[8].setData(window.TradingApp.DB.openHigh3R);
        
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
        */

        return widget;
    };
    return {
        createChartWidget,
        updateUI
    }
})();