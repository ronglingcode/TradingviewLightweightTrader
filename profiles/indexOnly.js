window.TradingApp.Profiles.indexOnly = (function () {
    const settings = {
        indexOnly: true,
        entryRulesEnabled: false,
        exitRulesEnabled: false,
        flattenRulesEnabled: false,
        fixedRisk: false,
        priceTargetRequired: false,
    };

    return {
        settings,
    };
})();