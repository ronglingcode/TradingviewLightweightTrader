window.TradingApp.Algo.StockSelection = (function () {
    // don't trade stocks just because it has relative strength/weakness
    // https://sunrisetrading.atlassian.net/browse/TPS-162
    const lowQualityNewsWords = ['relative', 'stronger', 'weaker', 'strength', 'weakness'];
    const checkRuleForLowFloat = async (symbol) => {
        let fundamental = await window.TradingApp.TOS.getFundamentals(symbol);
        if (fundamental.marketCapFloat < 90 && fundamental.marketCapFloat != 0) {
            window.TradingApp.Firestore.logError(`${symbol} market cap float: ${fundamental.marketCapFloat}`);
            return false;
        } else {
            return true;
        }
    };
    const createWatchlist = async () => {
        let currentDay = window.TradingApp.Settings.currentDay;
        let bestStocksToTradeToday = window.TradingData.StockSelection[currentDay.toLocaleDateString()];
        if (window.TradingApp.Profiles.getActiveProfile().settings.indexOnly) {
            bestStocksToTradeToday = window.TradingData.StockSelection['index'];
        }
        let nonShortableStocks = ['GME'];
        let stocksNotGoodForDayTrading = [];
        let stocks = [];
        for (let i = 0; i < bestStocksToTradeToday.length; i++) {
            let stock = bestStocksToTradeToday[i];
            let symbol = stock.symbol;
            let skipMessage = `skip ${symbol} because `;
            if (nonShortableStocks.includes(symbol)) {
                window.TradingApp.Firestore.logError(`${skipMessage}it's not shortable, it trades differently than regular stocks.`);
                continue;
            }
            if (stocksNotGoodForDayTrading.includes(symbol)) {
                window.TradingApp.Firestore.logError(`${skipMessage}it's not good for day trading, even with news, it trades poorly in the past.`);
                continue;
            }

            // only pick the best stocks, stocks with biggest news to trade
            // be selective
            if (!stock.highQualityNews) {
                window.TradingApp.Firestore.logError(`${skipMessage}has no news.`);
                continue;
            }

            let newsWords = stock.highQualityNews.split(" ");
            for (let j = 0; j < newsWords.length; j++) {
                if (lowQualityNewsWords.includes(newsWords[j])) {
                    window.TradingApp.Firestore.logError(`${skipMessage}news contains low quality words: ${lowQualityNewsWords}`);
                    continue;
                }
            }

            let passed = await checkRuleForLowFloat(symbol);
            if (!passed) {
                window.TradingApp.Firestore.logError(`${skipMessage}market cap float is too low.`);
                continue;
            }

            let candidate = window.TradingApp.StockCandidates[symbol];
            candidate.symbol = symbol;
            stocks.push(candidate);
        }
        if (stocks.length > window.TradingApp.Settings.maxStocksCount) {
            alert("Too many stocks to trade, see reasoning in https://sunrisetrading.atlassian.net/browse/TPS-161");
            return stocks.slice(0, 4);
        }
        return stocks;
    };

    return {
        createWatchlist,
    };
})();