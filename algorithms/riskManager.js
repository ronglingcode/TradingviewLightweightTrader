window.TradingApp.Algo.RiskManager = (function () {
    const DefaultMaxRiskPerTrade = 194.81;
    const MaxCapitalPerTrade = 100000;
    const getMaxRiskPerTrade = (setupQuality, multiplier) => {
        return multiplier * DefaultMaxRiskPerTrade;
    };
    return {
        getMaxRiskPerTrade,
        MaxCapitalPerTrade
    }
})();