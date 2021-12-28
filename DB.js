window.TradingApp.DB = (function () {
    let dataBySymbol = {};

    const jsDateToUTC = (jsDateObj) => {
        return Date.UTC(jsDateObj.getFullYear(), jsDateObj.getMonth(), jsDateObj.getDate(), jsDateObj.getHours(), jsDateObj.getMinutes(), jsDateObj.getSeconds(), jsDateObj.getMilliseconds()) / 1000;
    };
    const isMarketOpenTime = (jsDatdeObj) => {
        let d = jsDatdeObj;
        return d.getFullYear() == window.TradingApp.Settings.currentDay.getFullYear() &&
            d.getMonth() == window.TradingApp.Settings.currentDay.getMonth() &&
            d.getDate() == window.TradingApp.Settings.currentDay.getDate() &&
            d.getHours() == 6 && d.getMinutes() == 30;
    };

    const createOpeningCandle = (candle) => {
        let range = candle.high - candle.low;
        return {
            high3R: candle.high + range * 3,
            high2R: candle.high + range * 2,
            high1R: candle.high + range,
            low1R: candle.low - range,
            low2R: candle.low - range * 2,
            low3R: candle.low - range * 3,
            ...candle
        };
    };

    const drawOpenRangeLines = (openingCandle) => {
        let symbol = openingCandle.symbol;
        window.TradingApp.Indicators.openRangeBreakoutPriceLines(openingCandle).forEach(priceLine => {
            window.TradingApp.Main.widgets[symbol].candleSeries.createPriceLine(priceLine);
        });
    };

    const initialize = (symbol, priceHistory) => {
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
        let orbArea = [];
        let highOfDay = 0;
        let lowOfDay = 99999999;
        let premktHigh = 0;
        let premktLow = 99999999;

        data = priceHistory.candles;
        if (!data) {
            console.log("no price history");
            console.log(priceHistory);
        }
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            let d = new Date(element.datetime);
            let newD = jsDateToUTC(d);
            let newCandle = {
                symbol: symbol,
                time: newD,
                open: element.open,
                high: element.high,
                low: element.low,
                close: element.close,
                volume: element.volume
            };
            candles.push(newCandle);
            volumes.push({ time: newD, value: element.volume });

            // skip previous day's data, we are missing the 10PM - midnight data anyway
            if (d.getFullYear() < window.TradingApp.Settings.currentDay.getFullYear() ||
                d.getMonth() < window.TradingApp.Settings.currentDay.getMonth() ||
                d.getDate() < window.TradingApp.Settings.currentDay.getDate()) {
                continue;
            }
            if (d < window.TradingApp.Settings.marketOpenTime) {
                // update pre-market indicators
                premktLow = Math.min(premktLow, element.low);
                premktHigh = Math.max(premktHigh, element.high);
            } else {
                // update in-market indicators
                lowOfDay = Math.min(lowOfDay, element.low);
                highOfDay = Math.max(highOfDay, element.high);
            }
            if (isMarketOpenTime(d) && i != data.length - 1) {
                // only set opening candle when it's the not last candle
                // meaning the opening candle is closed
                openingCandle = createOpeningCandle(newCandle);
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
                addOrbAreaCandle(newD, orbArea, openingCandle);
            }

            totalVolume += element.volume;
            totalTradingAmount += (element.volume * element.close);

            vwap.push({
                time: newD,
                value: totalTradingAmount / totalVolume
            });
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
            volumes: volumes,
            orbArea: orbArea,
            highOfDay: highOfDay,
            lowOfDay: lowOfDay,
            premktHigh: premktHigh,
            premktLow: premktLow
        };

        window.TradingApp.Main.widgets[symbol].volumeSeries.setData(volumes);
        window.TradingApp.Main.widgets[symbol].vwapSeries.setData(vwap);
        window.TradingApp.Main.widgets[symbol].candleSeries.setData(candles);
        window.TradingApp.Main.widgets[symbol].orbSeries.setData(orbArea);

        if (openingCandle) {
            drawOpenRangeLines(openingCandle);
        }
    };

    const updateFromTimeSale = (timesale) => {
        let globalDatabySymbol = window.TradingApp.DB.dataBySymbol;
        let symbol = timesale.symbol;
        if (!(symbol in globalDatabySymbol)) {
            console.log(`${symbol} not found in dataBySymbol`);
            return;
        }
        window.TradingApp.Chart.updateUI(symbol, "currentPrice", timesale.lastPrice);

        let oneMinuteBucket = new Date(timesale.tradeTime);
        oneMinuteBucket.setSeconds(0, 0);
        let newTime = jsDateToUTC(oneMinuteBucket);
        let globalData = window.TradingApp.DB.dataBySymbol[symbol];
        globalData.totalVolume += timesale.lastSize;
        globalData.totalTradingAmount += (timesale.lastPrice * timesale.lastSize);
        let newVwapValue = globalData.totalTradingAmount / globalData.totalVolume;
        let lastCandle = globalData.candles[globalData.candles.length - 1];
        let lastVolume = globalData.volumes[globalData.volumes.length - 1];
        let lastVwap = globalData.vwap[globalData.vwap.length - 1];
        if (oneMinuteBucket < window.TradingApp.Settings.marketOpenTime) {
            // update pre-market indicators
            if (timesale.lastPrice > globalData.premktHigh) {
                globalData.premktHigh = timesale.lastPrice;
            }
            if (timesale.lastPrice < globalData.premktLow) {
                globalData.premktLow = timesale.lastPrice;
            }
        } else {
            // update in-market indicators
            if (timesale.lastPrice > globalData.highOfDay) {
                globalData.highOfDay = timesale.lastPrice;
            }
            if (timesale.lastPrice < globalData.lowOfDay) {
                globalData.lowOfDay = timesale.lastPrice;
            }
        }
        if (newTime == lastCandle.time) {
            // update current candle
            lastVolume.value += timesale.lastSize;
            if (timesale.lastPrice > lastCandle.high) {
                lastCandle.high = timesale.lastPrice;
            } else if (timesale.lastPrice < lastCandle.low) {
                lastCandle.low = timesale.lastPrice;
            }
            lastCandle.close = timesale.lastPrice;
            lastCandle.volume += lastCandle.lastSize;
            lastVwap.value = newVwapValue;
        } else {
            // moved to a new one minute
            // handle newly closed candle
            let newlyClosedCandle = lastCandle;
            if (isMarketOpenTime(new Date(newlyClosedCandle.time))) {
                globalData.openingCandle = createOpeningCandle(newlyClosedCandle);
                drawOpenRangeLines(globalData.openingCandle);
                addOrbAreaCandle(newlyClosedCandle.time, globalData.orbArea, globalData.openingCandle);
                window.TradingApp.Main.widgets[symbol].orbSeries.update(globalData.orbArea[0]);
            }
            // create a new candle
            lastCandle = {
                symbol: timesale.symbol,
                time: newTime,
                open: timesale.lastPrice,
                high: timesale.lastPrice,
                low: timesale.lastPrice,
                close: timesale.lastPrice
            };
            globalData.candles.push(lastCandle);
            lastVolume = {
                time: newTime,
                value: timesale.lastSize
            };
            globalData.volumes.push(lastVolume);
            lastVwap = {
                time: newTime,
                value: newVwapValue
            };
            globalData.vwap.push(lastVwap);
            addOrbAreaCandle(newTime, globalData.orbArea, globalData.openingCandle);
            window.TradingApp.Main.widgets[symbol].orbSeries.update(globalData.orbArea[globalData.orbArea.length - 1]);
        }
        window.TradingApp.Main.widgets[symbol].candleSeries.update(lastCandle);
        window.TradingApp.Main.widgets[symbol].volumeSeries.update(lastVolume);
        window.TradingApp.Main.widgets[symbol].vwapSeries.update(lastVwap);

    };

    const addOrbAreaCandle = (newTime, orbArea, openingCandle) => {
        if (!openingCandle || !orbArea) {
            return;
        }

        orbArea.push({
            time: newTime,
            open: openingCandle.high,
            high: openingCandle.high,
            low: openingCandle.low,
            close: openingCandle.low
        });
    }
    return {
        initialize,
        updateFromTimeSale,
        dataBySymbol,
        jsDateToUTC
    };
})();