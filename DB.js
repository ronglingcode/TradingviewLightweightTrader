window.TradingApp.DB = (function () {
    let candles = [];
    let totalVolume = 0;
    let totalTradingAmount = 0;
    let vwap = [];

    const initialize = () => {
        data = window.sample_price_history.candles;
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            const d = new Date(element.datetime);
            const newD = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) / 1000;
            candles.push({
                time: newD,
                open: element.open,
                high: element.high,
                low: element.low,
                close: element.close,
                volume: element.volume
            });

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
        vwap
    }
})();