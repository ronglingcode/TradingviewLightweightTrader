window.TradingApp.Algo.RiskManager = (function () {
    const DefaultMaxRiskPerTrade = 161;
    const MaxCapitalPerTrade = 100000;
    const getMaxRiskPerTrade = (setupQuality, multiplier) => {
        return multiplier * DefaultMaxRiskPerTrade;
    };
    return {
        getMaxRiskPerTrade,
        MaxCapitalPerTrade
    }
})();