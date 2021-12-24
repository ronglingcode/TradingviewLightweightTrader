window.TradingApp.Secrets = (function () {
    const accountId = '123456';
    let accessToken = "a_very_long_string";
    const refreshToken = "abc";
    const code = "abc";
    const clientId = "abc";
    const redirectUrl = "https://localhost";
    return {
        accountId,
        accessToken,
        refreshToken,
        code,
        clientId,
        redirectUrl
    }
})();