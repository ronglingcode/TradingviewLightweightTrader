window.TradingApp.Streaming = (function () {
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
            requestid: requestId,
            account: userPrincipal.accounts[0].accountId,
            source: userPrincipal.streamerInfo.appId,
            service: service,
            command: command
        };
    };

    const createMainRequest = () => {
        let userPrincipal = window.TradingApp.TOS.userPrincipal;
        let requestId = 1;
        let requests = [];
        requests.push(createQualityOfServiceRequest(requestId++, userPrincipal));
        requests.push(createAccountActivityRequest(requestId++, userPrincipal));
        requests.push(createStockTimeSaleRequest(requestId++, userPrincipal));
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

    const createStockTimeSaleRequest = (requestId, userPrincipal) => {
        let request = createRequestBase(requestId, userPrincipal, "TIMESALE_EQUITY", "SUBS");
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
    }

    const createTimeSale = (c) => {
        let record = {
            symbol: c["key"]
        };
        if (c["1"] != null) {
            record.tradeDatetime = new Date(c["1"]);
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
    return {
        createLoginRequest,
        createMainRequest,
        createTimeSale
    }
})();