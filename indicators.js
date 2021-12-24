window.TradingApp.Indicators = (function () {
    const redColor = '#ff4444';
    const greenColor = '#00c851';
    const blueColor = '#304ffe';
    const openRangeBreakoutPriceLines = (openingCandle) => {
        let high = openingCandle.high;
        let low = openingCandle.low;
        let range = high - low;
        let priceLines = [];

        const commonPriceLineSettings = {
            lineWidth: 2,
            lineStyle: LightweightCharts.LineStyle.Solid,
            axisLabelVisible: true
            // title: 'open price',
        };
        priceLines.push({
            price: openingCandle.open,
            color: blueColor,
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
            axisLabelVisible: false
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

    const createOpenRangeSeries = (chart) => {
        // add from low to high: low3R, low2R, low1R, low, open, high, high1R, ...
        let lineSeriesList = []
        const lineSettings = {
            lineWidth: 1,
            crosshairMarkerVisible: false,
            priceLineVisible: false
        }
        for (let i = 0; i < 3; i++) {
            let s = chart.addLineSeries({
                color: redColor,
                lineStyle: LightweightCharts.LineStyle.LargeDashed,
                ...lineSettings
            });
            lineSeriesList.push(s);
        }
        let colors = [redColor, blueColor, greenColor];
        colors.forEach(color => {
            lineSeriesList.push(chart.addLineSeries({
                color: color,
                lineStyle: LightweightCharts.LineStyle.Solid,
                ...lineSettings
            }));
        });
        for (let i = 0; i < 3; i++) {
            let s = chart.addLineSeries({
                color: greenColor,
                lineStyle: LightweightCharts.LineStyle.LargeDashed,
                ...lineSettings
            });
            lineSeriesList.push(s);
        }
        return lineSeriesList;
    };

    return {
        openRangeBreakoutPriceLines,
        createOpenRangeSeries
    }
})();