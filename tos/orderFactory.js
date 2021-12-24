window.TradingApp.OrderFactory = (function () {
    const createEquityInstrument = (symbol) => {
        return {
            assetType: "EQUITY",
            symbol: symbol
        };
    };
    const createDayOrder = function (symbol, quantity, orderLegInstruction) {
        let order = {
            session: "NORMAL",
            duration: "DAY",
            orderLegCollection: []
        }
        let orderLeg = {
            orderLegType: "EQUITY",
            instrument: createEquityInstrument(symbol),
            instruction: orderLegInstruction,
            quantity: quantity
        };
        order.orderLegCollection.push(orderLeg);
        return order;
    };
    const createMarketOrder = function (symbol, quantity, orderLegInstruction) {
        let order = createDayOrder(symbol, quantity, orderLegInstruction)
        order.orderType = "MARKET";
        order.orderStrategyType = "SINGLE";
        return order;
    };
    const createTestOrder = () => {
        // market order to buy 1 share of MSFT
        return createMarketOrder("MSFT", 1, "BUY");
    }
    return {
        createMarketOrder,
        createTestOrder
    }
})();