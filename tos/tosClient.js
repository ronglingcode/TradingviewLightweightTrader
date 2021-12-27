window.TradingApp.TOS = (function () {
    let initialized = false;
    let userPrincipal = {};
    const initialize = async () => {
        await createAccessToken();
        await getUserPrincipal();
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
    }
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
            .catch(err => console.log('Request Failed', err)); //;
    }
    /* #endregion */
    /* #region Account */

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
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders`;
        return sendJsonPostRequestWithAccessToken(url, order);
    };

    const testOrder = () => {
        let order = window.TradingApp.OrderFactory.createTestOrder();
        placeOrderBase(order).then(response => {
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
        getSamplePriceHistory,
        testOrder,
        getUserPrincipal,
        initialize,
        initialized,
        userPrincipal,
        placeOrderBase,
        testPriceHistory
    }
})();