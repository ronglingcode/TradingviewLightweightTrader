window.TradingApp.Algo.StockSelection = (function () {
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
            if (!stock.news) {
                window.TradingApp.Firestore.logError(`${skipMessage}has no news.`);
                continue;
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
        return stocks;
    };

    return {
        createWatchlist,
    };
})();