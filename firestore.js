import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
window.TradingApp.Firestore = (function () {
    const firebaseConfig = window.TradingApp.Secrets.firebaseConfig;
    let dateobj = new Date();
    let date = dateobj.getDate(), month = dateobj.getMonth() + 1, year = dateobj.getFullYear();
    let collectionNamePrefix = `${year}-${month}-${date}`;
    let pendingOrdersBySymbol = {};
    let cache = {
        'autoTraderState': {},
        'tosAccount': {}
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    var db = getFirestore(app);
    const logInfo = async (msg) => {
        console.log(msg);
        log('Info', msg);
    };
    const logError = async (msg) => {
        console.error(msg);
        log('Error', msg);
    };
    /*
    const log = async (msgType, msg) => {
        addDoc(collection(db, `${collectionNamePrefix}-Logs`), {
            msg: msg,
            type: msgType,
            timestamp: new Date()
        });

    };*/
    const log = async (msgType, msg) => {
        let now = new Date();
        let docId = now.getTime();
        let docRef = await doc(db, `${collectionNamePrefix}-Logs/${docId}`) // create this document newDoc at this path
        await setDoc(docRef, {
            msg: msg,
            type: msgType,
            timestamp: now
        });
    };
    const logOrder = async (order) => {
        console.log(order);
        addDoc(collection(db, `${collectionNamePrefix}-Orders`), {
            timestamp: new Date(),
            ...order
        });
    };
    const getAutoTraderStateFromFirestore = async () => {
        const docRef = doc(db, "state", "autoTrader");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            logError("no autotrader state");
            return null;
        }
    };
    const setAutoTraderState = async (newState) => {
        cache.autoTraderState = newState;
        setAutoTraderStateInFirestore(newState);
    };
    const setAutoTraderStateInFirestore = async (newState) => {
        let docRef = await doc(db, "state/autoTrader")
        await setDoc(docRef, newState);
    };
    const initializeAutoTraderState = async (account) => {
        let state = await getAutoTraderStateFromFirestore();
        let currentDate = new Date();
        currentDate = window.TradingApp.Settings.currentDay;
        let dateString = currentDate.toLocaleDateString();
        if (dateString !== state.date) {
            // start a new day
            let dayTrades = window.TradingApp.AutoTrader.countTrades(account);
            let initialState = {
                date: dateString,
                dayTrades: dayTrades,
                initialBalance: account.securitiesAccount.currentBalances.liquidationValue,
                statesBySymbol: {}
            };
            let result = await setAutoTraderState(initialState);
            console.log(initialState);
        } else {
            cache.autoTraderState = state;
            console.log(state);
        }
    };
    const getTradesCount = () => {
        return window.TradingApp.AutoTrader.countTrades(cache.tosAccount);
    };
    const getProfitAndLossFromCache = () => {
        let initialBalance = cache.autoTraderState.initialBalance;
        let currentBalance = cache.tosAccount.securitiesAccount.currentBalances.liquidationValue;
        return currentBalance - initialBalance;
    };
    const cacheAccountInfo = (account) => {
        cache.tosAccount = account;
        let totalTrades = window.TradingApp.AutoTrader.countTrades(account);
        document.getElementById("totalTrades").innerText = totalTrades;
    };
    const setStockState = async (symbol, key, data) => {
        if (!(symbol in cache.autoTraderState.statesBySymbol)) {
            cache.autoTraderState.statesBySymbol[symbol] = {};
        }
        cache.autoTraderState.statesBySymbol[symbol][key] = data;
        setAutoTraderStateInFirestore(cache.autoTraderState);
    };
    const getStockState = (symbol, key) => {
        if (!(symbol in cache.autoTraderState.statesBySymbol)) {
            return null;
        }
        return cache.autoTraderState.statesBySymbol[symbol][key];
    };
    const addPinnedTarget = (symbol, price) => {
        let targets = getStockState(symbol, "pinnedTargets");
        if (targets) {
            targets.push(price)
        } else {
            targets = [price];
        }
        setStockState(symbol, "pinnedTargets", targets);
    };
    const clearPinnedTargets = (symbol) => {
        setStockState(symbol, "pinnedTargets", []);
    };
    const removeLastPinnedTarget = (symbol) => {
        let targets = getStockState(symbol, "pinnedTargets");
        if (targets) {
            targets.pop();
            setStockState(symbol, "pinnedTargets", targets);
        }
    };
    const getPinnedTargets = (symbol) => {
        let targets = getStockState(symbol, "pinnedTargets");
        if (!targets || !targets.length || targets.length < 1) {
            return [];
        } else {
            return targets;
        }
    };
    const getCache = () => {
        return cache;
    }

    return {
        logInfo,
        logError,
        logOrder,
        getAutoTraderStateFromFirestore,
        setAutoTraderState,
        initializeAutoTraderState,
        pendingOrdersBySymbol,
        getTradesCount,
        cacheAccountInfo,
        getProfitAndLossFromCache,
        setStockState,
        getStockState,
        addPinnedTarget,
        clearPinnedTargets,
        removeLastPinnedTarget,
        getPinnedTargets,
        getCache
    };
})();
