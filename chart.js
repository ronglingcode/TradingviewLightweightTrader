window.TradingApp.Chart = (function () {
    const updateUI = (symbol, className, text) => {
        if (!window.TradingApp.Main.widgets[symbol]) {
            return;
        }
        let htmlContainter = window.TradingApp.Main.widgets[symbol].htmlContents.container;
        let target = htmlContainter.getElementsByClassName(className)[0];
        target.innerText = text;
    };
    const drawStopLoss = (symbol, price) => {
        let widget = TradingApp.Main.widgets[symbol];
        if (widget.stopLossPriceLine) {
            widget.candleSeries.removePriceLine(widget.stopLossPriceLine);
        }
        widget.stopLossPriceLine = createPriceLine(widget.candleSeries, price, "S/L")
    };
    const drawEntry = (symbol, price) => {
        let widget = TradingApp.Main.widgets[symbol];
        if (widget.entryPriceLine) {
            widget.candleSeries.removePriceLine(widget.entryPriceLine);
        }
        widget.entryPriceLine = createPriceLine(widget.candleSeries, price, "Entry")
    };
    const clearPriceLines = (symbol) => {
        let widget = TradingApp.Main.widgets[symbol];
        if (widget.entryPriceLine) {
            widget.candleSeries.removePriceLine(widget.entryPriceLine);
            widget.entryPriceLine = null;
        }
        if (widget.stopLossPriceLine) {
            widget.candleSeries.removePriceLine(widget.stopLossPriceLine);
            widget.stopLossPriceLine = null;
        }
    };
    const createPriceLine = (series, price, title, color, lineWidth, noPriceLabel) => {
        if (!color) {
            color = 'blue';
        }
        if (!lineWidth) {
            lineWidth = 1;
        }
        let axisLabelVisible = true;
        if (noPriceLabel) {
            axisLabelVisible = false;
        }
        return series.createPriceLine({
            price: price,
            color: color,
            title: title,
            lineStyle: LightweightCharts.LineStyle.Solid,
            lineWidth: lineWidth,
            axisLabelVisible: axisLabelVisible
        });
    };

    const setupQuantityBar = (bar, input) => {
        let buttons = bar.getElementsByTagName("button");
        input.addEventListener("keydown", function (e) {
            e.stopPropagation();
        });
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            button.addEventListener("click", (pointerEvent) => {
                console.log(input.value);

                input.value = pointerEvent.target.innerText;
            });
        }
    };

    const getMultiplier = (widget) => {
        let qty = widget.htmlContents.quantityInput.value;
        if (!qty || !qty.endsWith("%")) {
            return 1;
        }
        let multiplier = parseFloat(qty.substring(0, qty.length - 1));
        return multiplier / 100;
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
        widget.htmlContents.quantityBar = widget.htmlContents.container.getElementsByClassName("quantityBar")[0];
        widget.htmlContents.quantityInput = widget.htmlContents.quantityBar.getElementsByTagName("input")[0];
        setupQuantityBar(widget.htmlContents.quantityBar, widget.htmlContents.quantityInput);
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

        if (window.TradingApp.Settings.drawIndicatorsAsSeries) {
            widget.openRangeSeriesList = window.TradingApp.Indicators.createOpenRangeSeries(widget.chart);
        }
        function myClickHandler(param) {
            /*
            if (!param.point) {
                return;
            }
            let crosshairPrice = window.TradingApp.Main.widgets[symbol].crosshairPrice;
            window.TradingApp.Chart.drawStopLoss(symbol, crosshairPrice);
            */
        }

        widget.chart.subscribeClick(myClickHandler);

        widget.htmlContents.chart.addEventListener('contextmenu', event => {
            event.preventDefault();
            let crosshairPrice = window.TradingApp.Main.widgets[symbol].crosshairPrice;
            window.TradingApp.Chart.drawEntry(symbol, crosshairPrice);
        });

        widget.htmlContents.chart.addEventListener('dblclick', event => {
            console.log(event);
            let crosshairPrice = window.TradingApp.Main.widgets[symbol].crosshairPrice;
            window.TradingApp.Chart.drawStopLoss(symbol, crosshairPrice);
        });

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
        widget.htmlContents.container.addEventListener("blur", function (event) {
            console.log('blur');
            console.log(event);
        });
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

    const drawFilledPrice = async (symbol) => {
        let widget = TradingApp.Main.widgets[symbol];
        if (!widget) {
            return;
        }
        let account = await window.TradingApp.TOS.getAccountBySymbol(symbol);
        if (!account || !account.position) {
            if (widget.filledPriceLine) {
                widget.candleSeries.removePriceLine(widget.filledPriceLine);
            }
            return;
        }
        let price = account.position.averagePrice;

        if (widget.filledPriceLine) {
            widget.candleSeries.removePriceLine(widget.filledPriceLine);
        }
        widget.filledPriceLine = createPriceLine(widget.candleSeries, price, "Filled", "black");
        console.log(account.position);
    };
    return {
        createChartWidget,
        updateUI,
        createPriceLine,
        drawStopLoss,
        drawEntry,
        clearPriceLines,
        drawFilledPrice,
        getMultiplier
    }
})();