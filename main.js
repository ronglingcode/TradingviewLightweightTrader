window.TradingApp.TOS.initialize();
window.TradingApp.Chart.initialize();

const run = () => {
    if (!window.TradingApp.TOS.initialized) {
        console.log('TOS not initialized, exiting');
        return;
    }
    console.log('run');

};

setTimeout(() => {
    run();
}, 3000);

