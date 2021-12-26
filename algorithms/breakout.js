window.TradingApp.Algo.Breakout = (function () {
    const submitBreakoutOrders = async (symbol, entryPrice, stopOut, setupQuality, multiplier) => {
        let orders = window.TradingApp.OrderFactory.createBreakoutOrders(symbol, entryPrice, stopOut, setupQuality, multiplier);
        console.log(orders[0]);
        orders.forEach(order => {
            window.TradingApp.TOS.placeOrderBase(order);
        });
    };

    const test = () => {
        submitBreakoutOrders("MSFT", 340, 320, "a", 1);
    }

    return {
        submitBreakoutOrders,
        test
    };
})();