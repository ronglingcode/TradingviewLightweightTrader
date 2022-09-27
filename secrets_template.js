window.TradingApp.Secrets = (function () {
    const name = "name of the account";
    const accountId = '123456';
    let accessToken = "a_very_long_string";
    const refreshToken = "abc";
    const code = "abc";
    const clientId = "abc";
    const redirectUrl = "https://localhost";
    const firebaseConfig = {
        apiKey: "abc",
        authDomain: "abc",
        projectId: "abc",
        storageBucket: "abc",
        messagingSenderId: "123",
        appId: "123",
        measurementId: "a123"
    };
    const isTestAccount = false;// or true if this account is for testing
    const activeProfile = 'dayTrading'; // file names in /profiles folder

    return {
        accountId,
        isTestAccount,
        accessToken,
        refreshToken,
        code,
        clientId,
        redirectUrl,
        firebaseConfig,
        activeProfile,
    }
})();