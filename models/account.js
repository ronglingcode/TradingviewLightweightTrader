window.TradingApp.Models.Account = (function () {
    // Return a number between 0 and 100 if risk size 0% to 100%
    const getRiskMultiples = (symbol) => {
        let account = window.TradingApp.Firestore.getAccountForSymbol(symbol);
        if (!account || !account.position) {
            return 0;
        }
        let position = account.position;
        let filledPrice = position.averagePrice;
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let riskManager = window.TradingApp.Algo.RiskManager;

        if (position.longQuantity) {
            let riskPerShare = filledPrice - symbolData.lowOfDay;
            return riskManager.quantityToRiskMultiples(riskPerShare, position.longQuantity);
        } else if (position.shortQuantity) {
            let riskPerShare = symbolData.highOfDay - filledPrice;
            return riskManager.quantityToRiskMultiples(riskPerShare, position.shortQuantity);
        }
        return 0;
    };
    return {
        getRiskMultiples,
    };
})();