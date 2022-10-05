window.TradingApp.Profiles.dayTrading = (function () {
    const settings = {
        indexOnly: false,
        entryRulesEnabled: true,
        exitRulesEnabled: true,
        flattenRulesEnabled: true,
        fixedRisk: true,
        priceTargetRequired: true,
    };

    return {
        settings,
    };
})();