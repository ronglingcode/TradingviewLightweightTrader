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
        let stockSettings = window.TradingApp.Watchlist[symbol];
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

    const getTempProfitTargets = (entryPrice, isLong) => {
        let delta = isLong ? 1 : -1;
        return [
            { target: entryPrice + delta, quantity: 5 },
            { target: entryPrice + 2 * delta, quantity: 5 },
            { target: entryPrice + 3 * delta, quantity: 5 },
        ];
    };

    const getDefaultProfitTargets = (symbol, remainingPercentage, basePrice, stopOut) => {
        /* old default:
         * 1.0 15%
         * 2.0 45%
         * 3.0 22%
         * 4.0 18%
         * new default:
         * 1.0 12.5%
         * 1.5 12.5%
         * 1.9 12.5%
         * 1.9 12.5%
         * 2.1 12.5%
         * 2.1 12.5%
         * 3.0 12.5%
         * 4.0 12.5%
        */
        let rrr = [1.0, 1.5, 1.9, 1.9, 2.1, 2.1, 3, 4];
        let percentage = [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125];
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

        //window.TradingApp.Firestore.addPinnedTarget(symbol, profitTargets[1].price);
        return profitTargets;
    };
    const checkRulesForAdjustingExitOrders = (symbol, order, newPrice) => {
        if (!window.TradingApp.Profiles.getActiveProfile().settings.exitRulesEnabled) {
            return true;
        }
        let symbolData = window.TradingApp.DB.dataBySymbol[symbol];
        let orderInstruction = order.orderLegCollection[0].instruction;
        let isBuyOrder = window.TradingApp.OrderFactory.isBuyOrder(orderInstruction);
        // allow increasing profit targets
        if (newPrice && order.orderType == 'LIMIT') {
            let oldPrice = order.price;
            // isBuyOrder means it is buy to cover, it's a short sell. 
            if ((isBuyOrder && newPrice < oldPrice) ||
                (!isBuyOrder && newPrice > oldPrice)) {
                window.TradingApp.Firestore.logInfo(`increasing profit target new price: ${newPrice}, old price: ${oldPrice}`);
                return true;
            }
        }
        let trend = window.TradingApp.AutoTrader.getMarketTrendType();
        // on range or trend days, allow first exit adjustment without restrictions        
        let widget = window.TradingApp.Main.widgets[symbol];
        let total = widget.exitOrderPairs.length;
        if (total == 8 || total == 16) {
            window.TradingApp.Firestore.logInfo(`allow for first order`);
            return true;
        }
        
        if (!checkRuleForMinimumProfit(symbol, order, isBuyOrder, symbolData))
            return false;

        if (!checkRuleForPinnedPriceTargets(symbol, order))
            return false;

        if (!checkRuleForTimeSinceEntry(symbol))
            return false;

        return true;
    };
    const checkRulesForHalfOut = (symbol, usageKey, action) => {
        if (!checkForMinimumPositionSize(symbol)) {
            return false;
        }
        if (!checkUsageAllowedOnce(symbol, usageKey, action)) {
            return false;
        }
        return true;
    };
    const checkUsageAllowedOnce = (symbol, usageKey, action) => {
        let allowed = window.TradingApp.Firestore.usageAllowedOnce(symbol, usageKey);
        if (!allowed) {
            window.TradingApp.Firestore.logError(`${symbol}: Rules blocked for ${action} `);
        }
        return allowed;
    };
    const checkForMinimumPositionSize = (symbol) => {
        // this rule applies to both day trading and indexOnly profile
        let riskMultiple = window.TradingApp.Models.Account.getRiskMultiples(symbol);
        if (riskMultiple < 45) {
            window.TradingApp.Firestore.logInfo(`${symbol}'s position is less than half left.`);
            return false;
        }
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
        getTempProfitTargets,
        checkRulesForAdjustingExitOrders,
        checkRulesForHalfOut,
        isTargetAtLeastHalfOpenRange
    };
})();