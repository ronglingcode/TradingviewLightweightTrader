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
    const OrderLegInstruction = {
        BUY: "BUY",
        SELL: "SELL",
        BUY_TO_COVER: "BUY_TO_COVER",
        SELL_SHORT: "SELL_SHORT",
        BUY_TO_OPEN: "BUY_TO_OPEN",
        BUY_TO_CLOSE: "BUY_TO_CLOSE",
        SELL_TO_OPEN: "SELL_TO_OPEN",
        SELL_TO_CLOSE: "SELL_TO_CLOSE",
        EXCHANGE: "EXCHANGE"
    };
    const createEquityInstrument = (symbol) => {
        return {
            assetType: "EQUITY",
            symbol: symbol
        };
    };

    const getClosingOrderLegInstruction = (entryInstruction) => {
        if (entryInstruction == OrderLegInstruction.BUY) {
            return OrderLegInstruction.SELL;
        }
        else {
            return OrderLegInstruction.BUY_TO_COVER;
        }
    };

    const getOrderSymbol = (order) => {
        if (order.orderLegCollection && order.orderLegCollection.length > 0) {
            let orderLeg = order.orderLegCollection[0];
            return orderLeg.instrument.symbol;
        }
        else if (order.childOrderStrategies && order.childOrderStrategies.Count > 0) {
            let childOrder = order.childOrderStrategies[0];
            return getOrderSymbol(childOrder);
        }
        return "";
    }


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
    };

    const createOneEntryWithTwoExits = (symbol, entryInstruction, entryOrderType, entryQuantity, entryPrice, limitQuantity, limitPrice, stopQuantity, stopPrice) => {
        let exitInstruction = getClosingOrderLegInstruction(entryInstruction);
        let entryOrder = null;
        if (entryOrderType == OrderType.STOP)
            entryOrder = createStopOrder(symbol, entryQuantity, entryPrice, entryInstruction);
        else if (entryOrderType == OrderType.LIMIT)
            entryOrder = createLimitOrder(symbol, entryQuantity, entryPrice, entryInstruction);
        else if (entryOrderType == OrderType.MARKET)
            entryOrder = createMarketOrder(symbol, entryQuantity, entryInstruction);

        entryOrder.orderStrategyType = OrderStrategyType.TRIGGER;

        let oco = createOcoOrder(symbol, stopQuantity, stopPrice, limitPrice, limitQuantity, exitInstruction);
        entryOrder.childOrderStrategies = [oco];
        return entryOrder;
    };

    const createEntryOrdersWithFixedRisk = (symbol, orderType, entryPrice, stopOutPrice, setupQuality, multiplier) => {
        let RiskManager = window.TradingApp.Algo.RiskManager;
        // add 1 cent for slippage
        if (entryPrice > stopOutPrice) {
            entryPrice = RiskManager.addCents(entryPrice, 1);
            stopOutPrice = RiskManager.minusCents(stopOutPrice, 1);
        } else {
            entryPrice = RiskManager.minusCents(entryPrice, 1);
            stopOutPrice = RiskManager.addCents(stopOutPrice, 1);
        }
        let riskPerShare = Math.abs(entryPrice - stopOutPrice);
        let maxRiskPerTrade = RiskManager.getMaxRiskPerTrade(setupQuality, multiplier);
        let totalShares1 = Math.max(2, parseInt(Math.floor(maxRiskPerTrade / riskPerShare)));
        let totalShares2 = Math.max(2, parseInt(Math.floor(RiskManager.MaxCapitalPerTrade / entryPrice)));
        let totalShares = Math.min(totalShares1, totalShares2);

        let TakeProfit = window.TradingApp.Algo.TakeProfit;
        let profitTargets = TakeProfit.getProfitTargets(totalShares, entryPrice, stopOutPrice, setupQuality);
        let entryInstruction = OrderLegInstruction.BUY;
        if (entryPrice < stopOutPrice) {
            entryInstruction = OrderLegInstruction.SELL_SHORT;
        }
        let orders = [];
        profitTargets.forEach(profitTarget => {
            let quantity = profitTarget.quantity;
            let limitPrice = profitTarget.target;
            let order = createOneEntryWithTwoExits(symbol, entryInstruction, orderType, quantity, entryPrice, quantity, limitPrice, quantity, stopOutPrice);
            orders.push(order);
        });

        return orders;
    };

    /* #endregion */
    return {
        createMarketOrder,
        createTestOrder,
        createEntryOrdersWithFixedRisk,
        getOrderSymbol,
        OrderType,
        OrderStrategyType,
        OrderLegInstruction
    }
})();