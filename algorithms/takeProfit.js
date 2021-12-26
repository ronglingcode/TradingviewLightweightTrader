window.TradingApp.Algo.TakeProfit = (function () {
    const applyProfitStrategyByPercentage = (totalShares, basePrice, stopOut, riskRewardRatios, percentages) => {
        let totalPercentages = 0.0;
        let results = [];
        let risk = basePrice - stopOut;
        let sum = 0;
        for (let i = 0; i < riskRewardRatios.length; i++) {
            let rrr = riskRewardRatios[i];
            let percent = percentages[i];
            totalPercentages += percent;
            let shares = parseInt(totalShares * percent);
            if (shares <= 0) {
                if (i == 0)
                    shares = 1;
                else
                    continue;
            }
            let target = basePrice + risk * rrr;
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
                    i = (i + 1) % results.Count;
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

    const getProfitTargets = (totalShares, basePrice, stopOut, setupQuality) => {
        /* set as:
         * 2.1 35%
         * 3.0 45%
         * 4.0 20%
        */
        let rrr = [2.1, 3, 4];
        let percentage = [0.35, 0.45, 0.2];
        return applyProfitStrategyByPercentage(totalShares, basePrice, stopOut, rrr, percentage);

    };
    return {
        getProfitTargets
    };
})();