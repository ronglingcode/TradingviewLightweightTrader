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
            console.log(json);
            // populate current chart
            window.TradingApp.DB.initialize(symbol, json);
            // start streaming
            window.TradingApp.Streaming.sendStockTimeSaleRequest(symbol);
        });
    }
});


const createWebSocket = () => {
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
                    // re-send in case previously dent when socket is not connected yet
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
                if (["TIMESALE_EQUITY", "TIMESALE_FUTURES"].includes(service)) {
                    let contents = element.content;
                    contents.forEach(content => {
                        let timeSale = window.TradingApp.Streaming.createTimeSale(content);
                        window.TradingApp.DB.updateFromTimeSale(timeSale);
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

document.getElementsByTagName("body")[0].addEventListener("keydown", function (keyboardEvent) {
    if (!window.TradingApp.State.activeSymbol) {
        console.log("no active symbol, skip");
        return;
    }
    let symbol = window.TradingApp.State.activeSymbol;
    let code = keyboardEvent.code;
    if (keyboardEvent.shiftKey) {
        // shift key maps to thinkorswim shortcuts
        if (code === "KeyC") {
            // shift + c: cancel all
            console.log("cancel all for " + symbol);
        } else if (code === "KeyF") {
            console.log("flatten for " + symbol);
        }
    } else {
        if (code === "KeyB") {
            console.log("breakout buy for " + symbol);
        } else if (code === "KeyS") {
            console.log("breakdown sell for " + symbol);
        }
    }
});