import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    push, 
    onValue, 
    update, 
    remove, 
    runTransaction 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAkZkqcyP3P6QnbHT-wfxeygxgY9IoKBAU",
    authDomain: "oxi-esports.firebaseapp.com",
    projectId: "oxi-esports",
    storageBucket: "oxi-esports.firebasestorage.app",
    messagingSenderId: "924353594492",
    appId: "1:924353594492:web:08329a3d1f67e7a5da35f9",
    databaseURL: "https://oxi-esports-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function emailToKey(email) {
    if (!email) return '';
    return email.replace(/\./g, ',');
}

export {
    app,
    auth,
    database,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    ref,
    set,
    get,
    push,
    onValue,
    update,
    remove,
    runTransaction,
    emailToKey
};