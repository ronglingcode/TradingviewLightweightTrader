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
        // check undefined for price
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
    const setupShowLockupButton = (button, symbol) => {
        if (!button)
            return;
        button.addEventListener("click", (pointerEvent) => {
            let remainingSeconds = window.TradingApp.AutoTrader.getRemainingCoolDownInSeconds(symbol);
            let remainingTime = window.TradingApp.Helper.toUserTimeString(remainingSeconds);
            document.getElementById("secondstogo").innerText = `${remainingTime} to go.`;
            $("#dialog").dialog({
                modal: true,
                resizable: false,
                height: "auto",
                width: 500,
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                }
            });
        });
    };

    const getMultiplier = (widget) => {
        return 1;
        /*
        let qty = widget.htmlContents.quantityInput.value;
        if (!qty || !qty.endsWith("%")) {
            return 1;
        }
        let multiplier = parseFloat(qty.substring(0, qty.length - 1));
        return multiplier / 100;*/
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
        //setupQuantityBar(widget.htmlContents.quantityBar, widget.htmlContents.quantityInput);

        widget.htmlContents.showLockupButton = widget.htmlContents.container.getElementsByClassName("showlockup")[0];
        setupShowLockupButton(widget.htmlContents.showLockupButton, symbol);
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

    const clearDrawnOrders = (widget, widgetPriceLines) => {
        if (widgetPriceLines && widgetPriceLines.length > 0) {
            widgetPriceLines.forEach(l => {
                widget.candleSeries.removePriceLine(l);
            });
            widgetPriceLines = [];
        }
    };

    const createDrawingOrder = (symbol, order, entryPrice, orderClosePositions) => {
        let price = window.TradingApp.OrderFactory.extractOrderPrice(order, symbol);
        let orderInstruction = order.orderLegCollection[0].instruction;
        let isBuyOrder = window.TradingApp.OrderFactory.isBuyOrder(orderInstruction);
        let color = isBuyOrder ? 'green' : 'red';
        let q = Math.abs(order.quantity);
        let isLongPosition = !isBuyOrder;
        if (orderClosePositions) {
            isLongPosition = !isBuyOrder;
        } else {
            isLongPosition = isBuyOrder;
        }
        let riskMultiples = getRiskMultiplesForDisplay(symbol, isLongPosition, entryPrice, q);
        return {
            'price': price,
            'color': color,
            'isBuyOrder': isBuyOrder,
            'orderType': order.orderType,
            'q': q,
            'riskMultiples': riskMultiples,
            'orderData': order
        };
    };

    const getRiskMultiplesForDisplay = (symbol, isLongPosition, entryPrice, quantity) => {
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let riskManager = window.TradingApp.Algo.RiskManager;
        let riskMultiples = 100;
        if (!isLongPosition) {
            riskMultiples = riskManager.quantityToRiskMultiples(symbolData.highOfDay - entryPrice, quantity);
        } else {
            riskMultiples = riskManager.quantityToRiskMultiples(entryPrice - symbolData.lowOfDay, quantity);
        }
        return riskMultiples;
    };

    const drawWorkingOrders = async (symbol, account, widget) => {
        // clear previous orders before re-draw every order
        clearDrawnOrders(widget, widget.entryOrdersPriceLines);
        widget.entryOrdersPriceLines = [];
        widget.entryOrders = [];

        clearDrawnOrders(widget, widget.exitOrdersPriceLines);
        widget.htmlContents.exitOrders.innerText = "Exits:";
        widget.exitOrdersPriceLines = [];
        widget.exitOrderPairs = [];

        if (account.orders.length === 0)
            return;

        let exitOrderPairs = window.TradingApp.OrderFactory.extractWorkingExitPairs(account.orders);
        widget.exitOrderPairs = exitOrderPairs;
        let entryOrders = window.TradingApp.OrderFactory.extractEntryOrders(account.orders);
        widget.entryOrders = entryOrders;

        if (entryOrders.length === 0 && exitOrderPairs.length === 0)
            return;

        exitOrderPairs.sort(function (a, b) {
            let limitA = a['LIMIT'];
            let limitB = b['LIMIT'];
            let isBuyOrder = window.TradingApp.OrderFactory.isBuyOrder(limitB.orderLegCollection[0].instruction);
            let isLong = !isBuyOrder;
            if (isLong) {
                return limitA.price - limitB.price;
            } else {
                return limitB.price - limitA.price;
            }
        });
        widget.exitOrderPairs = exitOrderPairs;
        let exitOrdersString = "Exits: ";
        // draw exit orders
        for (let i = 0; i < exitOrderPairs.length; i++) {
            if (exitOrderPairs[i]['source'] != 'OTO') {
                window.TradingApp.Firestore.logError(`exit order pair is not from OTO, got ${exitOrderPairs[i]} instead`);
            }
            let entryPrice = account.position.averagePrice;
            let drawingStopOrder = createDrawingOrder(symbol, exitOrderPairs[i]['STOP'], entryPrice, true);
            let drawingLimitOrder = createDrawingOrder(symbol, exitOrderPairs[i]['LIMIT'], entryPrice, true);
            let text = `${i + 1}: ${drawingStopOrder.riskMultiples}%`;
            exitOrdersString += text;

            let ordersToDraw = [drawingStopOrder, drawingLimitOrder];
            ordersToDraw.forEach(orderToDraw => {
                let hasOrdersAtSamePrice = false;
                for (let j = 0; j < widget.exitOrdersPriceLines.length; j++) {
                    let oldPriceLine = widget.exitOrdersPriceLines[j];
                    if (oldPriceLine.options().price === orderToDraw.price) {
                        hasOrdersAtSamePrice = true;
                        oldPriceLine.applyOptions({
                            ...oldPriceLine.options(),
                            title: oldPriceLine.options().title + "," + text
                        })
                        break;
                    }
                }
                if (!hasOrdersAtSamePrice) {
                    let l = createPriceLine(widget.candleSeries, orderToDraw.price, text, orderToDraw.color);
                    l.orderData = orderToDraw.orderData; // debug info, not used for now
                    widget.exitOrdersPriceLines.push(l);
                }
            });
        }
        widget.htmlContents.exitOrders.innerText = exitOrdersString;

        if (entryOrders.length > 0) {
            // assume all entry orders are the same price
            // assume all entry orders are stop orders
            let entryPrice = entryOrders[0].stopPrice;
            let firstEntryOrderToDraw = createDrawingOrder(symbol, entryOrders[0], entryPrice, false);
            for (let i = 1; i < entryOrders.length; i++) {
                let nextEntryORderToDraw = createDrawingOrder(symbol, entryOrders[i], entryPrice, false);
                firstEntryOrderToDraw.riskMultiples += nextEntryORderToDraw.riskMultiples;
            }
            let l = createPriceLine(widget.candleSeries, firstEntryOrderToDraw.price, `entry: ${firstEntryOrderToDraw.riskMultiples}%`, firstEntryOrderToDraw.color);
            l.orderData = firstEntryOrderToDraw.orderData; // debug info, not used for now
            widget.entryOrdersPriceLines.push(l);
        }
    };
    const setup = () => {
        for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
            let symbol = window.TradingApp.Watchlist[i].symbol;
            let chart = createChartWidget(i, window.TradingApp.Watchlist[i]);
            window.TradingApp.Main.widgets[symbol] = chart;
            let container = document.getElementById("chartContainer" + i);
            if (container) {
                container.style.display = 'block';
            }
        }
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
        addMarker,
        setup
    }
})();