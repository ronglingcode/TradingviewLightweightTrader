window.TradingApp_DB = (function() {
    let candles = [];
    let totalVolume = [];
    let totalTradingAmount = [];
    let vwap = [];

    const initialize = () => {
        data = window.sample_price_history.candles;
        data.forEach(element => {
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
            //totalVolume += element.volume;
            //totalTradingAmount += (element.volume * element.close);
            // TODO: skip early bars and mark current bars

        });
    };
    
    return {
        initialize,
        candles        
    }
})();