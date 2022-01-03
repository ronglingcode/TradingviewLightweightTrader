window.TradingApp.AutoTrader = (function () {
    let stateBySymbol = {};
    window.TradingApp.Watchlist.forEach(element => {
        stateBySymbol[element.symbol] = {};
    });

    const getStockBias = (symbol) => {
        window.TradingApp.Watchlist.forEach(element => {
            if (element.symbol === symbol) {
                return element.bias;
            }
        });
        return '';
    };
    const onFirstMinuteClose = (symbol, candle, vwap) => {
        let bias = getStockBias(symbol);
        if (stateBySymbol[symbol].manualTriggered === true) {
            return;
        }
        // first minute close, try open range breakout pattern
        if (bias === 'long') {
            if (candle.high >= vwap) {
                window.TradingApp.Firestore.logInfo("onFirstMinuteClose: auto trigger long for " + symbol);
            }
        } else if (bias === 'short') {
            if (candle.low <= vwap) {
                window.TradingApp.Firestore.logInfo("onFirstMinuteClose: auto trigger short for " + symbol);
            }
        }
    };

    const onSecondMinuteClose = (symbol, candle0, candle1) => {
        // second minute close, check for triangle consolidation
        if (candle0.high >= candle1.high && candle0.low <= candle1.low) {
            window.TradingApp.Firestore.logInfo("onSecondMinuteClose: triangle consolidation for " + symbol);
        }
    };
    const manualTrigger = (symbol, trigger) => {
        stateBySymbol[symbol].manualTriggered = trigger;
    };
    return {
        stateBySymbol,
        manualTrigger,
        onFirstMinuteClose,
        onSecondMinuteClose
    }
})();