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
            lineWidth: 2,
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
        let lineSeriesList = [];
        const lineSettings = window.TradingApp.ChartSettings.openRangeLineSettings;
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

    const drawIndicatorsForNewlyClosedCandle = (end, candles, widget) => {
        // only check within first hour after market open
        if (candles[end].minutesSinceMarketOpen < 0 ||
            candles[end].minutesSinceMarketOpen > 60) {
            return;
        }
        drawHigherLows(end, candles, widget);
        drawLowerHighs(end, candles, widget);
        drawFirstTriangleConsolidation(end, candles, widget);
    }

    const drawPreMarketHigh = (price, widget) => {
        if (widget.premktHigh) {
            widget.candleSeries.removePriceLine(widget.premktHigh);
        }
        widget.premktHigh = window.TradingApp.Chart.createPriceLine(widget.candleSeries, price, "pm-hi", "black", 2, true);
    };

    const populatePreMarketLineSeries = (time, high, low, widget) => {
        if (widget.premktHigh) {
            widget.premktHigh.update({ time: time, value: high });
        }
        if (widget.premktLow) {
            widget.premktLow.update({ time: time, value: low });
        }
    };

    const resetPreMarketHighLineSeries = (widget) => {
        if (widget.premktHigh) {
            widget.chart.removeSeries(widget.premktHigh);
        }
        widget.premktHigh = widget.chart.addLineSeries(window.TradingApp.ChartSettings.preMarketLineSettings);
    };

    const resetPreMarketLowLineSeries = (widget) => {
        if (widget.premktLow) {
            widget.chart.removeSeries(widget.premktLow);
        }
        widget.premktLow = widget.chart.addLineSeries({
            ...window.TradingApp.ChartSettings.preMarketLineSettings,
        });
    }

    const drawPreMarketLow = (price, widget) => {
        if (widget.premktLow) {
            widget.candleSeries.removePriceLine(widget.premktLow);
        }
        widget.premktLow = window.TradingApp.Chart.createPriceLine(widget.candleSeries, price, "pm-lo", "black", 2, true);
    };

    const drawHigherLows = (end, candles, widget) => {
        let threshold = 3;
        let count = 0;
        let start = end;
        while (start - 1 >= 0) {
            if (candles[start - 1].minutesSinceMarketOpen >= 0 &&
                candles[start].low > candles[start - 1].low) {
                count++;
            } else {
                break;
            }
            start--;
        }
        if (count === threshold) {
            // draw first time, start from beginning.
            widget.higherLowSeries = widget.chart.addLineSeries({
                ...window.TradingApp.ChartSettings.cloudLineSettings,
                color: window.TradingApp.ChartSettings.defaultGreen
            });
            for (let i = start; i <= end; i++) {
                widget.higherLowSeries.update({
                    time: candles[i].time,
                    value: candles[i].low
                });
            }
        } else if (count > threshold) {
            widget.higherLowSeries.update({
                time: candles[end].time,
                value: candles[end].low
            });
        }
    };

    const drawLowerHighs = (end, candles, widget) => {
        let threshold = 3;
        let count = 0;
        let start = end;
        while (start - 1 >= 0) {
            if (candles[start - 1].minutesSinceMarketOpen >= 0 &&
                candles[start].high < candles[start - 1].high) {
                count++;
            } else {
                break;
            }
            start--;
        }
        if (count === threshold) {
            // draw first time, start from beginning.
            widget.lowerHighSeries = widget.chart.addLineSeries({
                ...window.TradingApp.ChartSettings.cloudLineSettings,
                color: window.TradingApp.ChartSettings.defaultRed
            });
            for (let i = start; i <= end; i++) {
                widget.lowerHighSeries.update({
                    time: candles[i].time,
                    value: candles[i].high
                });
            }
        } else if (count > threshold) {
            widget.lowerHighSeries.update({
                time: candles[end].time,
                value: candles[end].high
            });
        }
    };

    const drawFirstTriangleConsolidation = (end, candles, widget) => {
        if (widget.firstTriangleConsolidationUpper) {
            // already had a triangle consolidation
            return;
        }
        if (end - 1 < 0) {
            return;
        }
        let prev = candles[end - 1];
        let current = candles[end];
        if (prev.minutesSinceMarketOpen >= 0 &&
            current.high <= prev.high &&
            current.low >= prev.low) {
            widget.firstTriangleConsolidationUpper = widget.chart.addLineSeries({
                ...window.TradingApp.ChartSettings.cloudLineSettings,
                lineStyle: LightweightCharts.LineStyle.Solid
            });
            widget.firstTriangleConsolidationUpper.setData([
                { time: prev.time, value: prev.high },
                { time: current.time, value: current.high }
            ]);
            widget.firstTriangleConsolidationLower = widget.chart.addLineSeries({
                ...window.TradingApp.ChartSettings.cloudLineSettings,
                color: 'black',
                lineStyle: LightweightCharts.LineStyle.Solid
            });
            widget.firstTriangleConsolidationLower.setData([
                { time: prev.time, value: prev.low },
                { time: current.time, value: current.low }
            ]);
        }
    };

    const runPostCandleCloseIndicators = (newlyClosedCandle) => {
        let localTime = window.TradingApp.Helper.tvTimestampToLocalJsDate(newlyClosedCandle.time);
        checkVwapBeforeOpen(newlyClosedCandle, localTime);
    };
    const checkVwapBeforeOpen = (newlyClosedCandle, localTime) => {
        // check when 6:29 AM is closed.
    };

    return {
        openRangeBreakoutPriceLines,
        createOpenRangeSeries,
        drawIndicatorsForNewlyClosedCandle,
        drawPreMarketHigh,
        drawPreMarketLow,
        populatePreMarketLineSeries,
        resetPreMarketHighLineSeries,
        resetPreMarketLowLineSeries,
        runPostCandleCloseIndicators
    }
})();