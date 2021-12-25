window.TradingApp.TOS.initialize();
window.TradingApp.Chart.initialize();

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
        if (!messageData.response) {
            return;
        }
        messageData.response.forEach(resp => {
            console.log(resp);
        });
    };

    websocket.onopen = function () {
        request = window.TradingApp.Streaming.createLoginRequest(window.TradingApp.TOS.userPrincipal);
        websocket.send(JSON.stringify(request));
    }
};

setTimeout(() => {
    run();
}, 3000);

