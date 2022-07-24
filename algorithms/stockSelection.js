window.TradingApp.Algo.StockSelection = (function () {
    const checkRuleForLowFloat = async (symbol) => {
        let fundamental = await window.TradingApp.TOS.getFundamentals(symbol);
        return fundamental.marketCapFloat > 100; // should be more than $100 million
    };
    const createWatchlist = async () => {
        let currentDay = window.TradingApp.Settings.currentDay;
        let bestStocksToTradeToday = window.TradingData.StockSelection[currentDay.toLocaleDateString()];
        let nonShortableStocks = ['GME'];
        let stocksNotGoodForDayTrading = [];
        let stocks = [];
        for (let i = 0; i < bestStocksToTradeToday.length; i++) {
            let stock = bestStocksToTradeToday[i];
            let symbol = stock.symbol;
            let skipMessage = `skip ${symbol} because `;
            if (nonShortableStocks.includes(symbol)) {
                console.log(`${skipMessage}it's not shortable, it trades differently than regular stocks.`);
                continue;
            }
            if (stocksNotGoodForDayTrading.includes(symbol)) {
                console.log(`${skipMessage}it's not good for day trading, even with news, it trades poorly in the past.`);
                continue;
            }
            if (!stock.news) {
                console.log(`${skipMessage}has no news.`);
                continue;
            }

            let passed = await checkRuleForLowFloat(symbol);
            if (!passed) {
                console.log(`${skipMessage}market cap float is too low.`);
                continue;
            }

            let candidate = window.TradingApp.StockCandidates[symbol];
            candidate.symbol = symbol;
            stocks.push(candidate);
        }
        console.log(stocks);
        return stocks;
    };

    return {
        createWatchlist,
    };
})();