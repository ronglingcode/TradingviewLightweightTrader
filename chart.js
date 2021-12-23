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
    if (!param.point) {
        return;
    }

    console.log(`Crosshair moved to ${param.point.x}, ${param.point.y}. The time is ${param.time}.`);
}

chart.subscribeClick(myCrosshairMoveHandler);

candleSeries.setData(SampleData);
