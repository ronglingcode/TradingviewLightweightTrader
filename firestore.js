import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

//import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import * as gbase from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
window.TradingApp.Firestore = (function () {
    const firebaseConfig = window.TradingApp.Secrets.firebaseConfig;
    let dateobj = new Date();
    let date = dateobj.getDate(), month = dateobj.getMonth() + 1, year = dateobj.getFullYear();

    let pendingOrdersBySymbol = {};
    let cache = {
        'autoTraderState': {},
        'tosAccount': {}
    };

    const getCollectionNamePrefix = () => {
        return `${year}-${month}-${date}-${window.TradingApp.Secrets.accountId}`;
    };

    const getStatePrefix = () => {
        return `state-${window.TradingApp.Secrets.accountId}`
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    var db = gbase.getFirestore(app);

    const logDebug = async (msg) => {
        log('Debug', msg);
        console.log(msg);
    };
    const logInfo = async (msg) => {
        console.log(msg);
        log('Info', msg);
        addToLogView(msg, 'Info');
    };
    const logError = async (msg) => {
        console.error(msg);
        log('Error', msg);
        addToLogView(msg, 'Error');
    };
    /*
    const log = async (msgType, msg) => {
        gbase.addDoc(collection(db, `${(getCollectionNamePrefix())}-Logs`), {
            msg: msg,
            type: msgType,
            timestamp: new Date()
        });

    };*/
    const log = async (msgType, msg) => {
        let now = new Date();
        let docId = now.getTime();
        let docRef = await gbase.doc(db, `${getCollectionNamePrefix()}-Logs/${docId}`) // create this document newDoc at this path
        await gbase.setDoc(docRef, {
            msg: msg,
            type: msgType,
            timestamp: now
        });
    };
    const logOrder = async (order) => {
        console.log(order);
        gbase.addDoc(gbase.collection(db, `${getCollectionNamePrefix()}-Orders`), {
            timestamp: new Date(),
            ...order
        });
    };
    const getAutoTraderStateFromFirestore = async () => {
        const docRef = gbase.doc(db, `${getStatePrefix()}`, "autoTrader");
        const docSnap = await gbase.getDoc(docRef);

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
        let docRef = await gbase.doc(db, `${getStatePrefix()}/autoTrader`)
        await gbase.setDoc(docRef, newState);
    };
    const initializeAutoTraderState = async (account) => {
        let state = await getAutoTraderStateFromFirestore();
        let currentDate = new Date();
        currentDate = window.TradingApp.Settings.currentDay;
        let dateString = currentDate.toLocaleDateString();
        if (state == null || dateString !== state.date) {
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
        return true;
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
    };
    const addToLogView = (msg, msgType) => {
        let ul = document.getElementById('logs');
        let li = document.createElement("div");
        li.className = msgType;
        let now = new Date();
        li.innerText = `>>> ${now.toLocaleTimeString()} ${msg}`;
        ul.appendChild(li);
        while (ul.children.length > 8) {
            let firstChild = ul.children[0];
            firstChild.remove();
        }
    };
    const getAccountForSymbol = (symbol) => {
        let account = window.TradingApp.TOS.filterAccountBySymbol(symbol, cache.tosAccount);
        return account;
    };

    // return 0 if no position
    // return +x if long position
    // return -x if short position
    const getPositionNetQuantity = (symbol) => {
        let account = getAccountForSymbol(symbol);
        let position = account.position;
        if (!position) {
            return 0;
        }
        if (position.longQuantity > 0) {
            return position.longQuantity;
        }
        else if (position.shortQuantity > 0) {
            return -position.shortQuantity;
        }
        return 0;
    };

    // allow used once, returns true if allowed this time
    const usageAllowedOnce = (symbol, fieldToCheck) => {
        let hasDoneIt = window.TradingApp.Firestore.getStockState(symbol, fieldToCheck);
        if (!window.TradingApp.Secrets.isTestAccount && hasDoneIt === true) {
            logInfo(`has already done ${fieldToCheck} for ${symbol}, skipping this time.`);
            return false;
        }
        setStockState(symbol, fieldToCheck, true);
        return true;
    };

    const deleteMonthlyLogs = async (year, month) => {
        for (let i = 1; i <= 31; i++) {
            setTimeout(() => {
                deleteDailyLogs(year, month, i);
            }, 500 * i);
        }
    }

    const deleteDailyLogs = async (year, month, day) => {
        const prefix = `${year}-${month}-${day}-${window.TradingApp.Secrets.accountId}`;
        console.log(`Delete for ${prefix}`);
        const collections = [
            gbase.collection(db, `${prefix}-Logs`),
            gbase.collection(db, `${prefix}-Orders`)
        ];
        collections.forEach(collection => {
            deleteCollection(collection);
        });
    };
    const deleteCollection = async (collection) => {
        const q = gbase.query(collection);
        const querySnapshot = await gbase.getDocs(q);
        querySnapshot.forEach((doc) => {
            gbase.deleteDoc(doc.ref);
        });
    };

    return {
        addToLogView,
        logDebug,
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
        getCache,
        getAccountForSymbol,
        getPositionNetQuantity,
        usageAllowedOnce,
        gbase,
        app,
        db,
        deleteDailyLogs,
        deleteMonthlyLogs
    };
})();
