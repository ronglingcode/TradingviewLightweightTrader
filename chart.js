var chart = LightweightCharts.createChart(
    document.getElementById("chart"), 
    window.TradingApp_Settings_Tradingview.chartSettings
);

var candleSeries = chart.addCandlestickSeries(window.TradingApp_Settings_Tradingview.candlestickSeriesSettings);

function myClickHandler(param) {
    if (!param.point) {
        return;
    }

    console.log(`Click at ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
    console.log(param.time)
}

chart.subscribeClick(myClickHandler);

function myKeyDownHandler(param) {
    console.log(param)
}

document.getElementById("chart").addEventListener('keydown', myKeyDownHandler);

function myCrosshairMoveHandler(param) {
    console.log(param);
    if (!param.point) {
        return;
    }

    console.log(`Crosshair moved to ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
}

chart.subscribeClick(myCrosshairMoveHandler);
let openingCandle;
let candles = window.TradingApp_TOS.getSamplePriceHistory();
for(let i = 0;i<candles.length;i++){
    let d = new Date(candles[i].time * 1000);
    // UTC 22:30 is market open time
    if (d.getHours() == 22 && d.getMinutes() == 30) {
        openingCandle = candles[i];
    }
}
console.log('opening candle');
console.log(openingCandle);

var openPriceLine = {
    price: openingCandle.open,
    color: 'blue',
    lineWidth: 2,
    lineStyle: LightweightCharts.LineStyle.Solid,
    axisLabelVisible: true
//    title: 'open price',
};

var openHighPriceLine = {
    price: openingCandle.high,
    color: 'green',
    lineWidth: 2,
    lineStyle: LightweightCharts.LineStyle.Solid,
    axisLabelVisible: true
};
var openLowPriceLine = {
    price: openingCandle.high,
    color: 'green',
    lineWidth: 2,
    lineStyle: LightweightCharts.LineStyle.Solid,
    axisLabelVisible: true
};

candleSeries.setData(candles);
candleSeries.createPriceLine(openPriceLine);
candleSeries.createPriceLine(openHighPriceLine);
candleSeries.createPriceLine(openLowPriceLine);
let lastCandle = candles[candles.length - 1];
let lastCandleClose = lastCandle.close;

setInterval(function(){
    lastCandle.close = lastCandleClose + Math.random() - 0.5;
    lastCandle.high = Math.max(lastCandle.high, lastCandle.close);
    lastCandle.low = Math.min(lastCandle.low, lastCandle.close);
    candleSeries.update(lastCandle);
}, 200);