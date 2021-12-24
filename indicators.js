window.TradingApp.Indicators = (function () {
    const openRangeBreakoutPriceLines = (openingCandle) => {
        let high = openingCandle.high;
        let low = openingCandle.low;
        let range = high - low;
        let priceLines = [];
        let redColor = '#ff4444';
        let greenColor = '#00c851';
        const commonPriceLineSettings = {
            lineWidth: 2,
            lineStyle: LightweightCharts.LineStyle.Solid,
            axisLabelVisible: true
            // title: 'open price',
        };
        priceLines.push({
            price: openingCandle.open,
            color: '#304ffe',
            ...commonPriceLineSettings
        });
        priceLines.push({
            price: high,
            color: greenColor,
            ...commonPriceLineSettings
        });
        priceLines.push({
            price: low,
            color: redColor,
            ...commonPriceLineSettings
        });
        const dashLineSettings = {
            lineWidth: 1,
            lineStyle: LightweightCharts.LineStyle.LargeDashed,
            axisLabelVisible: true
            // title: 'open price',
        };
        for (let i = 1; i <= 3; i++) {
            priceLines.push({
                price: high + range * i,
                color: greenColor,
                ...dashLineSettings
            });
            priceLines.push({
                price: low - range * i,
                color: redColor,
                ...dashLineSettings
            });
        }
        return priceLines;
    };

    return {
        openRangeBreakoutPriceLines
    }
})();