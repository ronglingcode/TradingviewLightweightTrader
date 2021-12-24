window.TradingApp.DB = (function () {
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

    const initialize = () => {
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

    };

    return {
        initialize,
        candles,
        vwap,
        openHigh3R,
        openHigh2R,
        openHigh1R,
        openHigh,
        openPrice,
        openLow,
        openLow1R,
        openLow2R,
        openLow3R

    }
})();