window.TradingApp.Algo.TakeProfit = (function () {
    const applyProfitStrategyByPercentage = (totalShares, basePrice, stopOut, targetPrices, percentages) => {
        let totalPercentages = 0.0;
        let results = [];
        let risk = basePrice - stopOut;
        let sum = 0;
        for (let i = 0; i < targetPrices.length; i++) {
            let target = targetPrices[i];
            let percent = percentages[i];
            totalPercentages += percent;
            let shares = parseInt(totalShares * percent);
            if (shares <= 0) {
                if (i == 0)
                    shares = 1;
                else
                    continue;
            }
            target = Math.round(target * 100) / 100;
            results.push({
                target: target,
                quantity: shares
            });
            sum += shares;
        }

        let leftOver = totalShares - sum;
        if (leftOver > 0) {
            if (totalPercentages == 1) {
                let i = 0;
                while (leftOver > 0) {
                    results[i].quantity++;
                    i = (i + 1) % results.length;
                    leftOver--;
                }
            }
            else {
                let veryFarTarget = basePrice + risk * 10;
                veryFarTarget = Math.round(veryFarTarget * 100) / 100;
                results.push({
                    target: veryFarTarget,
                    quantity: leftOver
                });
            }
        }
        return results;
    };

    const getProfitTargets = (symbol, totalShares, basePrice, stopOut, setupQuality) => {
        let isLong = basePrice > stopOut;
        let risk = basePrice - stopOut;
        let stockSettings = window.TradingApp.StockCandidates[symbol];
        if (!stockSettings) {
            return getDefaultProfitTargets(symbol, totalShares, basePrice, stopOut);
        }
        if ((isLong && !stockSettings.longTargets) || (!isLong && !stockSettings.shortTargets)) {
            window.TradingApp.Firestore.logInfo("no pre-defined targets, using default targets");
            return getDefaultProfitTargets(symbol, totalShares, basePrice, stopOut);
        }
        let presetTargets = isLong ? stockSettings.longTargets : stockSettings.shortTargets;
        let targetPrices = [];
        let percentage = [];
        let remainingPercentage = 1;
        for (let i = 0; i < presetTargets.length; i++) {
            let t = presetTargets[i];
            targetPrices.push(t.price);
            percentage.push(t.percentage);
            remainingPercentage -= t.percentage;
        }
        // fill the rest with 2R and 3R
        let target2R = basePrice + risk * 2;
        let target3R = basePrice + risk * 3;
        targetPrices.push(target2R);
        percentage.push(remainingPercentage / 2);
        targetPrices.push(target3R);
        percentage.push(remainingPercentage / 2);

        window.TradingApp.Firestore.addPinnedTarget(symbol, target2R);
        return applyProfitStrategyByPercentage(totalShares, basePrice, stopOut, targetPrices, percentage);
    };
    const getDefaultProfitTargets = (symbol, totalShares, basePrice, stopOut) => {
        /* set as:
         * 1.0 15%
         * 2.0 45%
         * 3.0 22%
         * 4.0 18%
        */
        let rrr = [1.0, 2.0, 3, 4];
        let percentage = [0.15, 0.45, 0.22, 0.18];
        let targetPrices = [];
        let risk = basePrice - stopOut;
        for (let i = 0; i < rrr.length; i++) {
            let target = basePrice + risk * rrr[i];
            target = Math.round(target * 100) / 100;
            targetPrices.push(target);
        }

        window.TradingApp.Firestore.addPinnedTarget(symbol, targetPrices[1]);
        return applyProfitStrategyByPercentage(totalShares, basePrice, stopOut, targetPrices, percentage);
    };
    return {
        getProfitTargets
    };
})();