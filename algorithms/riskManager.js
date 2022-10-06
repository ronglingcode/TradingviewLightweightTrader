window.TradingApp.Algo.RiskManager = (function () {
    const DefaultMaxRiskPerTrade = 120;//215;
    const MinimumStockPrice = 20;
    const MaxDailyLoss = 2.5 * DefaultMaxRiskPerTrade;
    const MaxCapitalPerTrade = 100000;
    const getMaxRiskPerTrade = (setupQuality, multiplier) => {
        if (window.TradingApp.Secrets.isTestAccount) {
            // risk $2 per trade if this account is for testing
            return 2;
        }
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
    const getExistingRiskMultiples = (symbol, account) => {
        if (!account || !account.position)
            return 0;
        let position = account.position;
        let filledPrice = position.averagePrice;
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];

        if (position.longQuantity) {
            let riskPerShare = filledPrice - symbolData.lowOfDay;
            let riskMultiples = quantityToRiskMultiples(riskPerShare, position.longQuantity);
            return riskMultiples / 100;
        } else if (position.shortQuantity) {
            let riskPerShare = symbolData.highOfDay - filledPrice;
            let riskMultiples = quantityToRiskMultiples(riskPerShare, position.shortQuantity);
            return riskMultiples / 100;
        }
        return 0;
    };
    return {
        getMaxRiskPerTrade,
        MaxCapitalPerTrade,
        MaxDailyLoss,
        MinimumStockPrice,
        addCents,
        minusCents,
        quantityToRiskMultiples,
        getExistingRiskMultiples
    }
})();