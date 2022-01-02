import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
window.TradingApp.Firestore = (function () {
    const firebaseConfig = window.TradingApp.Secrets.firebaseConfig;
    let dateobj = new Date();
    let date = dateobj.getDate(), month = dateobj.getMonth() + 1, year = dateobj.getFullYear();
    let collectionNamePrefix = `${year}-${month}-${date}`;

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
    const log = async (msgType, msg) => {
        addDoc(collection(db, `${collectionNamePrefix}-Logs`), {
            msg: msg,
            type: msgType,
            timestamp: new Date()
        });

    };
    const logOrder = async (order) => {
        addDoc(collection(db, `${collectionNamePrefix}-Orders`), {
            timestamp: new Date(),
            ...order
        });
    };
    return {
        logInfo,
        logError,
        logOrder
    };
})();
