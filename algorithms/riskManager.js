window.TradingApp.Algo.RiskManager = (function () {
    const DefaultMaxRiskPerTrade = 215;
    const MaxDailyLoss = 2.5 * DefaultMaxRiskPerTrade;
    const MaxCapitalPerTrade = 100000;
    const getMaxRiskPerTrade = (setupQuality, multiplier) => {
        return multiplier * DefaultMaxRiskPerTrade;
    };
    const addCents = (price, cents) => {
        price = Math.ceil(price * 100);
        return (price + cents) / 100;
    };
    const minusCents = (price, cents) => {
        price = Math.floor(price * 100);
        return (price - cents) / 100;
    };
    return {
        getMaxRiskPerTrade,
        MaxCapitalPerTrade,
        MaxDailyLoss,
        addCents,
        minusCents
    }
})();