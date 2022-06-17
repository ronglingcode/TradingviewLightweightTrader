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
    const getTypicalPrice = (candle) => {
        return (candle.high + candle.low + candle.close) / 3;
    };

    const initialize = (symbol, priceHistory) => {
        let candles = [];
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
        let totalVolume = 0;
        let totalTradingAmount = 0;
        let vwapCorrectionVolumeSum = 0;
        let vwapCorrectionTradingAmount = 0;
        let vwapCorrected = false;
        for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
            if (window.TradingApp.Watchlist[i].symbol === symbol) {
                let item = window.TradingApp.Watchlist[i];
                vwapCorrectionVolumeSum = item.volumeSum;
                vwapCorrectionTradingAmount = item.tradingSum;
                premktHigh = item.premktHigh;
                premktLow = item.premktLow;
                break;
            }
        }

        data = priceHistory.candles;
        if (!data) {
            console.log("no price history");
            console.log(priceHistory);
        }
        data.sort(function (a, b) { return a.datetime - b.datetime });
        let prevDatetime = 0;
        let widget = window.TradingApp.Main.widgets[symbol];
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            // avoid duplicates
            if (prevDatetime === element.datetime) {
                continue;
            } else {
                prevDatetime = element.datetime;
            }
            let d = new Date(element.datetime);
            if (d < window.TradingApp.Settings.dtStartTime)
                continue;

            let newD = jsDateToUTC(d);
            let newCandle = {
                symbol: symbol,
                time: newD,
                open: element.open,
                high: element.high,
                low: element.low,
                close: element.close,
                volume: element.volume,
                minutesSinceMarketOpen: window.TradingApp.Helper.getMinutesSinceMarketOpen(d),
                firstTradeTime: element.datetime
            };
            candles.push(newCandle);
            volumes.push({ time: newD, value: element.volume });

            if (newCandle.minutesSinceMarketOpen < 0) {
                // update pre-market indicators
                if (element.low < premktLow) {
                    premktLow = Math.floor(element.low * 100) / 100;
                    window.TradingApp.Indicators.resetPreMarketLowLineSeries(widget);
                }
                if (element.high > premktHigh) {
                    premktHigh = Math.ceil(element.high * 100) / 100;
                    window.TradingApp.Indicators.resetPreMarketHighLineSeries(widget);
                }
                if (!vwapCorrected && vwapCorrectionTradingAmount > 0 && vwapCorrectionVolumeSum > 0) {
                    if (newCandle.minutesSinceMarketOpen >= -30) {
                        totalTradingAmount = vwapCorrectionTradingAmount;
                        totalVolume = vwapCorrectionVolumeSum;
                        vwapCorrected = true;
                        console.log('vwap corrected');
                    }
                }
            } else {
                // update in-market indicators
                if (element.low < lowOfDay) {
                    lowOfDay = Math.floor(element.low * 100) / 100;
                }
                if (element.high > highOfDay) {
                    highOfDay = Math.ceil(element.high * 100) / 100;
                }
            }
            if (isMarketOpenTime(d) && i != data.length - 1) {
                // only set opening candle when it's the not last candle
                // meaning the opening candle is closed
                openingCandle = createOpeningCandle(newCandle);
            }
            if (openingCandle) {
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
            totalTradingAmount += (element.volume * getTypicalPrice(element));

            vwap.push({
                time: newD,
                value: totalTradingAmount / totalVolume
            });
            window.TradingApp.Indicators.populatePreMarketLineSeries(newD, premktHigh, premktLow, window.TradingApp.Main.widgets[symbol]);

            // simulate auto trader
            if (isMarketOpenTime(d)) {
                // first minute just closed
                window.TradingApp.AutoTrader.onFirstMinuteClose(symbol, newCandle, vwap.slice(-1)[0].value);
            } else if (newCandle.minutesSinceMarketOpen === 1) {
                // second minute just closed
                window.TradingApp.AutoTrader.onSecondMinuteClose(symbol, candles[candles.length - 2], newCandle);
            } else if (newCandle.minutesSinceMarketOpen === 2) {
                // third minute just closed
                window.TradingApp.AutoTrader.onThirdMinuteClose(symbol, candles[candles.length - 3], candles[candles.length - 2], newCandle);
            }
        }

        window.TradingApp.Main.widgets[symbol].volumeSeries.setData(volumes);
        window.TradingApp.Main.widgets[symbol].vwapSeries.setData(vwap);
        window.TradingApp.Main.widgets[symbol].candleSeries.setData(candles);
        window.TradingApp.Main.widgets[symbol].orbSeries.setData(orbArea);

        window.TradingApp.Chart.updateUI(symbol, "hod", highOfDay);
        window.TradingApp.Chart.updateUI(symbol, "lod", lowOfDay);
        window.TradingApp.Watchlist.forEach(stock => {
            if (stock.symbol === symbol) {
                if (stock.boxup)
                    window.TradingApp.Chart.createPriceLine(window.TradingApp.Main.widgets[symbol].candleSeries, stock.boxup, "box up", "#16A085", 2);
                if (stock.boxdown)
                    window.TradingApp.Chart.createPriceLine(window.TradingApp.Main.widgets[symbol].candleSeries, stock.boxdown, "box down", "red", 2);
            }
        });

        if (openingCandle) {
            if (window.TradingApp.Settings.drawIndicatorsAsSeries) {
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[0].setData(openLow3R);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[1].setData(openLow2R);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[2].setData(openLow1R);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[3].setData(openLow);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[4].setData(openPrice);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[5].setData(openHigh);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[6].setData(openHigh1R);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[7].setData(openHigh2R);
                window.TradingApp.Main.widgets[symbol].openRangeSeriesList[8].setData(openHigh3R);
            } else {
                drawOpenRangeLines(openingCandle);
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
            volumes: volumes,
            orbArea: orbArea,
            highOfDay: highOfDay,
            lowOfDay: lowOfDay,
            premktHigh: premktHigh,
            premktLow: premktLow,
            bid: 0,
            ask: 0
        };

        for (let i = 0; i < dataBySymbol[symbol].candles.length; i++) {
            // process newly closed candle
            // skip last candle
            if (i === dataBySymbol[symbol].candles.length - 1) {
                continue;
            }
            window.TradingApp.Indicators.drawIndicatorsForNewlyClosedCandle(
                i, dataBySymbol[symbol].candles, window.TradingApp.Main.widgets[symbol]
            );
        }
        if (!window.TradingApp.Settings.drawIndicatorsAsSeries) {
            window.TradingApp.Indicators.drawPreMarketHigh(dataBySymbol[symbol].premktHigh, window.TradingApp.Main.widgets[symbol]);
            window.TradingApp.Indicators.drawPreMarketLow(dataBySymbol[symbol].premktLow, window.TradingApp.Main.widgets[symbol]);
        }
    };

    const updateFromTimeSale = (timesale) => {
        let globalDatabySymbol = window.TradingApp.DB.dataBySymbol;
        let symbol = timesale.symbol;
        let widget = window.TradingApp.Main.widgets[symbol];
        if (!(symbol in globalDatabySymbol)) {
            console.log(`${symbol} not found in dataBySymbol`);
            return;
        }
        window.TradingApp.Chart.updateUI(symbol, "currentPrice", timesale.lastPrice);

        let oneMinuteBucket = new Date(timesale.tradeTime);
        oneMinuteBucket.setSeconds(0, 0);
        let newTime = jsDateToUTC(oneMinuteBucket);
        let globalData = window.TradingApp.DB.dataBySymbol[symbol];
        if (!globalData) {
            return;
        }
        globalData.totalVolume += timesale.lastSize;
        globalData.totalTradingAmount += (timesale.lastPrice * timesale.lastSize);
        let newVwapValue = globalData.totalTradingAmount / globalData.totalVolume;
        let lastCandle = globalData.candles[globalData.candles.length - 1];
        let lastVolume = globalData.volumes[globalData.volumes.length - 1];
        let lastVwap = globalData.vwap[globalData.vwap.length - 1];
        if (oneMinuteBucket < window.TradingApp.Settings.marketOpenTime) {
            // update pre-market indicators
            if (timesale.lastPrice > globalData.premktHigh) {
                globalData.premktHigh = Math.ceil(timesale.lastPrice * 100) / 100;
                window.TradingApp.Indicators.resetPreMarketHighLineSeries(widget);
            }
            if (timesale.lastPrice < globalData.premktLow) {
                globalData.premktLow = Math.floor(timesale.lastPrice * 100) / 100;
                window.TradingApp.Indicators.resetPreMarketLowLineSeries(widget);
            }
        } else {
            // update in-market indicators
            if (timesale.lastPrice > globalData.highOfDay) {
                globalData.highOfDay = Math.ceil(timesale.lastPrice * 100) / 100;
                window.TradingApp.Chart.updateUI(symbol, "hod", globalData.highOfDay);
            }
            if (timesale.lastPrice < globalData.lowOfDay) {
                globalData.lowOfDay = Math.floor(timesale.lastPrice * 100) / 100;
                window.TradingApp.Chart.updateUI(symbol, "lod", globalData.lowOfDay);
            }
        }

        if (newTime == lastCandle.time) {
            // update current candle
            lastVolume.value += timesale.lastSize;
            if (timesale.tradeTime < lastCandle.firstTradeTime) {
                lastCandle.open = timesale.lastPrice;
                lastCandle.firstTradeTime = timesale.tradeTime;
                window.TradingApp.Firestore.logInfo("received out of order timesale " + symbol + ": " + timesale.tradeTime);
            }
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
            let localJsDate = window.TradingApp.Helper.tvTimestampToLocalJsDate(newlyClosedCandle.time);

            // update Open range price series
            if (isMarketOpenTime(localJsDate)) {
                // first minute just closed, create open range candle data
                globalData.openingCandle = createOpeningCandle(newlyClosedCandle);
                if (!window.TradingApp.Settings.drawIndicatorsAsSeries) {
                    drawOpenRangeLines(globalData.openingCandle);
                } else {
                    let closedCandleTime = newlyClosedCandle.time;
                    addDataAndUpdateChart(closedCandleTime, globalData.openLow3R, { value: globalData.openingCandle.low3R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[0]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openLow2R, { value: globalData.openingCandle.low2R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[1]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openLow1R, { value: globalData.openingCandle.low1R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[2]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openLow, { value: globalData.openingCandle.low }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[3]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openPrice, { value: globalData.openingCandle.open }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[4]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openHigh, { value: globalData.openingCandle.high }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[5]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openHigh1R, { value: globalData.openingCandle.high1R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[6]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openHigh2R, { value: globalData.openingCandle.high2R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[7]);
                    addDataAndUpdateChart(closedCandleTime, globalData.openHigh3R, { value: globalData.openingCandle.high3R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[8]);
                }
            }

            // candle closed after market open
            if (globalData.openingCandle) {
                addDataAndUpdateChart(newTime, globalData.orbArea, {
                    open: globalData.openingCandle.high,
                    high: globalData.openingCandle.high,
                    low: globalData.openingCandle.low,
                    close: globalData.openingCandle.low
                }, window.TradingApp.Main.widgets[symbol].orbSeries);

                if (window.TradingApp.Settings.drawIndicatorsAsSeries) {
                    addDataAndUpdateChart(newTime, globalData.openLow3R, { value: globalData.openingCandle.low3R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[0]);
                    addDataAndUpdateChart(newTime, globalData.openLow2R, { value: globalData.openingCandle.low2R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[1]);
                    addDataAndUpdateChart(newTime, globalData.openLow1R, { value: globalData.openingCandle.low1R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[2]);
                    addDataAndUpdateChart(newTime, globalData.openLow, { value: globalData.openingCandle.low }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[3]);
                    addDataAndUpdateChart(newTime, globalData.openPrice, { value: globalData.openingCandle.open }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[4]);
                    addDataAndUpdateChart(newTime, globalData.openHigh, { value: globalData.openingCandle.high }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[5]);
                    addDataAndUpdateChart(newTime, globalData.openHigh1R, { value: globalData.openingCandle.high1R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[6]);
                    addDataAndUpdateChart(newTime, globalData.openHigh2R, { value: globalData.openingCandle.high2R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[7]);
                    addDataAndUpdateChart(newTime, globalData.openHigh3R, { value: globalData.openingCandle.high3R }, window.TradingApp.Main.widgets[symbol].openRangeSeriesList[8]);
                }
            }

            if (isMarketOpenTime(localJsDate)) {
                // first minute just closed
                window.TradingApp.AutoTrader.onFirstMinuteClose(symbol, newlyClosedCandle, newVwapValue);
            } else if (newlyClosedCandle.minutesSinceMarketOpen === 1) {
                // second minute just closed
                window.TradingApp.AutoTrader.onSecondMinuteClose(symbol, globalData.candles[globalData.candles.length - 2], newlyClosedCandle);
            } else if (newlyClosedCandle.minutesSinceMarketOpen === 2) {
                // third minute just closed
                window.TradingApp.AutoTrader.onThirdMinuteClose(symbol, globalData.candles[globalData.candles.length - 3], globalData.candles[globalData.candles.length - 2], newlyClosedCandle);
            }

            window.TradingApp.Indicators.drawIndicatorsForNewlyClosedCandle(
                globalData.candles.length - 1, globalData.candles, window.TradingApp.Main.widgets[symbol]
            );

            // create a new candle
            lastCandle = {
                symbol: timesale.symbol,
                time: newTime,
                open: timesale.lastPrice,
                high: timesale.lastPrice,
                low: timesale.lastPrice,
                close: timesale.lastPrice,
                minutesSinceMarketOpen: window.TradingApp.Helper.getMinutesSinceMarketOpen(localJsDate),
                firstTradeTime: timesale.tradeTime
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
            if (globalData.orbArea[globalData.orbArea.length - 1])
                window.TradingApp.Main.widgets[symbol].orbSeries.update(globalData.orbArea[globalData.orbArea.length - 1]);
            window.TradingApp.Indicators.populatePreMarketLineSeries(newTime, globalData.premktHigh, globalData.premktLow, widget);

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
    };

    const addDataAndUpdateChart = (newTime, dataArray, newObj, series) => {
        dataArray.push({
            ...newObj,
            time: newTime
        });
        series.update(dataArray.slice(-1)[0]);
    };

    const updateFromLevelOneQuote = (quote) => {
        let symbol = quote.symbol;
        if (quote.bid) {
            window.TradingApp.Chart.updateUI(symbol, "bid", quote.bid);
            window.TradingApp.DB.dataBySymbol[symbol].bid = quote.bid;
        }
        if (quote.ask) {
            window.TradingApp.Chart.updateUI(symbol, "ask", quote.ask);
            window.TradingApp.DB.dataBySymbol[symbol].ask = quote.ask;
        }
        let spread = window.TradingApp.DB.dataBySymbol[symbol].ask - window.TradingApp.DB.dataBySymbol[symbol].bid;
        spread = Math.round(spread * 100) / 100;
        let spreadPercentage = spread * 100 / window.TradingApp.DB.dataBySymbol[symbol].bid;
        spreadPercentage = Math.round(spreadPercentage * 100) / 100;
        window.TradingApp.Chart.updateUI(symbol, "spread", `${spread} (${spreadPercentage}%)`);
    };

    return {
        initialize,
        updateFromTimeSale,
        updateFromLevelOneQuote,
        dataBySymbol,
        jsDateToUTC
    };
})();