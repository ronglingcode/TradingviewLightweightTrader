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
    };

    const createOneTriggerOcoOrder = (symbol, orderType, quantity, quantity, entryPrice, stopOut, limitPrice, orderLegInstruction) => { };

    const createBreakoutOrders = (symbol, entryPrice, stopOut, setupQuality, multiplier) => {
        let RiskManager = window.TradingApp.Algo.RiskManager;
        let riskPerShare = Math.abs(entryPrice - stopOut);
        let maxRiskPerTrade = RiskManager.getMaxRiskPerTrade(setupQuality, multiplier);
        let totalShares1 = Math.max(2, parseInt(Math.floor(maxRiskPerTrade / riskPerShare)));
        let totalShares2 = Math.max(2, parseInt(Math.floor(RiskManager.MaxCapitalPerTrade / entryPrice)));
        let totalShares = Math.min(totalShares1, totalShares2);

        let TakeProfit = window.TradingApp.Algo.TakeProfit;
        let profitTargets = TakeProfit.getProfitTargets(totalShares, entryPrice, stopOut, setupQuality);

        let orders = [];
        profitTargets.forEach(profitTarget => {
            let quantity = profitTarget.Quantity;
            let limitPrice = profitTarget.Target;
            let order = createOneTriggerOcoOrder(symbol, orderType, quantity, quantity, entryPrice, stopOut, limitPrice, orderLegInstruction);
            orders.push(order);
        });

        return orders;
    };

    return {
        createMarketOrder,
        createTestOrder,
        createBreakoutOrders,
    }
})();