window.TradingApp.Controller.OrderFlow = (function () {
    const adjustExitOrdersPairWithNewPrice = async (symbol, keyCode) => {
        // "Digit1" -> 1, "Digit2" -> 2
        window.TradingApp.Firestore.logDebug(`Adjust exit order pair for ${symbol}`);
        let orderNumber = parseInt(keyCode[5]);
        if (keyCode == "Digit0") {
            orderNumber = 10;
        }

        let widget = window.TradingApp.Main.widgets[symbol];
        if (widget.exitOrderPairs.length < orderNumber) {
            window.TradingApp.Firestore.logInfo("out of range");
            return;
        }

        let pair = widget.exitOrderPairs[orderNumber - 1];
        // get current price
        let candles = window.TradingApp.DB.dataBySymbol[symbol].candles;
        let lastCandle = candles[candles.length - 1];
        let currentPrice = lastCandle.close;
        let newPrice = window.TradingApp.Helper.roundToCents(widget.crosshairPrice);
        let netQuantity = window.TradingApp.Firestore.getPositionNetQuantity(symbol);
        let order = pair['LIMIT'];
        if ((netQuantity > 0 && newPrice < currentPrice) ||
            (netQuantity < 0 && newPrice > currentPrice)) {
            order = pair['STOP'];
        }
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingOrders(symbol, order);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);

        let oldOrderId = order.orderId;
        order.orderId = null;
        let newOrder = window.TradingApp.OrderFactory.replicateOrderWithNewPrice(order, newPrice);
        window.TradingApp.TOS.replaceOrderBase(newOrder, oldOrderId);
    };

    const adjustExitOrdersPairsWithNewPriceBatch = async (symbol, pairs) => {
        // get current price
        let candles = window.TradingApp.DB.dataBySymbol[symbol].candles;
        let lastCandle = candles[candles.length - 1];
        let currentPrice = lastCandle.close;
        let newPrice = window.TradingApp.Helper.roundToCents(widget.crosshairPrice);
        let netQuantity = window.TradingApp.Firestore.getPositionNetQuantity(symbol);
        let orders = [];
        for (let i = 0; i < pairs.length; i++) {
            let order = pairs[i]['LIMIT'];
            if ((netQuantity > 0 && newPrice < currentPrice) ||
                (netQuantity < 0 && newPrice > currentPrice)) {
                order = pairs[0]['STOP'];
            }
            orders.push(order);
        }

        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingOrders(symbol, orders[0]);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);

        orders.forEach(order => {
            let oldOrderId = order.orderId;
            order.orderId = null;
            let newOrder = window.TradingApp.OrderFactory.replicateOrderWithNewPrice(order, newPrice);
            window.TradingApp.TOS.replaceOrderBase(newOrder, oldOrderId);
        });
    };

    const marketOutExitOrderPair = async (symbol, keyCode) => {
        // "Numpad1" -> 1, "Numpad2" -> 2
        window.TradingApp.Firestore.logDebug(`Marketout exit order pair for ${symbol}`);
        let orderNumber = parseInt(keyCode[6]);
        if (keyCode == "Numpad0") {
            orderNumber = 10;
        }

        let widget = window.TradingApp.Main.widgets[symbol];
        if (widget.exitOrderPairs.length < orderNumber) {
            window.TradingApp.Firestore.logInfo("out of range");
            return;
        }
        let pair = widget.exitOrderPairs[orderNumber - 1];

        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingOrders(symbol, pair['LIMIT']);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);

        instantOutOneExitPair(symbol, pair);
    }

    // Replace one leg with market order
    const instantOutOneExitPair = async (symbol, pair) => {
        let order = pair['LIMIT'];
        let oldOrderId = order.orderId;
        let orderLeg = order.orderLegCollection[0];
        let quantity = orderLeg.quantity;
        let orderToSubmit = window.TradingApp.OrderFactory.createMarketOrder(symbol, quantity, orderLeg.instruction);
        window.TradingApp.TOS.replaceOrderBase(orderToSubmit, oldOrderId);
    };

    const marketOutHalfExitOrders = async (symbol) => {
        // TODO: check rule that should only used once
        let pairsToExit = getHalfExitOrdersPairs(symbol);
        pairsToExit.forEach(pte => {
            instantOutOneExitPair(symbol, pte);
        });
    };

    const adjustHalfExitOrdersWithNewPrice = async (symbol) => {
        // TODO: check rule that should only used once
        let pairs = getHalfExitOrdersPairs(symbol);
        pairs.forEach(pte => {
            instantOutOneExitPair(symbol, pte);
        });
    };

    const getHalfExitOrdersPairs = (symbol) => {
        let widget = TradingApp.Main.widgets[symbol];
        let pairs = widget.exitOrderPairs;
        // TODO: check rule that should only used once
        let halfOfPairs = [];
        for (let i = 0; i < pairs.length; i++) {
            if (i % 2 == 0) {
                halfOfPairs.push(pairs[i]);
            }
        }
        return halfOfPairs;
    };

    const flatternPosition = async (symbol) => {
        let netQuantity = window.TradingApp.Firestore.getPositionNetQuantity(symbol);
        let remainingQuantity = Math.abs(netQuantity);
        let orderLegInstruction = netQuantity > 0 ? window.TradingApp.OrderFactory.OrderLegInstruction.SELL : window.TradingApp.OrderFactory.OrderLegInstruction.BUY_TO_COVER;

        let widget = TradingApp.Main.widgets[symbol];
        // cancel entry orders
        if (widget.entryOrders && widget.entryOrders.length > 0) {
            widget.entryOrders.forEach(order => {
                window.TradingApp.TOS.cancelOrderById(order.orderId);
            });
        }
        // market out exit orders
        let pairsToExit = widget.exitOrderPairs;
        pairsToExit.forEach(pte => {
            remainingQuantity -= pte['LIMIT'].quantity;
            instantOutOneExitPair(symbol, pte);
        });
        // market out leftover shares
        if (remainingQuantity > 0) {
            console.log(`remaining q: ${remainingQuantity}`);
            let orderToSubmit = window.TradingApp.OrderFactory.createMarketOrder(symbol, remainingQuantity, orderLegInstruction);
            window.TradingApp.TOS.placeOrderBase(orderToSubmit);
        }
        return true;
    };

    return {
        adjustExitOrdersPairWithNewPrice,
        marketOutExitOrderPair,
        marketOutHalfExitOrders,
        adjustHalfExitOrdersWithNewPrice,
        flatternPosition,
    };
})();