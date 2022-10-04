window.TradingApp.Controller.Handler = (function () {
    const getExitPairFromKeyCode = (symbol, keyCode, prefix) => {
        let number = parseInt(keyCode[prefix.length]);
        if (number == 0) {
            number = 10;
        }
        let index = number - 1;
        let widget = window.TradingApp.Main.widgets[symbol];
        if (widget.exitOrderPairs.length <= index) {
            window.TradingApp.Firestore.logInfo("out of range");
            return;
        }
        return widget.exitOrderPairs[index];
    };

    const getCursorPrice = (symbol) => {
        let widget = window.TradingApp.Main.widgets[symbol];
        return window.TradingApp.Helper.roundToCents(widget.crosshairPrice);
    };

    const numberKeyPressed = async (symbol, keyCode) => {
        // "Digit1" -> 1, "Digit2" -> 2
        window.TradingApp.Firestore.logDebug(`Adjust exit order pair for ${symbol}`);
        let pair = getExitPairFromKeyCode(symbol, keyCode, "Digit");
        let newPrice = getCursorPrice(symbol);

        let orders = window.TradingApp.Controller.OrderFlow.chooseOrderLeg(symbol, [pair], newPrice);
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingExitOrders(symbol, orders[0], newPrice);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);
        window.TradingApp.Controller.OrderFlow.adjustOrdersWithNewPrice(symbol, orders, newPrice);
    };

    const numberPadPressed = async (symbol, keyCode) => {
        // "Numpad1" -> 1, "Numpad2" -> 2
        window.TradingApp.Firestore.logDebug(`Market out 1 exit order pair for ${symbol}`);
        let pair = getExitPairFromKeyCode(symbol, keyCode, "Numpad");
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingExitOrders(symbol, pair['LIMIT']);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);
        window.TradingApp.Controller.OrderFlow.instantOutOneExitPair(symbol, pair);
    };
    const keyGPressed = async (symbol) => {
        let action = "move half exit orders";
        let usageKey = "limitOutHalf";
        window.TradingApp.Firestore.logInfo(`${symbol}: ${action}`);
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForHalfOut(symbol, usageKey, action);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`${symbol}: Rules blocked for ${action} `);
            return;
        }
        window.TradingApp.Firestore.logInfo(`${symbol}: Rules passed for ${action}`);
        let newPrice = getCursorPrice(symbol);
        window.TradingApp.Controller.OrderFlow.adjustHalfExitOrdersWithNewPrice(symbol, newPrice);
    };
    const keyGPressedWithShift = async (symbol) => {
        let action = "market out half positions";
        let usageKey = "marketOutHalf";
        window.TradingApp.Firestore.logInfo(`${symbol}: ${action}`);
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForHalfOut(symbol, usageKey, action);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`${symbol}: Rules blocked for ${action} `);
            return;
        }
        window.TradingApp.Firestore.logInfo(`${symbol}: Rules passed for ${action}`);
        window.TradingApp.Controller.OrderFlow.marketOutHalfExitOrders(symbol);
    };

    const buySellKeyPressed = async (symbol, keyCode) => { };
    const buySellKeyPressedWithShift = async (symbol, keyCode) => {

    };
    return {
        numberPadPressed,
        numberKeyPressed,
        keyGPressed,
        keyGPressedWithShift,
        buySellKeyPressed,
        buySellKeyPressedWithShift,
    };
})();