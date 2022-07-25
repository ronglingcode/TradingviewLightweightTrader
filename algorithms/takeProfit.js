window.TradingApp.Algo.TakeProfit = (function () {
    const applyProfitStrategyByPercentage = (totalShares, basePrice, stopOut, profitTargets) => {
        let totalPercentages = 0.0;
        let results = [];
        let risk = basePrice - stopOut;
        let sum = 0;
        for (let i = 0; i < profitTargets.length; i++) {
            let target = profitTargets[i].price;
            let percent = profitTargets[i].percentage;
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

    const isTargetAtLeastHalfOpenRange = (symbol, isLong, targetPrice) => {
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let open = symbolData.openingCandle;
        let openHigh = open.high;
        let openLow = open.low;
        let openRange = openHigh - openLow;
        if (isLong) {
            return targetPrice >= (openHigh + 0.5 * openRange);
        } else {
            return targetPrice <= (openLow - 0.5 * openRange);
        }
    };

    const getPresetTargets = (symbol, isLong) => {
        let stockSettings = window.TradingApp.StockCandidates[symbol];
        if (!stockSettings) {
            return [];
        }
        if (isLong && stockSettings.longTargets && stockSettings.longTargets.length > 0) {
            return stockSettings.longTargets;
        } else if (!isLong && stockSettings.shortTargets && stockSettings.shortTargets.length > 0) {
            return stockSettings.shortTargets;
        } else {
            return [];
        }
    };

    const getProfitTargets = (symbol, totalShares, basePrice, stopOut, setupQuality) => {
        let isLong = basePrice > stopOut;
        let presetTargets = getPresetTargets(symbol, isLong);
        let profitTargets = [];

        let remainingPercentage = 1;
        for (let i = 0; i < presetTargets.length; i++) {
            let t = presetTargets[i];
            if (isTargetAtLeastHalfOpenRange(symbol, isLong, t.price)) {
                remainingPercentage -= t.percentage;
                profitTargets.push({
                    price: t.price,
                    percentage: t.percentage
                });
            } else {
                window.TradingApp.Firestore.logInfo(`Target price $${t.price} is too close, skipped it.`)
            }
        }

        let defaultTargets = getDefaultProfitTargets(symbol, remainingPercentage, basePrice, stopOut);
        defaultTargets.forEach(t => {
            profitTargets.push(t);
        });

        return applyProfitStrategyByPercentage(totalShares, basePrice, stopOut, profitTargets);
    };

    const getDefaultProfitTargets = (symbol, remainingPercentage, basePrice, stopOut) => {
        /* set as:
         * 1.0 15%
         * 2.0 45%
         * 3.0 22%
         * 4.0 18%
        */
        let rrr = [1.0, 2.0, 3, 4];
        let percentage = [0.15, 0.45, 0.22, 0.18];
        for (let i = 0; i < percentage.length; i++) {
            percentage[i] = percentage[i] * remainingPercentage;
        }
        let profitTargets = [];
        let risk = basePrice - stopOut;

        for (let i = 0; i < rrr.length; i++) {
            let target = basePrice + risk * rrr[i];
            target = Math.round(target * 100) / 100;
            profitTargets.push({
                price: target,
                percentage: percentage[i]
            })
        }

        window.TradingApp.Firestore.addPinnedTarget(symbol, profitTargets[1].price);
        return profitTargets;
    };
    const checkRulesForAdjustingOrders = (symbol, order) => {
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let orderInstruction = order.orderLegCollection[0].instruction;
        let isBuyOrder = window.TradingApp.OrderFactory.isBuyOrder(orderInstruction);
        if (!checkRuleForMinimumProfit(symbol, order, isBuyOrder, symbolData))
            return false;

        if (!checkRuleForPinnedPriceTargets(symbol, order))
            return false;

        if (!checkRuleForTimeSinceEntry(symbol))
            return false;

        return true;
    };
    const checkRuleForMinimumProfit = (symbol, order, isBuyOrder, symbolData) => {
        if (order.orderType == "LIMIT") {
            // check for 1R open range
            if ((isBuyOrder && order.price > symbolData.openLow1R) ||
                (!isBuyOrder && order.price < symbolData.openHigh1R)) {
                window.TradingApp.Firestore.logInfo("cannot adjust exit order less than 1R for " + symbol);
                return false;
            }
        }
        return true;
    };
    const checkRuleForPinnedPriceTargets = (symbol, order) => {
        if (order.orderType == "LIMIT") {
            let pinnedPriceTargets = window.TradingApp.Firestore.getPinnedTargets(symbol);
            if (pinnedPriceTargets.includes(order.price)) {
                window.TradingApp.Firestore.logInfo("cannot adjust pinned price target for " + symbol);
                return false;
            }
        }
        return true;
    };
    const checkRuleForTimeSinceEntry = (symbol) => {
        let secondsSinceEntry = window.TradingApp.AutoTrader.getEntryTimeFromNowInSeconds(symbol);
        let remainingSeconds = window.TradingApp.AutoTrader.getRemainingCoolDownInSeconds(symbol);
        let secondsSinceMarketOpen = window.TradingApp.Helper.getSecondsSinceMarketOpen(new Date());
        if (remainingSeconds > 0 && secondsSinceMarketOpen < 60 * 15) {
            window.TradingApp.Firestore.logInfo(`cannot adjust exit order for ${symbol} within first 5 minutes before 6:45 AM, ${secondsSinceEntry} seconds so far, ${remainingSeconds} to go`);
            return false;
        }
        return true;
    };

    return {
        getProfitTargets,
        checkRulesForAdjustingOrders,
        isTargetAtLeastHalfOpenRange
    };
})();