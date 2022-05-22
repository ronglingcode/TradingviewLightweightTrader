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
    const getAutoTraderStateWithoutRefresh = async () => {
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
        let docRef = await doc(db, "state/autoTrader")
        await setDoc(docRef, newState);
    };
    const initializeAutoTraderState = async (account) => {
        let state = await getAutoTraderStateWithoutRefresh();
        let currentDate = new Date();
        currentDate = window.TradingApp.Settings.currentDay;
        let dateString = currentDate.toLocaleDateString();
        if (dateString !== state.date) {
            let dayTrades = window.TradingApp.AutoTrader.countTrades(account);
            let result = await setAutoTraderState({
                date: dateString,
                dayTrades: dayTrades,
                initialBalance: account.securitiesAccount.currentBalances.liquidationValue,
            });
            state = await getAutoTraderStateWithoutRefresh();
            console.log(state);
            setInitialBalance(state.initialBalance);
            return state;
        } else {
            console.log(state);
            setInitialBalance(state.initialBalance);
            return state;
        }
    };
    const setTradesCount = (count) => {
        sessionStorage.setItem("TradingApp.TradesCount", count);
    };
    const getTradesCount = () => {
        let count = sessionStorage.getItem("TradingApp.TradesCount");
        let countInt = parseInt(count, 10);
        if (isNaN(countInt)) {
            return 0;
        } else {
            return countInt;
        }
    };
    const setInitialBalance = (balance) => {
        sessionStorage.setItem("TradingApp.InitialBalance", balance);
    };
    const getProfitAndLoss = (account) => {
        let newBalance = account.securitiesAccount.currentBalances.liquidationValue;
        let oldBalance = sessionStorage.getItem("TradingApp.InitialBalance");
        return newBalance - oldBalance;
    };
    const getProfitAndLossFromCache = () => {
        let newBalance = sessionStorage.getItem("TradingApp.CurrentBalance");
        let oldBalance = sessionStorage.getItem("TradingApp.InitialBalance");
        return newBalance - oldBalance;
    };
    const cacheAccountInfo = (account) => {
        sessionStorage.setItem("TradingApp.CurrentBalance", account.securitiesAccount.currentBalances.liquidationValue);

        let totalTrades = window.TradingApp.AutoTrader.countTrades(account);
        console.log(`total trades: ${totalTrades}`);
        setTradesCount(totalTrades);
    };

    return {
        logInfo,
        logError,
        logOrder,
        getAutoTraderStateWithoutRefresh,
        setAutoTraderState,
        initializeAutoTraderState,
        pendingOrdersBySymbol,
        getTradesCount,
        getProfitAndLoss,
        cacheAccountInfo,
        getProfitAndLossFromCache,
    };
})();
