window.TradingApp.TOS = (function () {
    const getPriceHistory = (text) => {
        console.log('get price history');
        let url = "https://api.tdameritrade.com/v1/marketdata/SPY/pricehistory?apikey={client_id}&frequencyType=minute&frequency=1&startDate=1640010600000&endDate=1640297198351";

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;


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

    const placeOrderBase = (order) => {
        let accountId = window.TradingApp.Secrets.accountId;
        let url = `https://api.tdameritrade.com/v1/accounts/${accountId}/orders`;
        console.log(url);
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.TradingApp.Secrets.accessToken
            },
            body: JSON.stringify(order)
        }
        fetch(url, config)
    };

    const testOrder = () => {
        order = { "orderId": null, "quantity": 0.0, "orderLegCollection": [{ "orderLegType": "EQUITY", "instrument": { "assetType": "EQUITY", "symbol": "MSFT" }, "instruction": "BUY", "quantity": 1.0 }], "session": "NORMAL", "duration": "DAY", "orderType": "MARKET", "orderStrategyType": "SINGLE", "childOrderStrategies": null, "price": null, "stopPrice": null, "status": null };
        placeOrderBase(order);
    };

    return {
        getPriceHistory,
        getSamplePriceHistory,
        testOrder
    }
})();