// User/config.js
const firebaseConfig = {
    apiKey: "AIzaSyAkZkqcyP3P6QnbHT-wfxeygxgY9IoKBAU",
    authDomain: "oxi-esports.firebaseapp.com",
    projectId: "oxi-esports",
    storageBucket: "oxi-esports.firebasestorage.app",
    messagingSenderId: "924353594492",
    appId: "1:924353594492:web:08329a3d1f67e7a5da35f9",
    databaseURL: "https://oxi-esports-default-rtdb.firebaseio.com"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();

// Set persistence to LOCAL so users stay logged in for WebView APK
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// Global Helper: Convert Email to Firebase Key
function emailToKey(email) {
    return email ? email.replace(/\./g, ',') : '';
}

// Global SweetAlert Theme for User App
const SwalLight = Swal.mixin({
    customClass: {
        popup: 'swal-light-popup',
        title: 'swal-light-title',
        confirmButton: 'swal-light-confirm'
    },
    buttonsStyling: true
});
