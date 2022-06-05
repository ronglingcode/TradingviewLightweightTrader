window.TradingApp.Algo.RiskManager = (function () {
    const DefaultMaxRiskPerTrade = 215;
    const MaxDailyLoss = 2.5 * DefaultMaxRiskPerTrade;
    const MaxCapitalPerTrade = 100000;
    const getMaxRiskPerTrade = (setupQuality, multiplier) => {
        let pnl = window.TradingApp.Firestore.getProfitAndLossFromCache();
        let defaultRisk = multiplier * DefaultMaxRiskPerTrade;
        // currently negative profit loss on the day
        if (pnl && pnl < 0) {
            let remainingRisk = MaxDailyLoss + pnl;
            // 1R, 0.75R, 0.325R
            return Math.min(remainingRisk / 2, defaultRisk);
        } else {
            return defaultRisk;
        }

    };
    const addCents = (price, cents) => {
        price = Math.ceil(price * 100);
        return (price + cents) / 100;
    };
    const minusCents = (price, cents) => {
        price = Math.floor(price * 100);
        return (price - cents) / 100;
    };
    const quantityToRiskMultiples = (riskPerShare, quantity) => {
        let riskSize = riskPerShare * quantity;
        let riskMultiples = riskSize / DefaultMaxRiskPerTrade * 100;
        return Math.round(riskMultiples);
    };
    return {
        getMaxRiskPerTrade,
        MaxCapitalPerTrade,
        MaxDailyLoss,
        addCents,
        minusCents,
        quantityToRiskMultiples
    }
})();