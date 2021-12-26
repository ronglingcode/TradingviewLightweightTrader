window.TradingApp.OrderFactory = (function () {
    const OrderType = {
        STOP: "STOP",
        LIMIT: "LIMIT",
        MARKET: "MARKET"
    };
    const OrderStrategyType = {
        SINGLE: "SINGLE",
        TRIGGER: "TRIGGER",
        OCO: "OCO"
    };
    const createEquityInstrument = (symbol) => {
        return {
            assetType: "EQUITY",
            symbol: symbol
        };
    };
    /* #region Basic Orders */
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
    const createStopOrder = (symbol, quantity, stopPrice, orderLegInstruction) => {
        let order = createDayOrder(symbol, quantity, orderLegInstruction);
        order.orderType = OrderType.STOP;
        order.orderStrategyType = OrderStrategyType.SINGLE;
        order.stopPrice = stopPrice;
        return order;
    };

    const createLimitOrder = (symbol, quantity, limitPrice, orderLegInstruction) => {
        let order = createDayOrder(symbol, quantity, orderLegInstruction);
        order.orderType = OrderType.LIMIT;
        order.orderStrategyType = OrderStrategyType.SINGLE;
        order.price = limitPrice;
        return order;
    }
    /* #endregion */

    const createTestOrder = () => {
        // market order to buy 1 share of MSFT
        return createMarketOrder("MSFT", 1, "BUY");
    };

    /* #region Advanced Orders */
    const createOcoOrder = (symbol, stopOutQuantity, stopPrice, limitPrice, takeProfitQuantity, orderLegInstruction) => {
        let mainOrder = { orderStrategyType: OrderStrategyType.OCO };
        let stopOrder = createStopOrder(symbol, stopOutQuantity, stopPrice, orderLegInstruction);
        let limitOrder = createLimitOrder(symbol, takeProfitQuantity, limitPrice, orderLegInstruction);
        mainOrder.childOrderStrategies = [stopOrder, limitOrder];
        return mainOrder;
    }
    const createOneTriggerOcoOrder = (symbol, entryInstruction, exitInstruction, orderType, triggerQuantity, triggerPrice, limitQuantity, limitPrice, stopQuantity, stopPrice) => {
        let entryOrder = null;
        if (orderType == OrderType.STOP)
            entryOrder = createStopOrder(symbol, triggerQuantity, triggerPrice, entryInstruction);
        else if (orderType == OrderType.LIMIT)
            entryOrder = createLimitOrder(symbol, triggerQuantity, triggerPrice, entryInstruction);
        else if (orderType == OrderType.MARKET)
            entryOrder = createMarketOrder(symbol, triggerQuantity, entryInstruction);

        entryOrder.orderStrategyType = OrderStrategyType.TRIGGER;

        let oco = createOcoOrder(symbol, stopQuantity, stopPrice, limitPrice, limitQuantity, exitInstruction);
        entryOrder.childOrderStrategies = [oco];
        return entryOrder;
    };

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

    /* #endregion */
    return {
        createMarketOrder,
        createTestOrder,
        createBreakoutOrders,
        OrderType,
        OrderStrategyType
    }
})();