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
    };
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
    const copyOrder = (order) => {
        if (order.orderType == OrderStrategyType.SINGLE) {
            return copySingleOrder(order);
        }
    };
    const copySingleOrder = (order) => {
        let orderLegInstruction = order.orderLegCollection[0].instruction;
        let symbol = order.orderLegCollection[0].instrument.symbol;
        let quantity = order.orderLegCollection[0].quantity;
        if (order.orderType == OrderType.LIMIT) {
            return createLimitOrder(symbol, quantity, order.price, orderLegInstruction);
        } else if (order.orderType == OrderType.STOP) {
            return createStopOrder(symbol, quantity, order.stopPrice, orderLegInstruction);
        } else if (order.orderType == OrderType.MARKET) {
            return createMarketOrder(symbol, quantity, orderLegInstruction);
        }
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
        let stopOrder = createStopOrder(symbol, stopOutQuantity, stopPrice, orderLegInstruction);
        let limitOrder = createLimitOrder(symbol, takeProfitQuantity, limitPrice, orderLegInstruction);
        return createOcoOrderFromTwoLegs(stopOrder, limitOrder);
    };
    const createOcoOrderFromTwoLegs = (leg1, leg2) => {
        let mainOrder = { orderStrategyType: OrderStrategyType.OCO };
        mainOrder.childOrderStrategies = [leg1, leg2];
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

    const calculateTotalShares = (symbol, entryPrice, stopOutPrice, setupQuality, multiplier) => {
        let RiskManager = window.TradingApp.Algo.RiskManager;
        let riskPerShare = Math.abs(entryPrice - stopOutPrice);

        let account = window.TradingApp.Firestore.getAccountForSymbol(symbol);
        let existingRiskMultiples = RiskManager.getExistingRiskMultiples(symbol, account);
        if (existingRiskMultiples > 0) {
            let remainingRiskMultiples = 1 - existingRiskMultiples;
            multiplier = Math.min(multiplier, remainingRiskMultiples);
        }
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
        let totalShares = calculateTotalShares(symbol, entryPrice, stopOutPrice, setupQuality, multiplier);

        let TakeProfit = window.TradingApp.Algo.TakeProfit;
        let profitTargets = TakeProfit.getProfitTargets(symbol, totalShares, entryPrice, stopOutPrice, setupQuality);
        let entryInstruction = OrderLegInstruction.BUY;
        if (entryPrice < stopOutPrice) {
            entryInstruction = OrderLegInstruction.SELL_SHORT;
        }
        return createEntryOrders(symbol, entryInstruction, orderType, entryPrice, stopOutPrice, profitTargets);
    };

    const createEntryOrders = (symbol, entryInstruction, orderType, entryPrice, stopOutPrice, profitTargets) => {
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

    const extractAllCancelableOrdersIds = (orders) => {
        let ids = [];
        orders.forEach(order => {
            if (order.cancelable) {
                ids.push(order.orderId);
            }
            if (order.childOrderStrategies && order.childOrderStrategies.length > 0) {
                let childOrderIds = extractAllCancelableOrdersIds(order.childOrderStrategies);
                ids.push(...childOrderIds);
            }
        });
        return ids;
    };

    const extractEntryOrders = (orders) => {
        // assume entry orders are all OTO orders
        let entryOrders = [];
        orders.forEach(order => {
            if (order.cancelable && order.orderStrategyType == OrderStrategyType.TRIGGER) {
                entryOrders.push(order);
            }
        });
        return entryOrders;
    };
    const extractEntryOrdersIds = (orders) => {
        let entryOrders = extractEntryOrders(orders);
        let ids = [];
        entryOrders.forEach(order => {
            ids.push(order.orderId);
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
    // For OCO orders, mark the child orders with the flag "cancelInPair"
    // because need to cancel both legs for canceling any leg.
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
                if (children.length != 2) {
                    if (children.length != 0) {
                        window.TradingApp.Firestore.logError(`OCO order should have 2 legs, but got ${children.length} instead`);
                        console.log(order);
                    }
                    return;
                }
                children[0].parentOrderId = order.orderId;
                children[0].siblingOrder = children[1];
                children[1].parentOrderId = order.orderId;
                children[1].siblingOrder = children[0];
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

    /*
        extract exit orders and put them into pairs
        return a list of pairs
        each pair has a stop order and a limit order
        it only expects triggered OTO orders
        output: [
            {
                'stop':{}, 
                'limit':{}
            },
        ]
    */
    const extractWorkingExitPairs = (orders) => {
        let exitOrders = [];
        orders.forEach(order => {
            if (!isFilledOTO(order))
                return;

            // OTO should have only one child order as OCO
            if (order.childOrderStrategies.length != 1) {
                window.TradingApp.Firestore.logError(`OTO should have only 1 child order, but got ${order.childOrderStrategies.length} instead`);
                return;
            }
            let firstChild = order.childOrderStrategies[0];
            if (firstChild.orderStrategyType != OrderStrategyType.OCO) {
                window.TradingApp.Firestore.logError(`OTO child is not OCO, but ${firstChild.orderStrategyType} instead`);
                return;
            }
            let children = extractWorkingChildOrdersFromOCO(firstChild);
            if (children.length == 0) {
                return; // all child legs are filled.
            }
            if (children.length != 2) {
                window.TradingApp.Firestore.logError(`OCO should have 2 legs, but got ${children.length} instead`);
            }
            let exitPair = {
                'STOP': {},
                'LIMIT': {},
                'source': 'OTO' // the top level order is OTO
            };
            children.forEach(childOrder => {
                let orderType = childOrder.orderType;
                exitPair[orderType] = childOrder
            });

            exitOrders.push(exitPair);
        });
        return exitOrders;
    };

    const isFilledOTO = (order) => {
        return order.orderStrategyType === OrderStrategyType.TRIGGER && order.status === "FILLED";
    };

    const extractWorkingChildOrdersFromOCO = (oco) => {
        let workingChildOrders = [];
        oco.childOrderStrategies.forEach(order => {
            if (WorkingOrdersStatus.includes(order.status)) {
                workingChildOrders.push(order);
            }
        });
        return workingChildOrders;
    };
    const extractOrderPrice = (order, symbol) => {
        if (order.orderType === OrderType.STOP) {
            return order.stopPrice;
        } else if (order.orderType === OrderType.LIMIT) {
            return order.price;
        } else if (order.orderType === OrderType.MARKET) {
            let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
            let lastCandle = symbolData.candles[symbolData.candles.length - 1];
            return lastCandle.close;
        } else {
            window.TradingApp.Firestore.logError(`unknown order type: ${order.orderType}`);
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
    // Assume all orders are for the same symbol to keep it simple 
    const extractTradeExecutions = (ordersForSymbol) => {
        let filledOrders = extractFilledOrders(ordersForSymbol);
        let trades = [];
        let tradeMap = {};
        filledOrders.forEach(order => {
            let orderInstruction = order.orderLegCollection[0].instruction;
            let activities = order.orderActivityCollection;
            if (!activities || activities.length == 0) {
                return;
            }
            activities.forEach(activity => {
                if (activity.activityType != "EXECUTION" || activity.executionType != "FILL") {
                    window.TradingApp.Firestore.logError(`unexpected activity ${JSON.stringify(activity)}`);
                    return;
                }
                let executions = activity.executionLegs;
                if (!executions || executions.length == 0) {
                    return;
                }
                executions.forEach(execution => {
                    let price = execution.price;
                    let time = execution.time;

                    let minutesSinceOpen = window.TradingApp.Helper.getMinutesSinceMarketOpen(new Date(time));
                    minutesSinceOpen = Math.floor(minutesSinceOpen);
                    let secondsSinceOpen = minutesSinceOpen * 60;
                    let key = orderInstruction + price + minutesSinceOpen;
                    let perMinuteKey = orderInstruction + minutesSinceOpen;
                    let tradeObject = {
                        'action': orderInstruction,
                        'quantity': order.filledQuantity,
                        'price': price,
                        'time': time,
                        'minutesSinceOpen': minutesSinceOpen,
                        'secondsSinceOpen': secondsSinceOpen,
                        'key': key,
                        'perMinuteKey': perMinuteKey,
                    };
                    if (tradeObject.key in tradeMap) {
                        tradeMap[tradeObject.key].quantity += tradeObject.quantity;
                    } else {
                        tradeMap[tradeObject.key] = tradeObject;
                    }
                });

            });

        });

        for (let t in tradeMap) {
            trades.push(tradeMap[t]);
        }
        let minuteMap = {};
        trades.forEach(trade => {
            let key = trade.perMinuteKey;
            if (key in minuteMap) {
                minuteMap[key].quantity += trade.quantity;
                minuteMap[key].dollarAmount += (trade.quantity * trade.price);
            } else {
                minuteMap[key] = {
                    'action': trade.action,
                    'quantity': trade.quantity,
                    'dollarAmount': trade.quantity * trade.price,
                    'secondsSinceOpen': trade.secondsSinceOpen,
                };
            }
        });
        let tradePerMinute = [];
        for (let t in minuteMap) {
            tradePerMinute.push(minuteMap[t]);
        }
        return {
            'trades': trades,
            'tradePerMinute': tradePerMinute,
        };
    };
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
    };
    const replicateOrderWithNewQuantity = (order, newQuantity) => {
        if (order.orderStrategyType === OrderStrategyType.SINGLE)
            return replicateSingleOrderWithNewQuantity(order, newQuantity);
    };
    const replicateSingleOrderWithNewQuantity = (order, newQuantity) => {
        let symbol = order.orderLegCollection[0].instrument.symbol;
        let instruction = order.orderLegCollection[0].instruction;
        if (order.orderType === OrderType.LIMIT)
            return createLimitOrder(symbol, newQuantity, order.price, instruction);
        else if (order.orderType === OrderType.STOP)
            return createStopOrder(symbol, newQuantity, order.stopPrice, instruction);
    }
    /* #endregion */

    const generateExecutionScript = (symbol) => {
        let accountData = window.TradingApp.Firestore.getAccountForSymbol(symbol);
        if (!accountData || !accountData.orders) {
            return -1;
        }
        let orders = accountData.orders;
        let tradeData = extractTradeExecutions(orders);
        //console.log(tradeData);
        let text = "";
        tradeData.tradePerMinute.forEach(trade => {
            let price = trade.dollarAmount / trade.quantity;
            price = window.TradingApp.Helper.roundToCents(price);
            let condition = `GetSymbol() == "${symbol}" and time == ${trade.secondsSinceOpen}`;
            if (trade.action === "BUY" || trade.action === "BUY_TO_COVER") {
                text += `AddChartBubble(${condition}, ${price}, "+${trade.quantity}", GlobalColor("BubbleGreen"), 0);\n`;
            } else {
                text += `AddChartBubble(${condition}, ${price}, "-${trade.quantity}", GlobalColor("BubbleRed"), 1);\n`;
            }
        });
        //console.log(text);
        return text;
    };
    const generateExecutionScriptForAllStocks = () => {
        let allSymbols = {};
        let cache = window.TradingApp.Firestore.getCache();
        let account = cache.tosAccount;
        let orders = account.securitiesAccount.orderStrategies;
        orders.forEach(order => {
            allSymbols[getOrderSymbol(order)] = 1;
        });
        let text = '';
        for (let symbol in allSymbols) {
            text += generateExecutionScript(symbol);
        }
        console.log(text);
    };

    return {
        copyOrder,
        createMarketOrder,
        createPreMarketOrder,
        createOcoOrder,
        createOcoOrderFromTwoLegs,
        createTestOrder,
        createTestOcoOrder,
        createEntryOrdersWithFixedRisk,
        createEntryOrders,
        getOrderSymbol,
        OrderType,
        OrderStrategyType,
        OrderLegInstruction,
        filterWorkingOrders,
        extractAllCancelableOrdersIds,
        extractTopLevelCancelableOrdersIds,
        extractEntryOrders,
        extractEntryOrdersIds,
        extractStopOrders,
        extractOrderPrice,
        extractFilledOrders,
        extractTradeExecutions,
        extractWorkingExitPairs,
        isBuyOrder,
        isSellOrder,
        getOrderTypeShortString,
        replicateOrderWithNewPrice,
        replicateOrderWithNewQuantity,
        generateExecutionScript,
        generateExecutionScriptForAllStocks,
    }
})();
