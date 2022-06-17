window.TradingApp.Main = { widgets: {} };
for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
    let symbol = window.TradingApp.Watchlist[i].symbol;
    let chart = window.TradingApp.Chart.createChartWidget(i, window.TradingApp.Watchlist[i]);
    window.TradingApp.Main.widgets[symbol] = chart;
}

for (let i = window.TradingApp.Watchlist.length; i < 4; i++) {
    let container = document.getElementById("chartContainer" + i);
    container.style.display = 'none';
}

window.TradingApp.TOS.initialize().then(() => {
    console.log('initialized');
    // tos initialized with new access token
    // access token expires in 30 minutes, so refresh before that
    setInterval(window.TradingApp.TOS.createAccessToken, 1700 * 1000);

    // open web socket
    window.TradingApp.Streaming.socket = createWebSocket();
    // get price history
    for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
        let symbol = window.TradingApp.Watchlist[i].symbol;
        window.TradingApp.TOS.getPriceHistory(symbol).then(response => response.json()).then(json => {
            // populate current chart
            window.TradingApp.DB.initialize(symbol, json);
            let symbolAccount = window.TradingApp.TOS.filterAccountBySymbol(symbol, window.TradingApp.TOS.initialAccount);
            window.TradingApp.Chart.updateAccountUIStatusForSymbol(symbol, symbolAccount);
        });
    }
});


const createWebSocket = async () => {
    let socketUrl = "wss://" + window.TradingApp.TOS.userPrincipal.streamerInfo["streamerSocketUrl"] + "/ws";
    let websocket = new WebSocket(socketUrl);
    websocket.onmessage = function (messageEvent) {
        let messageData = JSON.parse(messageEvent.data);
        // messageData can have either notify or response
        if (messageData.notify) {
            return;
        } else if (messageData.response) {
            messageData.response.forEach(resp => {
                let service = resp.service;
                if (service === "ADMIN" && resp.command === "LOGIN") {
                    // send more streaming requests
                    let mainRequest = window.TradingApp.Streaming.createMainRequest();
                    websocket.send(JSON.stringify(mainRequest));
                    // the earliest time we can start streaming is right after
                    let stockRequest = window.TradingApp.Streaming.createStockTimeSaleRequest();
                    websocket.send(JSON.stringify(stockRequest));
                    let quoteRequest = window.TradingApp.Streaming.createStockLevelOneQuoteRequest();
                    websocket.send(JSON.stringify(quoteRequest));
                } else {
                    console.log(messageEvent);
                }
            });
        } else if (messageData.data) {
            messageData.data.forEach(element => {
                let service = element.service;
                testData = service;
                let contents = element.content;
                if (["TIMESALE_EQUITY", "TIMESALE_FUTURES"].includes(service)) {
                    contents.forEach(content => {
                        let timeSale = window.TradingApp.Streaming.createTimeSale(content);
                        window.TradingApp.DB.updateFromTimeSale(timeSale);
                    });
                } else if (service === "QUOTE") {
                    contents.forEach(content => {
                        let quote = window.TradingApp.Streaming.createLevelOneQuote(content);
                        window.TradingApp.DB.updateFromLevelOneQuote(quote);
                    });
                } else if (service === "ACCT_ACTIVITY") {
                    contents.forEach(content => {
                        let act = window.TradingApp.Streaming.createAccountActivity(content);
                        //console.log(act);
                        //console.log(act.messageType);
                        if (act && window.TradingApp.Streaming.OrderChangeMessageTypes.includes(act.messageType)) {
                            //let d = new Date();
                            //console.log(d.toISOString());
                            window.TradingApp.Chart.updateAccountUIStatus([act.symbol]);
                        }
                    });
                }
            });
        }
    };

    websocket.onopen = function () {
        request = window.TradingApp.Streaming.createLoginRequest(window.TradingApp.TOS.userPrincipal);
        websocket.send(JSON.stringify(request));
    }
    return websocket;
};

let htmlBody = document.getElementsByTagName("body")[0];
htmlBody.addEventListener("keydown", async function (keyboardEvent) {
    if (!window.TradingApp.State.activeSymbol) {
        console.log("no active symbol, skip");
        return;
    }
    //console.log(keyboardEvent);
    let symbol = window.TradingApp.State.activeSymbol;
    let code = keyboardEvent.code;
    let secondsSinceMarketOpen = window.TradingApp.Helper.getSecondsSinceMarketOpen(new Date());
    console.log(code);

    if (code === "KeyB" || code === "KeyS") {
        // shift key for market order
        // no shift key for breakout order
        if (keyboardEvent.shiftKey) {
            window.TradingApp.TOS.getQuote(symbol).then((quote) => {
                let bid = quote.bidPrice;
                let ask = quote.askPrice;
                window.TradingApp.Firestore.logInfo(`${symbol} quote => bid: ${bid}, ask: ${ask}`);

                let spread = ask - bid;
                let factory = window.TradingApp.OrderFactory;
                let orders = [];
                let stopOutPrice = window.TradingApp.Algo.Breakout.getStopLossPrice(symbol, code);
                let estimatedEntryPrice = 0;
                if (code === "KeyB") {
                    window.TradingApp.Firestore.logInfo("market buy for " + symbol);
                    estimatedEntryPrice = ask + 2 * spread;
                } else if (code === "KeyS") {
                    window.TradingApp.Firestore.logInfo("market sell for " + symbol);
                    estimatedEntryPrice = bid - 2 * spread;
                }
                let checkResult = window.TradingApp.Algo.Breakout.checkRules(symbol, estimatedEntryPrice, stopOutPrice);
                if (checkResult == 0) {
                    return;
                }
                orders = factory.createEntryOrdersWithFixedRisk(
                    symbol, factory.OrderType.MARKET, estimatedEntryPrice, stopOutPrice, "A", 0.35 * checkResult
                );
                orders.forEach(order => {
                    window.TradingApp.TOS.placeOrderBase(order);
                });
            });
        } else {
            // inside first minute, delay ordering
            if (0 < secondsSinceMarketOpen && secondsSinceMarketOpen < 60) {
                let timeoutID = setTimeout(function () {
                    window.TradingApp.Algo.Breakout.prepareBreakoutOrders(symbol, code);
                }, (60 - secondsSinceMarketOpen) * 1000);
                window.TradingApp.Firestore.pendingOrdersBySymbol[symbol] = timeoutID;
                console.log(timeoutID);
            } else {
                window.TradingApp.Algo.Breakout.prepareBreakoutOrders(symbol, code);
            }
        }
    } else if (code === 'Space') {
        window.TradingApp.Chart.clearPriceLines(symbol);
    } else if (code === "KeyC") {
        // shift + c or just c: cancel all
        window.TradingApp.TOS.cancelWorkingOrders(symbol);
        if (window.TradingApp.Firestore.pendingOrdersBySymbol[symbol]) {
            clearTimeout(window.TradingApp.Firestore.pendingOrdersBySymbol[symbol])
        }
        window.TradingApp.Firestore.logInfo("cancel all for " + symbol);
    } else if (code === "KeyF") {
        window.TradingApp.TOS.flattenPosition(symbol);
        window.TradingApp.Firestore.logInfo("flatten for " + symbol);
    } else if (["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0"].includes(code)) {
        window.TradingApp.TOS.adjustOrder(symbol, code);
    } else if (code === 'KeyT') {
        // move stop orders
        window.TradingApp.TOS.adjustStopOrders(symbol);
    }
});