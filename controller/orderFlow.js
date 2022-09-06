window.TradingApp.Controller.OrderFlow = (function () {
    const adjustExitOrdersPairWithNewPrice = async (symbol, keyCode) => {
        // "Digit1" -> 1, "Digit2" -> 2
        window.TradingApp.Firestore.logDebug(`Adjust exit order pair for ${symbol}`);
        let startTime = new Date();
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
        let order = null;


        let order = pair['STOP'];
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingOrders(symbol, order);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);

        let oldOrderId = order.orderId;
        order.orderId = null;
        let newOrder = window.TradingApp.OrderFactory.replicateOrderWithNewPrice(order, newPrice);
        if (order.parentOrderId && order.siblingOrder) {
            // adjust OCO order, need to candel the parent order and 
            // submit a new OCO order with 2 legs
            let newLeg = newOrder;
            let otherLeg = window.TradingApp.OrderFactory.copyOrder(order.siblingOrder);
            cancelOrderById(order.parentOrderId);
            console.log(`cancel ${order.parentOrderId}`);
            let orderToSubmit = window.TradingApp.OrderFactory.createOcoOrderFromTwoLegs(newLeg, otherLeg);
            console.log(orderToSubmit);
            submitOrderAfterCancel(symbol, [order.parentOrderId], orderToSubmit, startTime);
        } else {
            replaceOrderBase(newOrder, oldOrderId);
        }
    };
    return {
        adjustExitOrdersPairWithNewPrice
    };
})();