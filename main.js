window.TradingApp.Main = { widgets: {} };
for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
    let symbol = window.TradingApp.Watchlist[i].symbol;
    let chart = window.TradingApp.Chart.createChartWidget(i, window.TradingApp.Watchlist[i]);
    window.TradingApp.Main.widgets[symbol] = chart;
}

window.TradingApp.TOS.initialize().then(() => {
    console.log('initialized');
    // tos initialized with new access token
    // open web socket
    window.TradingApp.Streaming.socket = createWebSocket();
    // get price history
    for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
        let symbol = window.TradingApp.Watchlist[i].symbol;
        window.TradingApp.TOS.getPriceHistory(symbol).then(response => response.json()).then(json => {
            // populate current chart
            window.TradingApp.DB.initialize(symbol, json);
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
                } else if (service === "ACCT_ACTIVITY") {
                    contents.forEach(content => {
                        let act = window.TradingApp.Streaming.createAccountActivity(content);
                        if (act && act.messageType === 'OrderFill') {
                            window.TradingApp.Chart.drawFilledPrice(act.symbol);
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
    console.log(code);

    if (code === "KeyB" || code === "KeyS") {
        // shift key for market order
        // no shift key for breakout order
        if (keyboardEvent.shiftKey) {
            window.TradingApp.TOS.getQuote(symbol).then((quote) => {
                let bid = quote.bidPrice;
                let ask = quote.askPrice;
                let spread = ask - bid;
                let factory = window.TradingApp.OrderFactory;
                let orders = [];
                let stopOutPrice = window.TradingApp.Algo.Breakout.getStopLossPrice(symbol, code);
                let estimatedEntryPrice = 0;
                if (code === "KeyB") {
                    console.log("market buy for " + symbol);
                    estimatedEntryPrice = ask + spread;
                } else if (code === "KeyS") {
                    estimatedEntryPrice = bid - spread;
                }
                orders = factory.createEntryOrdersWithFixedRisk(
                    symbol, factory.OrderType.MARKET, estimatedEntryPrice, stopOutPrice, "A", 0.35
                );
                orders.forEach(order => {
                    window.TradingApp.TOS.placeOrderBase(order);
                });
            });
        } else {
            let stopOutPrice = window.TradingApp.Algo.Breakout.getStopLossPrice(symbol, code);
            let entryPrice = window.TradingApp.Algo.Breakout.getEntryPrice(symbol, code);
            if (code === "KeyB") {
                console.log("breakout buy for " + symbol);
            } else if (code === "KeyS") {
                console.log("breakdown sell for " + symbol);
            }
            window.TradingApp.Algo.Breakout.submitBreakoutOrders(symbol, entryPrice, stopOutPrice, "A", 1);
        }
    } else if (code === "KeyT" || code === "KeyE" || code === 'Space') {
        let crosshairPrice = window.TradingApp.Main.widgets[symbol].crosshairPrice;
        if (code === "KeyT")
            window.TradingApp.Chart.drawStopLoss(symbol, crosshairPrice);
        else if (code === "KeyE")
            window.TradingApp.Chart.drawEntry(symbol, crosshairPrice);
        else
            window.TradingApp.Chart.clearPriceLines(symbol);
    } else if (code === "KeyC") {
        // shift + c or just c: cancel all
        window.TradingApp.TOS.cancelWorkingOrders(symbol);
        console.log("cancel all for " + symbol);
    } else if (code === "KeyF") {
        window.TradingApp.TOS.flatternPosition(symbol);
        console.log("flatten for " + symbol);
    }
});