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
    const numberKeyPressed = async (symbol, keyCode) => {
        // "Digit1" -> 1, "Digit2" -> 2
        window.TradingApp.Firestore.logDebug(`Adjust exit order pair for ${symbol}`);
        let pair = getExitPairFromKeyCode(symbol, keyCode, "Digit");
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
        window.TradingApp.Controller.OrderFlow.adjustOrdersWithNewPrice(symbol, [order], newPrice);
    };

    const numberPadPressed = async (symbol, keyCode) => {
        // "Numpad1" -> 1, "Numpad2" -> 2
        window.TradingApp.Firestore.logDebug(`Market out 1 exit order pair for ${symbol}`);
        let pair = getExitPairFromKeyCode(symbol, keyCode, "Numpad");
        let allowed = window.TradingApp.Algo.TakeProfit.checkRulesForAdjustingOrders(symbol, pair['LIMIT']);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`Rules blocked adjusting order for ${symbol}`);
            return;
        }
        window.TradingApp.Firestore.logInfo(`Rules passed adjusting order for ${symbol}`);
        window.TradingApp.Controller.OrderFlow.instantOutOneExitPair(symbol, pair);
    };
    return {
        numberPadPressed,
        numberKeyPressed,
    };
})();