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
    const WorkingOrdersStatus = ["PENDING_ACTIVATION", "QUEUED", "WORKING"];
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

    /* #region Read Order Fields */
    const getOrderSymbol = (order) => {
        if (order.orderLegCollection && order.orderLegCollection.length > 0) {
            let orderLeg = order.orderLegCollection[0];
            return orderLeg.instrument.symbol;
        }
        else if (order.childOrderStrategies && order.childOrderStrategies.length > 0) {
            let childOrder = order.childOrderStrategies[0];
            return getOrderSymbol(childOrder);
        }
        return "";
    }
    /* #endregion */

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
    };
    const createPreMarketOrder = (symbol, quantity, limitPrice, orderLegInstruction) => {
        // pre-market order must be limit order
        let order = createLimitOrder(symbol, quantity, limitPrice, orderLegInstruction);
        order.session = 'SEAMLESS';
        order.orderStrategyType = "SINGLE";
        return order;
    };

    /* #endregion */

    const createTestOrder = () => {
        return createPreMarketOrder("GXC", 1, 104.7, "SELL");
    };
    const createTestOcoOrder = () => {
        let mainOrder = { orderStrategyType: OrderStrategyType.OCO };
        let o1 = createLimitOrder("GXC", 1, 104.7, "SELL");
        let o2 = createStopOrder("GXC", 1, 103.8, "SELL");
        mainOrder.childOrderStrategies = [o1, o2];
        return mainOrder;
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

    const createPreMarketEntryWithProfitTakingExit = (symbol, entryInstruction, quantity, entryPrice, takeProfitPrice) => {
        let exitInstruction = getClosingOrderLegInstruction(entryInstruction);
        let entryOrder = createPreMarketOrder(symbol, quantity, entryPrice, entryInstruction);
        entryOrder.orderStrategyType = OrderStrategyType.TRIGGER;

        let exitOrder = createPreMarketOrder(symbol, quantity, takeProfitPrice, exitInstruction);
        entryOrder.childOrderStrategies = [exitOrder];
        return entryOrder;
    };

    const calculateTotalShares = (entryPrice, stopOutPrice, setupQuality, multiplier) => {
        let RiskManager = window.TradingApp.Algo.RiskManager;
        let riskPerShare = Math.abs(entryPrice - stopOutPrice);
        let maxRiskPerTrade = RiskManager.getMaxRiskPerTrade(setupQuality, multiplier);
        let totalShares1 = Math.max(2, parseInt(Math.floor(maxRiskPerTrade / riskPerShare)));
        let totalShares2 = Math.max(2, parseInt(Math.floor(RiskManager.MaxCapitalPerTrade / entryPrice)));
        let totalShares = Math.min(totalShares1, totalShares2);
        return totalShares;
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
        let totalShares = calculateTotalShares(entryPrice, stopOutPrice, setupQuality, multiplier);

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

    const createPreMarketOrderWithFixedRisk = (symbol, entryPrice, stopOutPrice, setupQuality, multiplier) => {
        let RiskManager = window.TradingApp.Algo.RiskManager;
        // add 1 cent for slippage
        if (entryPrice > stopOutPrice) {
            entryPrice = RiskManager.addCents(entryPrice, 1);
            stopOutPrice = RiskManager.minusCents(stopOutPrice, 1);
        } else {
            entryPrice = RiskManager.minusCents(entryPrice, 1);
            stopOutPrice = RiskManager.addCents(stopOutPrice, 1);
        }
        let totalShares = calculateTotalShares(entryPrice, stopOutPrice, setupQuality, multiplier);

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
            let order = createPreMarketEntryWithProfitTakingExit(symbol, entryInstruction, quantity, entryPrice, limitPrice);
            orders.push(order);
        });

        return orders;
    };

    /* #endregion */

    /* #region Read Orders */
    const extractTopLevelCancelableOrdersIds = (orders) => {
        let ids = [];
        orders.forEach(order => {
            if (order.cancelable) {
                ids.push(order.orderId);
            } else if (order.childOrderStrategies && order.childOrderStrategies.length > 0) {
                let childOrderIds = extractTopLevelCancelableOrdersIds(order.childOrderStrategies);
                ids.push(...childOrderIds);
            }
        });
        return ids;
    };
    const extractStopOrders = (orders) => {
        let stopOrders = [];
        orders.forEach(order => {
            if (order.cancelable && order.orderType === OrderType.STOP) {
                stopOrders.push(order);
            } else if (order.childOrderStrategies && order.childOrderStrategies.length > 0) {
                let childStopOrders = extractStopOrders(order.childOrderStrategies);
                stopOrders.push(...childStopOrders);
            }
        });
        return stopOrders;
    };

    const extractFilledOrders = (orders) => {
        let filledOrders = [];
        orders.forEach(order => {
            if (order.status == "FILLED") {
                if (order.orderStrategyType == "OCO") {
                    if (order.childOrderStrategies && order.childOrderStrategies.length > 0) {
                        let childFilledOrders = extractFilledOrders(order.childOrderStrategies);
                        filledOrders.push(...childFilledOrders);
                    }
                } else if (order.orderStrategyType == "TRIGGER") {
                    filledOrders.push(order);
                    if (order.childOrderStrategies && order.childOrderStrategies.length > 0) {
                        let childFilledOrders = extractFilledOrders(order.childOrderStrategies);
                        filledOrders.push(...childFilledOrders);
                    }
                } else {
                    filledOrders.push(order);
                }
            }
        });
        return filledOrders;
    };

    // if OTO is not triggered, return the parent order of OTO
    // if OTO is triggered, return the child orders.
    // For OCO orders, always return the 2 child orders
    const filterWorkingOrders = (orders) => {
        let workingOrders = [];
        orders.forEach(order => {
            if (order.orderStrategyType === OrderStrategyType.TRIGGER) {
                if (WorkingOrdersStatus.includes(order.status)) {
                    workingOrders.push(order);
                } else if (order.status === "FILLED") {
                    // for OTO, assume there's only one child order
                    let childOrder = order.childOrderStrategies[0];
                    if (childOrder.orderStrategyType === OrderStrategyType.OCO) {
                        let children = extractWorkingChildOrdersFromOCO(childOrder);
                        workingOrders.push(...children);
                    }
                }
            } else if (order.orderStrategyType === OrderStrategyType.OCO) {
                let children = extractWorkingChildOrdersFromOCO(order);
                workingOrders.push(...children);
            } else if (order.orderStrategyType === OrderStrategyType.SINGLE) {
                if (order.orderType != OrderType.MARKET) {
                    if (WorkingOrdersStatus.includes(order.status)) {
                        workingOrders.push(order);
                    }
                }
            }
        });
        return workingOrders;
    };
    const extractWorkingChildOrdersFromOCO = (oco) => {
        if (oco.status != "WORKING")
            return [];
        let workingChildOrders = [];
        oco.childOrderStrategies.forEach(order => {
            if (WorkingOrdersStatus.includes(order.status)) {
                workingChildOrders.push(order);
            }
        });
        return workingChildOrders;
    };
    const extractOrderPrice = (order) => {
        if (order.orderType === OrderType.STOP) {
            return order.stopPrice;
        } else if (order.orderType === OrderType.LIMIT) {
            return order.price;
        }
    };
    const isBuyOrder = (orderInstruction) => {
        return [OrderLegInstruction.BUY, OrderLegInstruction.BUY_TO_COVER].includes(orderInstruction);
    };
    const isSellOrder = (orderInstruction) => {
        return orderInstruction.startsWith('SELL');
    };
    const getOrderTypeShortString = (orderType) => {
        if (orderType === OrderType.STOP)
            return 'Stp';
        else if (orderType === OrderType.LIMIT)
            return 'Lmt';
        else if (orderType === OrderType.MARKET)
            return 'Mkt';
    }
    /* #endregion */
    /* #region Replicate Orders */
    const replicateOrderWithNewPrice = (order, newPrice) => {
        if (order.orderStrategyType === OrderStrategyType.SINGLE)
            return replicateSingleOrderWithNewPrice(order, newPrice);
    };
    const replicateSingleOrderWithNewPrice = (order, newPrice) => {
        let symbol = order.orderLegCollection[0].instrument.symbol;
        let instruction = order.orderLegCollection[0].instruction;
        let q = order.quantity;
        if (order.orderType === OrderType.LIMIT)
            return createLimitOrder(symbol, q, newPrice, instruction);
        else if (order.orderType === OrderType.STOP)
            return createStopOrder(symbol, q, newPrice, instruction);
    }
    /* #endregion */

    return {
        createMarketOrder,
        createPreMarketOrder,
        createTestOrder,
        createTestOcoOrder,
        createEntryOrdersWithFixedRisk,
        createPreMarketOrderWithFixedRisk,
        getOrderSymbol,
        OrderType,
        OrderStrategyType,
        OrderLegInstruction,
        filterWorkingOrders,
        extractTopLevelCancelableOrdersIds,
        extractStopOrders,
        extractOrderPrice,
        extractFilledOrders,
        isBuyOrder,
        isSellOrder,
        getOrderTypeShortString,
        replicateOrderWithNewPrice
    }
})();