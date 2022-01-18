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
                return json;
            })
            .catch(err => console.log('Request Failed', err));
    };

    const filterAccountBySymbol = (symbol, account) => {
        account = account.securitiesAccount;
        let symbolAccount = {
            orders: []
        };
        if (account && account.orderStrategies) {
            account.orderStrategies.forEach(order => {
                if (window.TradingApp.OrderFactory.getOrderSymbol(order) === symbol) {
                    symbolAccount.orders.push(order);
                }
            });
        }
        for (let i = 0; i < account.positions.length; i++) {
            let p = account.positions[i];
            if (p.instrument.symbol === symbol) {
                symbolAccount.position = p;
                break;
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
    };
    const flattenPosition = async (symbol) => {
        let account = await getAccountBySymbol(symbol);
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

        let order = window.TradingApp.OrderFactory.createMarketOrder(symbol, quantity, orderLegInstruction);
        placeOrderBase(order);
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
        //url = "https://api.tdameritrade.com/v1/marketdata/TSLA/pricehistory?apikey=GPH5HXCYICGCYMQWFGNZAGK8EQJIUX5N&frequencyType=minute&frequency=1&startDate=1640615400000&endDate=1640626681446";

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
        return sendJsonPostRequestWithAccessToken(url, order).then(response => console.log(response))
            .catch(err => {
                window.TradingApp.Firestore.logError('Order request Failed ' + err);
                console.log(err);
            }); // Catch errors;
    };

    const replaceOrderBase = async (newOrder, oldOrderId) => {
        window.TradingApp.Firestore.logOrder(newOrder);
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders/${oldOrderId}`;
        return sendJsonPutRequestWithAccessToken(url, newOrder).then(response => console.log(response))
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

    const getWorkingOrders = async (symbol) => {
        let workingOrders = [];
        let orders = await getOrders();
        orders.forEach(order => {
            if (window.TradingApp.OrderFactory.getOrderSymbol(order) === symbol &&
                ["PENDING_ACTIVATION", "WORKING", "QUEUED"].includes(order.status)) {
                console.log(order);
                workingOrders.push(order);
            }
        });
        return workingOrders;
    };

    const cancelWorkingOrders = async (symbol) => {
        let workingOrders = await getWorkingOrders(symbol);
        let accountId = window.TradingApp.Secrets.accountId;
        workingOrders.forEach(order => {
            let orderId = order.orderId;
            let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders/${orderId}`;
            asyncDelete(url);
        });
    };

    const testOrder = () => {
        let order = window.TradingApp.OrderFactory.createTestOrder();
        let oldOrderId = 5963841125;
        replaceOrderBase(order, oldOrderId).then(response => {
            console.log(response);
            if (response.status == 201) {
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
        testPriceHistory,
        initialAccount,
        getAccount,
        getOrders,
        getWorkingOrders,
        cancelWorkingOrders,
        getAccountBySymbol,
        filterAccountBySymbol,
        flattenPosition
    }
})();