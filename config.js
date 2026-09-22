// User App Config
const firebaseConfig = {
    apiKey: "AIzaSyAkZkqcyP3P6QnbHT-wfxeygxgY9IoKBAU",
    authDomain: "oxi-esports.firebaseapp.com",
    projectId: "oxi-esports",
    storageBucket: "oxi-esports.firebasestorage.app",
    messagingSenderId: "924353594492",
    appId: "1:924353594492:web:08329a3d1f67e7a5da35f9",
    databaseURL: "https://oxi-esports-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// ইউজার অ্যাপের জন্য লাইট থিম (সাদা) পপআপ
const SwalLight = Swal.mixin({
    background: '#ffffff',
    color: '#000000',
    confirmButtonColor: '#b026ff',
    cancelButtonColor: '#ff4d4d'
});

function emailToKey(email) { return email ? email.replace(/\./g, ',') : ''; }

function checkUserAuth() {
    auth.onAuthStateChanged(user => {
        if (!user) window.location.href = "login.html";
    });
}
