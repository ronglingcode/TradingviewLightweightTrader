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
        requests.push(createESTimeSaleRequest(requestId++, userPrincipal));
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

    return {
        createLoginRequest,
        createMainRequest
    }
})();