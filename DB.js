window.TradingApp.DB = (function () {
    let dataBySymbol = {};
    const initialize = (symbol) => {
        let candles = [];
        let totalVolume = 0;
        let totalTradingAmount = 0;
        let vwap = [];
        let openingCandle;
        let openHigh = [];
        let openLow = [];
        let openPrice = [];
        let openHigh1R = [];
        let openHigh2R = [];
        let openHigh3R = [];
        let openLow1R = [];
        let openLow2R = [];
        let openLow3R = [];
        let volumes = [];

        data = window.sample_price_history.candles;
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            const d = new Date(element.datetime);
            const newD = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) / 1000;
            let newCandle = {
                time: newD,
                open: element.open,
                high: element.high,
                low: element.low,
                close: element.close,
                volume: element.volume
            };
            candles.push(newCandle);
            volumes.push({ time: newD, value: element.volume });

            if (d.getFullYear() == window.TradingApp.Settings.currentDay.getFullYear() &&
                d.getMonth() == window.TradingApp.Settings.currentDay.getMonth() &&
                d.getDate() == window.TradingApp.Settings.currentDay.getDate() &&
                d.getHours() == 6 && d.getMinutes() == 30) {
                let range = newCandle.high - newCandle.low;
                openingCandle = {
                    high3R: newCandle.high + range * 3,
                    high2R: newCandle.high + range * 2,
                    high1R: newCandle.high + range,
                    low1R: newCandle.low - range,
                    low2R: newCandle.low - range * 2,
                    low3R: newCandle.low - range * 3,
                    ...newCandle
                }
            }
            if (openingCandle) {
                openHigh.push({
                    time: newD,
                    value: openingCandle.high
                });
                openHigh3R.push({ time: newD, value: openingCandle.high3R });
                openHigh2R.push({ time: newD, value: openingCandle.high2R });
                openHigh1R.push({ time: newD, value: openingCandle.high1R });
                openHigh.push({ time: newD, value: openingCandle.high });
                openPrice.push({ time: newD, value: openingCandle.open });
                openLow.push({ time: newD, value: openingCandle.low });
                openLow1R.push({ time: newD, value: openingCandle.low1R });
                openLow2R.push({ time: newD, value: openingCandle.low2R });
                openLow3R.push({ time: newD, value: openingCandle.low3R });
            }

            if (element.datetime > 1640233560000) {
                totalVolume += element.volume;
                totalTradingAmount += (element.volume * element.close);

                vwap.push({
                    time: newD,
                    value: totalTradingAmount / totalVolume
                });
            }
        }

        dataBySymbol[symbol] = {
            candles: candles,
            totalVolume: totalVolume,
            totalTradingAmount: totalTradingAmount,
            vwap: vwap,
            openingCandle: openingCandle,
            openHigh: openHigh,
            openLow: openLow,
            openPrice: openPrice,
            openHigh1R: openHigh1R,
            openHigh2R: openHigh2R,
            openHigh3R: openHigh3R,
            openLow1R: openLow1R,
            openLow2R: openLow2R,
            openLow3R: openLow3R,
            volumes: volumes
        };
    };

    const updateFromTimeSale = (timesale) => {
        console.log(timesale);
        let symbol = timesale.symbol;
        if (!(symbol in dataBySymbol)) {
            console.log(`${symbol} not found in dataBySymbol`);
            return;
        }
        let oneMinuteBucket = timesale.tradeDatetime;
        oneMinuteBucket.setSeconds(0, 0);

        dataBySymbol[symbol].totalVolume += timesale.lastSize;
        dataBySymbol[symbol].totalTradingAmount += (timesale.lastPrice * timesale.lastSize);
        let newVwapValue = dataBySymbol[symbol].totalTradingAmount / dataBySymbol[symbol].totalVolume;
        if (oneMinuteBucket == lastCandle.time) {
            // update current candle
            let lastCandle = dataBySymbol[symbol].candles[dataBySymbol[symbol].candles.length - 1];
            let lastVolume = dataBySymbol[symbol].volume[dataBySymbol[symbol].volume.length - 1];
            lastVolume.value += timesale.lastSize;
            if (timesale.lastPrice > lastCandle.high) {
                lastCandle.high = timesale.lastPrice;
            } else if (timesale.lastPrice < lastCandle.low) {
                lastCandle.low = timesale.lastPrice;
            }
            lastCandle.close = timesale.lastPrice;
            lastCandle.volume += lastCandle.lastSize;
            let lastVwap = dataBySymbol[symbol].vwap[dataBySymbol[symbol].vwap.length - 1];
            lastVwap.value = newVwapValue;
        } else {
            // create a new candle
            dataBySymbol[symbol].candles.push({
                open: timesale.lastPrice,
                high: timesale.lastPrice,
                low: timesale.lastPrice,
                close: timesale.lastPrice,
                time: oneMinuteBucket
            });
            dataBySymbol[symbol].volume.push({
                time: oneMinuteBucket,
                value: timesale.lastSize
            });
            dataBySymbol[symbol].vwap.push({
                time: oneMinuteBucket,
                value: newVwapValue
            });
        }
    };

    return {
        initialize,
        updateFromTimeSale,
        dataBySymbol
    };
})();