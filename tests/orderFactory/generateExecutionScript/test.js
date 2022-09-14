let testLib = window.TradingApp.Test;
let fixtures = testLib.Fixtures;
let orders = fixtures['tsla'];
let f = window.TradingApp.OrderFactory;

let tradeData = f.extractTradeExecutions(orders);
console.log(tradeData);
let text = "";
tradeData.tradePerMinute.forEach(trade => {
    let price = trade.dollarAmount / trade.quantity;
    if (trade.action === "BUY" || trade.action === "BUY_TO_COVER") {
        text += `AddChartBubble(time == ${trade.secondsSinceOpen}, ${price}, "+${trade.quantity}", createColor(165,214,167), 0);\n`;
    } else {
        text += `AddChartBubble(time == ${trade.secondsSinceOpen}, ${price}, "-${trade.quantity}", createColor(239,154,154), 1);\n`;
    }
});
console.log(text);
