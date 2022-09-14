let testLib = window.TradingApp.Test;
let fixtures = testLib.Fixtures;
let orders = fixtures['filled_oto_oco'];
let f = window.TradingApp.OrderFactory;

let pairs = f.extractWorkingExitPairs(orders);
console.log(pairs[0]['STOP']);
console.log(pairs[0]['LIMIT']);