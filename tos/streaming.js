window.TradingApp.Streaming = (function () {
    function jsonToQueryString(json) {
        return Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
    }

    const createLoginRequest = (userPrincipal) => {
        let requestContainer = { requests: [] };
        let request = createRequestBase(0, userPrincipal);

        request.service = "ADMIN";
        request.command = "LOGIN";

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

    const createRequestBase = (requestId, userPrincipal) => {
        return {
            requestid: requestId,
            account: userPrincipal.accounts[0].accountId,
            source: userPrincipal.streamerInfo.appId
        };
    };

    return {
        createLoginRequest,
    }
})();