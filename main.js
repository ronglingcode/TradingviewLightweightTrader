window.TradingApp.TOS.initialize();

let mycharts = [];
for (let i = 0; i < window.TradingApp.Watchlist.length; i++) {
    let chart = window.TradingApp.Chart.createChartWidget(i, window.TradingApp.Watchlist[i]);
    mycharts.push(chart);
}

document.getElementsByTagName("body")[0].addEventListener("keydown", function(keyboardEvent) {
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

const run = async () => {
    if (!window.TradingApp.TOS.initialized) {
        console.log('TOS not initialized, exiting');
        return;
    }
    console.log('run');
    let socketUrl = "wss://" + window.TradingApp.TOS.userPrincipal.streamerInfo["streamerSocketUrl"] + "/ws";
    let websocket = new WebSocket(socketUrl);
    websocket.onmessage = function (messageEvent) {
        console.log(messageEvent);
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
                }
                else if (service in ["TIMESALE_EQUITY", "TIMESALE_FUTURES"]) {
                    console.log(resp);
                }
                //console.log(resp);
            });
        }
    };

    websocket.onopen = function () {
        request = window.TradingApp.Streaming.createLoginRequest(window.TradingApp.TOS.userPrincipal);
        websocket.send(JSON.stringify(request));
    }
};

/*
setTimeout(() => {
    run();
}, 3000);

*/