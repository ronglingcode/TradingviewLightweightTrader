window.TradingApp_TOS = (function() {
    const getPriceHistory = (text) => {
        console.log('get price history');
        let url = "https://api.tdameritrade.com/v1/marketdata/SPY/pricehistory?apikey={client_id}&frequencyType=minute&frequency=1&startDate=1640010600000&endDate=1640297198351";
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(data) {
            let candles = [];
            data.candles.forEach(element => {
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
            });
            return candles;
        }).catch(function() {
            console.log("Booo");
        });
    };

    const getSamplePriceHistory = () => {
        data = window.sample_price_history.candles;
        let candles = [];
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
        });
        return candles;
    };
  
    return {
        getPriceHistory,
        getSamplePriceHistory
    }
})();