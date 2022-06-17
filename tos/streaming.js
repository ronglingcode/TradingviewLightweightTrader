window.TradingApp.Streaming = (function () {
    // UROUT happens for cancel orders, replace orders
    const OrderChangeMessageTypes = ['OrderEntryRequest', 'UROUT', 'OrderFill'];
    let requestCounter = 0;
    function jsonToQueryString(json) {
        return Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
    }

    const createLoginRequest = (userPrincipal) => {
        let requestContainer = { requests: [] };
        let request = createRequestBase(0, userPrincipal, "ADMIN", "LOGIN");
        let streamerInfo = userPrincipal.streamerInfo;
        let tokenTimeStampAsDateObj = new Date(userPrincipal.streamerInfo.tokenTimestamp);
        let tokenTimeStampAsMs = tokenTimeStampAsDateObj.getTime();
        let credentials = {
            "userid": userPrincipal.accounts[0].accountId,
            "token": userPrincipal.streamerInfo.token,
            "company": userPrincipal.accounts[0].company,
            "segment": userPrincipal.accounts[0].segment,
            "cddomain": userPrincipal.accounts[0].accountCdDomainId,
            "usergroup": userPrincipal.streamerInfo.userGroup,
            "accesslevel": userPrincipal.streamerInfo.accessLevel,
            "authorized": "Y",
            "timestamp": tokenTimeStampAsMs,
            "appid": userPrincipal.streamerInfo.appId,
            "acl": userPrincipal.streamerInfo.acl
        }
        request.parameters = {
            credential: jsonToQueryString(credentials),
            token: streamerInfo["token"],
            version: "1.0"
        };
        requestContainer.requests.push(request);
        return requestContainer;
    };

    const createRequestBase = (requestId, userPrincipal, service, command) => {
        return {
            requestid: window.TradingApp.Streaming.requestCounter++,
            account: userPrincipal.accounts[0].accountId,
            source: userPrincipal.streamerInfo.appId,
            service: service,
            command: command
        };
    };

    const createMainRequest = () => {
        let userPrincipal = window.TradingApp.TOS.userPrincipal;
        let requests = [];
        requests.push(createQualityOfServiceRequest(window.TradingApp.Streaming.requestCounter++, userPrincipal));
        requests.push(createAccountActivityRequest(window.TradingApp.Streaming.requestCounter++, userPrincipal));
        let requestContainer = { requests: requests };
        return requestContainer;
    };

    const createQualityOfServiceRequest = (requestId, userPrincipal) => {
        let request = createRequestBase(requestId, userPrincipal, "ADMIN", "QOS");
        request.parameters = { "qoslevel": "0" };
        return request;
    }

    const createAccountActivityRequest = (requestId, userPrincipal) => {
        let request = createRequestBase(requestId, userPrincipal, "ACCT_ACTIVITY", "SUBS");
        request.parameters = {
            "keys": userPrincipal.streamerSubscriptionKeys.keys[0]["key"],
            "fields": "0,1,2,3"
        };
        return request;
    }

    const createESTimeSaleRequest = (requestId, userPrincipal) => {
        let request = createRequestBase(requestId, userPrincipal, "TIMESALE_FUTURES", "SUBS");
        request.parameters = {
            "keys": "/ES",
            "fields": "0,1,2,3,4"
        };
        return request;
    }

    const createStockTimeSaleRequest = () => {
        let request = createRequestBase(window.TradingApp.Streaming.requestCounter++, window.TradingApp.TOS.userPrincipal, "TIMESALE_EQUITY", "SUBS");
        let symbols = "";
        for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
            let s = window.TradingApp.Watchlist[i].symbol;
            if (i == 0) {
                symbols += s;
            } else {
                symbols += ("," + s);
            }
        }
        request.parameters = {
            "keys": symbols,
            "fields": "0,1,2,3,4"
        };
        return request;
    };

    const sendStockTimeSaleRequest = (symbol) => {
        let request = createRequestBase(window.TradingApp.Streaming.requestCounter++, window.TradingApp.TOS.userPrincipal, "TIMESALE_EQUITY", "SUBS");
        request.parameters = {
            "keys": symbol,
            "fields": "0,1,2,3,4"
        };
        window.TradingApp.Streaming.socket.send(JSON.stringify(request));
    }

    const createStockLevelOneQuoteRequest = () => {
        let request = createRequestBase(window.TradingApp.Streaming.requestCounter++, window.TradingApp.TOS.userPrincipal, "QUOTE", "SUBS");
        let symbols = "";
        for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
            let s = window.TradingApp.Watchlist[i].symbol;
            if (i == 0) {
                symbols += s;
            } else {
                symbols += ("," + s);
            }
        }
        request.parameters = {
            "keys": symbols,
            "fields": "0,1,2"
        };
        return request;
    };

    const createTimeSale = (c) => {
        let record = {
            symbol: c["key"]
        };
        if (c["1"] != null) {
            record.tradeTime = c["1"];
        }
        if (c["2"] != null)
            record.lastPrice = c["2"];
        if (c["3"] != null)
            record.lastSize = c["3"];
        if (c["4"] != null)
            record.lastSequence = c["4"];
        if (c["seq"] != null) {
            record.seq = c["seq"];
        }
        record.receivedTime = new Date;
        return record;
    };

    const createLevelOneQuote = (c) => {
        let record = {
            symbol: c["key"]
        };
        if (c["1"] != null) {
            record.bid = c["1"];
        }
        if (c["2"] != null)
            record.ask = c["2"];
        return record;
    };

    const createAccountActivity = (c) => {
        let record = {};
        if (c["2"] != null)
            record.messageType = c["2"];
        if (c["3"] != null) {
            record.messageData = c["3"];
        }
        if (OrderChangeMessageTypes.includes(record.messageType) && record.messageData) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(record.messageData, 'text/xml');
            let firstChild = xml.children[0];
            if (!firstChild)
                return record;
            let orders = firstChild.getElementsByTagName('Order');
            if (orders.length > 0) {
                let security = orders[0].getElementsByTagName('Security');
                if (security.length > 0) {
                    let symbols = security[0].getElementsByTagName('Symbol');
                    if (symbols.length > 0) {
                        record.symbol = symbols[0].textContent;
                    }
                }
            }
        }
        return record;
    };

    return {
        requestCounter,
        createLoginRequest,
        createMainRequest,
        createStockTimeSaleRequest,
        sendStockTimeSaleRequest,
        createStockLevelOneQuoteRequest,
        createTimeSale,
        createLevelOneQuote,
        createAccountActivity,
        OrderChangeMessageTypes
    };
})();