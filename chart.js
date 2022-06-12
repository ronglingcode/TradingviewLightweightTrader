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
    const addMarker = (symbol, marker) => {
        let widget = window.TradingApp.Main.widgets[symbol];
        widget.markers.push(marker);
        widget.candleSeries.setMarkers(widget.markers);
    };
    const createChartWidget = (tabIndex, stock) => {
        let symbol = stock.symbol;
        let widget = {
            stock: stock,
            tabIndex: tabIndex,
            crosshairPrice: 0,
            markers: []
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
        widget.htmlContents.positionCount = widget.htmlContents.container.getElementsByClassName("positionCount")[0];
        widget.htmlContents.exitOrders = widget.htmlContents.container.getElementsByClassName("exitOrders")[0];
        widget.chart = LightweightCharts.createChart(
            widget.htmlContents.chart,
            window.TradingApp.ChartSettings.getChartSettings(tabIndex)
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

        // comment out because open range indicators are price levels instead of series.
        // series affects the price scale
        //let openRangeSeriesList = window.TradingApp.Indicators.createOpenRangeSeries(chart);

        function myClickHandler(param) {
            /*
            console.log(param)
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

        /*
        widget.htmlContents.chart.addEventListener('dblclick', event => {
            console.log(event);
            let crosshairPrice = window.TradingApp.Main.widgets[symbol].crosshairPrice;
            window.TradingApp.Chart.drawStopLoss(symbol, crosshairPrice);
        });
        */

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

        return widget;
    };

    const updateAccountUIStatus = async (symbolList) => {
        let account = await window.TradingApp.TOS.getAccount();
        window.TradingApp.Firestore.cacheAccountInfo(account);
        symbolList.forEach(symbol => {
            let symbolAccount = window.TradingApp.TOS.filterAccountBySymbol(symbol, account);
            updateAccountUIStatusForSymbol(symbol, symbolAccount);
        });
    };

    const updateAccountUIStatusForSymbol = (symbol, account) => {
        let widget = TradingApp.Main.widgets[symbol];
        if (!widget) {
            return;
        }
        drawFilledPrice(symbol, account, widget);
        showPositionSize(symbol, account, widget);
        drawWorkingOrders(symbol, account, widget);
    };


    const showPositionSize = async (symbol, account, widget) => {
        let html = widget.htmlContents.positionCount;
        if (!account || !account.position) {
            html.innerText = 'Pos: 0';
            html.style.color = 'black';
            return;
        }
        let position = account.position;
        let filledPrice = position.averagePrice;
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let riskManager = window.TradingApp.Algo.RiskManager;

        // show relative position size regarding to risk size
        if (position.longQuantity) {
            let riskPerShare = filledPrice - symbolData.lowOfDay;
            let riskMultiples = riskManager.quantityToRiskMultiples(riskPerShare, position.longQuantity);
            html.innerText = `Pos: +${riskMultiples}%`;
            html.style.color = 'green';
            return;
        } else if (position.shortQuantity) {
            let riskPerShare = symbolData.highOfDay - filledPrice;
            let riskMultiples = riskManager.quantityToRiskMultiples(riskPerShare, position.shortQuantity);
            html.innerText = `Pos: -${riskMultiples}%`;
            html.style.color = 'red';
            return;
        }
    };

    const drawFilledPrice = async (symbol, account, widget) => {
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
    };

    const drawWorkingOrders = async (symbol, account, widget) => {
        // clear previous orders before re-draw every order
        if (widget.workingOrdersPriceLines && widget.workingOrdersPriceLines.length > 0) {
            widget.workingOrdersPriceLines.forEach(l => {
                widget.candleSeries.removePriceLine(l);
            });
            widget.htmlContents.exitOrders.innerText = "Exits:";
        }
        widget.workingOrdersPriceLines = [];
        widget.workingOrders = [];

        if (account.orders.length === 0)
            return;
        let orders = window.TradingApp.OrderFactory.filterWorkingOrders(account.orders);
        if (orders.length === 0)
            return;
        orders.sort(function (a, b) {
            if (a.orderType > b.orderType) {
                return 1;
            } else if (a.orderType < b.orderType) {
                return -1;
            } else {
                return a.quantity - b.quantity;
            }
        });

        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let riskManager = window.TradingApp.Algo.RiskManager;

        let exitOrdersString = "Exits: ";
        for (let i = 0; i < orders.length; i++) {
            let price = window.TradingApp.OrderFactory.extractOrderPrice(orders[i]);
            let orderInstruction = orders[i].orderLegCollection[0].instruction;
            let isBuyOrder = window.TradingApp.OrderFactory.isBuyOrder(orderInstruction);
            let color = 'green';
            let orderTypeString = window.TradingApp.OrderFactory.getOrderTypeShortString(orders[i].orderType);
            let q = orders[i].quantity;
            let entryPrice = orders[i].stopPrice;
            let riskMultiples = 100;
            // has positions, working orders are exit orders
            if (account.position && account.position.averagePrice) {
                entryPrice = account.position.averagePrice;
            }
            riskMultiples = riskManager.quantityToRiskMultiples(entryPrice - symbolData.lowOfDay, q);
            if (!isBuyOrder) {
                riskMultiples = riskManager.quantityToRiskMultiples(symbolData.highOfDay - entryPrice, q);
                color = 'red';
                q = -q;
                riskMultiples = -riskMultiples;
            }
            let hasOrdersAtSamePrice = false;
            for (let j = 0; j < widget.workingOrdersPriceLines.length; j++) {
                let oldPriceLine = widget.workingOrdersPriceLines[j];
                if (oldPriceLine.options().price === price) {
                    hasOrdersAtSamePrice = true;
                    // assume it's the same order type
                    let text = `${i + 1}: (${q})`;
                    text = `${i + 1}: (${riskMultiples}%)`;
                    oldPriceLine.applyOptions({
                        ...oldPriceLine.options(),
                        title: oldPriceLine.options().title + "," + text
                    })
                    break;
                }
            }
            if (!hasOrdersAtSamePrice) {
                let l = createPriceLine(widget.candleSeries, price, `${i + 1}: ${orderTypeString}(${riskMultiples}%)`, color);
                l.orderData = orders[i];
                widget.workingOrdersPriceLines.push(l);
            }
            widget.workingOrders.push(orders[i]);
            if (orderTypeString == "Lmt") {
                exitOrdersString += `${i + 1}(${riskMultiples}%),`;
            }
        }
        widget.htmlContents.exitOrders.innerText = exitOrdersString;
    };
    return {
        createChartWidget,
        updateUI,
        createPriceLine,
        drawStopLoss,
        drawEntry,
        clearPriceLines,
        updateAccountUIStatus,
        updateAccountUIStatusForSymbol,
        getMultiplier,
        addMarker
    }
})();