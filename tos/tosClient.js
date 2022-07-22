window.TradingApp.TOS = (function () {
    let initialized = false;
    let userPrincipal = {};
    let initialAccount = {};
    const initialize = async () => {
        await createAccessToken();
        await getUserPrincipal();
        await setInitialAccount();
        window.TradingApp.TOS.initialized = true;
    };
    /* #region Utils */
    const sendJsonPostRequestWithAccessToken = (url, data) => {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.TradingApp.Secrets.accessToken
            },
            body: JSON.stringify(data)
        };
        return fetch(url, config);
    };

    const sendJsonPutRequestWithAccessToken = (url, data) => {
        const config = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.TradingApp.Secrets.accessToken
            },
            body: JSON.stringify(data)
        };
        return fetch(url, config);
    };

    const asyncGet = (url) => {
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.TradingApp.Secrets.accessToken
            }
        };
        return fetch(url, config);
    };
    const asyncDelete = (url) => {
        const config = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.TradingApp.Secrets.accessToken
            }
        };
        return fetch(url, config);
    };
    /* #endregion */

    /* #region Access */
    const createAccessToken = async () => {
        const AUTH_URL = "https://api.tdameritrade.com/v1/oauth2/token";
        return fetch(AUTH_URL, {
            method: 'POST',
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: window.TradingApp.Secrets.refreshToken,
                code: window.TradingApp.Secrets.code,
                client_id: window.TradingApp.Secrets.clientId,
                redirect_url: window.TradingApp.Secrets.redirectUrl
            })
        }).then(response => response.json())  // convert to json
            .then(json => window.TradingApp.Secrets.accessToken = json.access_token)
            .catch(err => console.log('Request Failed', err)); // Catch errors
    };

    const getUserPrincipal = async () => {
        let url = "https://api.tdameritrade.com/v1/userprincipals";
        url += "?fields=streamerSubscriptionKeys,streamerConnectionInfo";
        return asyncGet(url).then(response => response.json())  // convert to json
            .then(json => window.TradingApp.TOS.userPrincipal = json)
            .catch(err => console.log('Request Failed', err));
    }
    /* #endregion */
    /* #region Account */
    const getAccount = async () => {
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}?fields=positions,orders`;
        return asyncGet(url).then(response => response.json())  // convert to json
            .then(json => {
                window.TradingApp.Firestore.cacheAccountInfo(json);
                return json;
            })
            .catch(err => console.log('Request Failed', err));
    };

    const getTransactions = async () => {
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/transactions`;
        return asyncGet(url).then(response => response.json())  // convert to json
            .then(json => {
                console.log(json);
                return json;
            })
            .catch(err => console.log('Request Failed', err));
    };

    const filterAccountBySymbol = (symbol, account) => {
        account = account.securitiesAccount;
        let symbolAccount = {
            orders: []
        };
        if (!account)
            return symbol

        if (account.orderStrategies) {
            account.orderStrategies.forEach(order => {
                if (window.TradingApp.OrderFactory.getOrderSymbol(order) === symbol) {
                    symbolAccount.orders.push(order);
                }
            });
        }
        if (account.positions) {
            for (let i = 0; i < account.positions.length; i++) {
                let p = account.positions[i];
                if (p.instrument.symbol === symbol) {
                    symbolAccount.position = p;
                    break;
                }
            }
        }
        return symbolAccount;
    };
    const getAccountBySymbol = async (symbol) => {
        let account = await getAccount();
        return filterAccountBySymbol(symbol, account);
    };
    const setInitialAccount = async () => {
        let account = await getAccount();
        window.TradingApp.TOS.initialAccount = account;
        window.TradingApp.Firestore.initializeAutoTraderState(account);
    };
    const flattenPosition = async (symbol) => {
        let startTime = new Date();
        let account = window.TradingApp.Firestore.getAccountForSymbol(symbol);
        let position = account.position;
        if (!position) {
            return;
        }
        let orderLegInstruction;
        let quantity = 0;
        if (position.longQuantity > 0) {
            orderLegInstruction = window.TradingApp.OrderFactory.OrderLegInstruction.SELL;
            quantity = position.longQuantity;
        }
        else if (position.shortQuantity > 0) {
            orderLegInstruction = window.TradingApp.OrderFactory.OrderLegInstruction.BUY_TO_COVER;
            quantity = position.shortQuantity;
        }
        else {
            return;
        }
        let orderToSubmit = window.TradingApp.OrderFactory.createMarketOrder(symbol, quantity, orderLegInstruction);
        let orderIdsToCancel = [];// means all working orders need to be canceled
        submitOrderAfterCancel(symbol, orderIdsToCancel, orderToSubmit, startTime);
    };
    const adjustOrderWithNewPrice = async (symbol, keyCode) => {
        // "Digit1" -> 1, "Digit2" -> 2
        let startTime = new Date();
        let orderNumber = parseInt(keyCode[5]);
        if (keyCode == "Digit0") {
            orderNumber = 10;
        }

        let widget = window.TradingApp.Main.widgets[symbol];
        if (widget.workingOrders.length < orderNumber) {
            window.TradingApp.Firestore.logInfo("out of range");
            return;
        }

        let order = widget.workingOrders[orderNumber - 1];
        let orderInstruction = order.orderLegCollection[0].instruction;
        let isBuyOrder = window.TradingApp.OrderFactory.isBuyOrder(orderInstruction);
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        // order is profit taking order
        if (order.orderType == "LIMIT") {
            // check for 1R open range
            if ((isBuyOrder && order.price > symbolData.openLow1R) ||
                (!isBuyOrder && order.price < symbolData.openHigh1R)) {
                window.TradingApp.Firestore.logInfo("cannot adjust exit order less than 1R for " + symbol);
                return;
            }

            // check for pinned prices
            let pinnedPriceTargets = window.TradingApp.Firestore.getPinnedTargets(symbol);
            if (pinnedPriceTargets.includes(order.price)) {
                window.TradingApp.Firestore.logInfo("cannot adjust pinned price target for " + symbol);
                return;
            }
        }
        let secondsSinceEntry = window.TradingApp.AutoTrader.getEntryTimeFromNowInSeconds(symbol);
        let remainingSeconds = window.TradingApp.AutoTrader.getRemainingCoolDownInSeconds(symbol);
        if (remainingSeconds > 0) {
            window.TradingApp.Firestore.logInfo(`cannot adjust exit order for ${symbol} within first 5 minutes, ${secondsSinceEntry} seconds so far, ${remainingSeconds} to go`);
            return;
        }

        let oldOrderId = order.orderId;
        order.orderId = null;
        let newPrice = window.TradingApp.Helper.roundToCents(widget.crosshairPrice);
        let newOrder = window.TradingApp.OrderFactory.replicateOrderWithNewPrice(order, newPrice);
        if (order.parentOrderId && order.siblingOrder) {
            // adjust OCO order, need to candel the parent order and 
            // submit a new OCO order with 2 legs
            let newLeg = newOrder;
            let otherLeg = window.TradingApp.OrderFactory.copyOrder(order.siblingOrder);
            cancelOrderById(order.parentOrderId);
            console.log(`cancel ${order.parentOrderId}`);
            let orderToSubmit = window.TradingApp.OrderFactory.createOcoOrderFromTwoLegs(newLeg, otherLeg);
            console.log(orderToSubmit);
            submitOrderAfterCancel(symbol, [order.parentOrderId], orderToSubmit, startTime);
        } else {
            replaceOrderBase(newOrder, oldOrderId);
        }
    };
    // submit the order after orders in orderIdsToCancel are all canceled
    // if orderIdsToCancel is [], that means all orders needs to be canceled,
    const submitOrderAfterCancel = async (symbol, orderIdsToCancel, orderToSubmit, startTime) => {
        let allCancelableOrderIds = getAllCancelableOrdersIds(symbol);
        console.log(allCancelableOrderIds);
        let ordersAreCanceled = true;
        if (orderIdsToCancel.length == 0) {
            ordersAreCanceled = allCancelableOrderIds.length == 0;
        } else {
            ordersAreCanceled = checkOrdersAreCanceled(allCancelableOrderIds, orderIdsToCancel);
        }
        if (ordersAreCanceled) {
            let endTime = new Date();
            let latencyInSeconds = (endTime - startTime) / 1000;
            placeOrderBase(orderToSubmit);
            window.TradingApp.Firestore.logDebug(`latency is ${latencyInSeconds} seconds.`);
        } else {
            console.log('still has orders not canceled, keep waiting');
            setTimeout(() => {
                submitOrderAfterCancel(symbol, orderIdsToCancel, orderToSubmit, startTime);
            }, 100);
        }
    };
    const checkOrdersAreCanceled = (workingOrderIds, orderIdsToCancel) => {
        for (let i = 0; i < orderIdsToCancel.length; i++) {
            let orderIdToCancel = orderIdsToCancel[i];
            if (workingOrderIds.includes(orderIdToCancel)) {
                return false;
            }
        }
        return true;
    };

    const reduceOrderQuantityByHalf = async (symbol, marketOut) => {
        let widget = window.TradingApp.Main.widgets[symbol];
        if (!widget || !widget.workingOrders || widget.workingOrders.length == 0) {
            console.log('no working orders');
            return;
        }

        let fieldToCheck = marketOut ? "marketOutHalf" : "limitOutHalf";
        let hasDoneIt = window.TradingApp.Firestore.getStockState(symbol, fieldToCheck);
        if (!window.TradingApp.Secrets.isTestAccount && hasDoneIt === true) {
            window.TradingApp.Firestore.logInfo(`has already done ${fieldToCheck} for ${symbol}, skipping this time.`);
            return;
        }
        window.TradingApp.Firestore.setStockState(symbol, fieldToCheck, true);

        let step1Result = await reduceOrderGroupQuantityByHalf(symbol, "LIMIT");
        console.log(`remainingQuantity: ${step1Result.remainingQuantity}`);
        reduceOrderQuantityByHalfStep2(symbol, marketOut, step1Result.oldOrderIds, step1Result.remainingQuantity);
    };

    const reduceOrderQuantityByHalfStep2 = async (symbol, marketOut, oldOlderIds, remainingQuantity) => {
        let workingOrders = window.TradingApp.Main.widgets[symbol].workingOrders;
        let workingOrderIds = [];
        workingOrders.forEach(order => {
            workingOrderIds.push(order.orderId);
        });
        let ordersAreCanceled = checkOrdersAreCanceled(workingOrderIds, oldOlderIds);
        if (ordersAreCanceled) {
            let step2Result = await reduceOrderGroupQuantityByHalf(symbol, "STOP");
            reduceOrderQuantityByHalfStep3(symbol, marketOut, step2Result.oldOrderIds, remainingQuantity);
        } else {
            setTimeout(() => {
                reduceOrderQuantityByHalfStep2(symbol, marketOut, oldOlderIds, remainingQuantity);
            }, 100);
        }
    };
    const reduceOrderQuantityByHalfStep3 = async (symbol, marketOut, oldOrderIds, remainingQuantity) => {
        if (remainingQuantity == 0) {
            return;
        }
        let workingOrders = window.TradingApp.Main.widgets[symbol].workingOrders;
        let workingOrderIds = [];
        workingOrders.forEach(order => {
            workingOrderIds.push(order.orderId);
        });
        let ordersAreCanceled = checkOrdersAreCanceled(workingOrderIds, oldOrderIds);
        if (ordersAreCanceled) {
            console.log('step 3: set price target');
            let widget = window.TradingApp.Main.widgets[symbol];
            let orderLegInstruction = widget.workingOrders[0].orderLegCollection[0].instruction;
            let stopPrice = 0;

            for (let i = 0; i < widget.workingOrders.length; i++) {
                let order = widget.workingOrders[i];
                if (order.orderType == "STOP") {
                    stopPrice = order.stopPrice;
                }
            }
            if (stopPrice == 0) {
                console.log('no stop price, change to market out');
            }
            if (marketOut || stopPrice == 0) {
                let order = window.TradingApp.OrderFactory.createMarketOrder(symbol, remainingQuantity, orderLegInstruction);
                placeOrderBase(order);
            } else {
                let newPrice = window.TradingApp.Helper.roundToCents(widget.crosshairPrice);
                let order = window.TradingApp.OrderFactory.createOcoOrder(symbol, remainingQuantity, stopPrice, newPrice, remainingQuantity, orderLegInstruction);
                placeOrderBase(order);
            }
        } else {
            console.log('wait 0.1 sec for step 3');
            setTimeout(() => {
                reduceOrderQuantityByHalfStep3(symbol, marketOut, oldOrderIds, remainingQuantity);
            }, 100);
        }
    };

    const reduceOrderGroupQuantityByHalf = async (symbol, orderType) => {
        console.log(`reduce quantity for ${orderType} orders`);
        let result = {
            'oldOrderIds': [],
            'remainingQuantity': 0
        };
        let widget = window.TradingApp.Main.widgets[symbol];
        let workingOrders = [];
        for (let i = 0; i < widget.workingOrders.length; i++) {
            workingOrders.push(widget.workingOrders[i]);
        }
        for (let i = 0; i < workingOrders.length; i++) {
            let order = workingOrders[i];
            if (order.orderType != orderType) {
                continue;
            }
            if (order.orderType == "STOP") {
                stopPrice = order.stopPrice;
            }
            let oldOrderId = order.orderId;
            let q = order.orderLegCollection[0].quantity;
            let newQuantity = Math.ceil(q / 2);
            result.remainingQuantity += (q - newQuantity);
            console.log(`q: ${q}, new: ${newQuantity}`);
            if (newQuantity != q) {
                result.oldOrderIds.push(oldOrderId);
                let newOrder = window.TradingApp.OrderFactory.replicateOrderWithNewQuantity(order, newQuantity);
                replaceOrderBase(newOrder, oldOrderId);
            }
        }
        return result;
    };

    const adjustStopOrders = async (symbol) => {
        let secondsSinceEntry = window.TradingApp.AutoTrader.getEntryTimeFromNowInSeconds(symbol);
        if (secondsSinceEntry != -1 && secondsSinceEntry < 5 * 60) {
            window.TradingApp.Firestore.logInfo(`cannot adjust exit order for ${symbol} within first 5 minutes, ${secondsSinceEntry} seconds so far`);
            return;
        }

        let orders = await getOrdersForSymbol(symbol);
        let stopOrders = window.TradingApp.OrderFactory.extractStopOrders(orders);

        let widget = window.TradingApp.Main.widgets[symbol];
        let newPrice = window.TradingApp.Helper.roundToCents(widget.crosshairPrice);

        stopOrders.forEach(order => {
            let oldOrderId = order.orderId;
            let newOrder = window.TradingApp.OrderFactory.replicateOrderWithNewPrice(order, newPrice);
            replaceOrderBase(newOrder, oldOrderId);
        });
    };
    /* #endregion */

    /* #region Price history, Quote */
    const getPriceHistory = async (symbol) => {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        let end = window.TradingApp.DB.jsDateToUTC(date) * 1000;
        // TODO: account for holidays
        date.setDate(date.getDate() - 4);
        let start = window.TradingApp.DB.jsDateToUTC(date) * 1000;
        let clientId = window.TradingApp.Secrets.clientId
        let url = `https://api.tdameritrade.com/v1/marketdata/${symbol}/pricehistory?apikey=${clientId}&frequencyType=minute&frequency=1&startDate=${start}&endDate=${end}`;

        return asyncGet(url);
    };

    const getQuote = async (symbol) => {
        // took 0.1-0.2 seconds
        let url = `https://api.tdameritrade.com/v1/marketdata/${symbol}/quotes`;
        return asyncGet(url).then(response => response.json())  // convert to json
            .then(json => {
                return quote = json[symbol];
            })
            .catch(err => console.log('Request Failed', err)); //;
    };

    const getSamplePriceHistory = () => {
        data = window.sample_price_history.candles;
        let candles = [];
        data.forEach(element => {
            const d = new Date(element.datetime);
            const newD = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) / 1000;
            candles.push({
                time: newD,
                open: element.open,
                high: element.high,
                low: element.low,
                close: element.close,
                volume: element.volume
            });
        });
        return candles;
    };

    const testPriceHistory = () => {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        let end = window.TradingApp.DB.jsDateToUTC(date) * 1000;
        // TODO: account for holidays
        date.setDate(date.getDate() - 4);
        let start = window.TradingApp.DB.jsDateToUTC(date) * 1000;// date.getTime();
        let clientId = window.TradingApp.Secrets.clientId
        let url = `https://api.tdameritrade.com/v1/marketdata/TSLA/pricehistory?apikey=${clientId}&frequencyType=minute&frequency=1&startDate=${start}&endDate=${end}`;

        asyncGet(url).then(response => response.json()).then(json => {
            let lastCandle = json.candles[json.candles.length - 1];
            let testTime = new Date(lastCandle.datetime);
            console.log(testTime);
        });
    }
    /* #endregion */

    /* #region Order */
    const placeOrderBase = async (order) => {
        window.TradingApp.Firestore.logOrder(order);
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders`;
        return sendJsonPostRequestWithAccessToken(url, order)//.then(response => console.log(response))
            .catch(err => {
                window.TradingApp.Firestore.logError('Order request Failed ' + err);
                console.log(err);
            }); // Catch errors;
    };

    const replaceOrderBase = async (newOrder, oldOrderId) => {
        window.TradingApp.Firestore.logOrder(newOrder);
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders/${oldOrderId}`;
        return sendJsonPutRequestWithAccessToken(url, newOrder)//.then(response => console.log(response))
            .catch(err => {
                window.TradingApp.Firestore.logError('Order request Failed ' + err);
                console.log(err);
            }); // Catch errors;
    };

    const getOrders = async () => {
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders`;
        return asyncGet(url).then(response => response.json())  // convert to json
            .then(json => { return json; })
            .catch(err => console.log('Request Failed', err)); //;
    };
    const filterOrdersForSymbol = (symbol, orders) => {
        let ordersForSymbol = [];
        orders.forEach(order => {
            if (window.TradingApp.OrderFactory.getOrderSymbol(order) === symbol) {
                ordersForSymbol.push(order);
            }
        });
        return ordersForSymbol;
    }
    const getOrdersForSymbol = async (symbol) => {
        let orders = await getOrders();
        return filterOrdersForSymbol(symbol, orders);
    };
    const getTopLevelCancelableOrdersIds = (symbol) => {
        let cache = window.TradingApp.Firestore.getCache();
        let account = cache.tosAccount;
        let orders = filterOrdersForSymbol(symbol, account.securitiesAccount.orderStrategies);
        return window.TradingApp.OrderFactory.extractTopLevelCancelableOrdersIds(orders);
    };
    const getAllCancelableOrdersIds = (symbol) => {
        let cache = window.TradingApp.Firestore.getCache();
        let account = cache.tosAccount;
        let orders = filterOrdersForSymbol(symbol, account.securitiesAccount.orderStrategies);
        return window.TradingApp.OrderFactory.extractAllCancelableOrdersIds(orders);
    };
    const cancelWorkingOrders = async (symbol) => {
        let ids = getTopLevelCancelableOrdersIds(symbol);
        let accountId = window.TradingApp.Secrets.accountId;
        ids.forEach(orderId => {
            let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders/${orderId}`;
            asyncDelete(url);
        });
    };

    const cancelEntryOrders = async (symbol) => {
        let orders = await getOrdersForSymbol(symbol);
        let ids = window.TradingApp.OrderFactory.extractEntryOrdersIds(orders);
        let accountId = window.TradingApp.Secrets.accountId;
        ids.forEach(orderId => {
            let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders/${orderId}`;
            asyncDelete(url);
        });
    };

    const cancelOrderById = async (orderId) => {
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders/${orderId}`;
        asyncDelete(url);
    };

    const testOrder = () => {
        let order = window.TradingApp.OrderFactory.createTestOrder();
        placeOrderBase(order).then(response => {
            console.log(response);
            if (response && response.status == 201) {
                console.log("order success");
            }
        });
    };
    /* #endregion */
    return {
        createAccessToken,
        getPriceHistory,
        getQuote,
        getSamplePriceHistory,
        testOrder,
        getUserPrincipal,
        initialize,
        initialized,
        userPrincipal,
        placeOrderBase,
        adjustOrderWithNewPrice,
        reduceOrderQuantityByHalf,
        adjustStopOrders,
        testPriceHistory,
        initialAccount,
        getAccount,
        getOrders,
        getOrdersForSymbol,
        cancelWorkingOrders,
        cancelEntryOrders,
        cancelOrderById,
        getAccountBySymbol,
        filterAccountBySymbol,
        flattenPosition,
        getTransactions
    }
})();