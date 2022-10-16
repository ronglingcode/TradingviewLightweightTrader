window.TradingApp = {
    'Settings': {
        'currentDay': new Date('2022-10-12 6:30'), //('2022-09-23 6:30'),
        'drawIndicatorsAsSeries': true,
        // I can focus on no more than 4 stocks at the same time,
        // see details in https://sunrisetrading.atlassian.net/browse/TPS-161
        'maxStocksCount': 4,
    },
    'Algo': {},
    'Controller': {},
    'Models': {},
    'Profiles': {},
    'State': {
        activeSymbol: '',
        activeTabIndex: -1
    },
    'Test': {
        'Fixtures': {}
    }
};
window.TradingApp.Profiles.getActiveProfile = () => {
    let name = window.TradingApp.Secrets.activeProfile;
    return window.TradingApp.Profiles[name];
};