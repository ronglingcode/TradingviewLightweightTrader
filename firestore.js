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
    const getAutoTraderStateWithRefresh = async () => {
        let state = await getAutoTraderStateWithoutRefresh();
        let currentDate = new Date();
        let dateString = currentDate.toLocaleDateString();
        if (dateString !== state.date) {
            let result = await setAutoTraderState({
                date: dateString,
                dayTrades: 0,
            });
            state = await getAutoTraderStateWithoutRefresh();
            console.log(state);
            return state;
        } else {
            console.log(state);
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
    }

    return {
        logInfo,
        logError,
        logOrder,
        getAutoTraderStateWithoutRefresh,
        setAutoTraderState,
        getAutoTraderStateWithRefresh,
        pendingOrdersBySymbol,
        setTradesCount,
        getTradesCount,
    };
})();
