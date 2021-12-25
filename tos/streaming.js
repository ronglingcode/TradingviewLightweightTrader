window.TradingApp.Streaming = (function () {
    const createLoginRequest = (userPrincipal) => {
        let requestContainer = { requests: [] };
        let request = createRequestBase(0, userPrincipal);

        request.service = "ADMIN";
        request.command = "LOGIN";

        let streamerInfo = userPrincipal.streamerInfo;
        request.parameters = {
            credential: buildCredentialUrlEncodedString(userPrincipal),
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

    const buildCredentialUrlEncodedString = (userPrincipal) => {
        let account = userPrincipal.accounts[0];
        let streamerInfo = userPrincipal.streamerInfo;
        let tokenTimeStampAsMs = tokenTimestamp(streamerInfo["tokenTimestamp"]);

        let result = "userid=" + account.accountId;
        result += ("&token=" + streamerInfo["token"]);
        result += ("&company=" + account.company);
        result += ("&segment=" + account.segment);
        result += ("&cddomain=" + account.accountCdDomainId);
        result += ("&usergroup=" + streamerInfo["userGroup"]);
        result += ("&accesslevel=" + streamerInfo["accessLevel"]);
        result += ("&authorized=" + "Y");
        result += ("&acl=" + streamerInfo["acl"]);
        result += ("&timestamp=" + tokenTimeStampAsMs);
        result += ("&appid=" + streamerInfo["appId"]);

        return result;
    };

    const tokenTimestamp = (readableTimeString) => {
        // for "2021-12-25T19:23:49+0000", returns 1640460229000
        let d = new Date(readableTimeString);
        return d.getTime() - d.getMilliseconds()
    };

    return {
        createLoginRequest,
    }
})();