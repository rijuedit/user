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

// Initialize Firebase safely
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = (typeof firebase !== 'undefined' && firebase.auth) ? firebase.auth() : null;
const db = (typeof firebase !== 'undefined' && firebase.database) ? firebase.database() : null;

// Enable Local Auth Persistence for APK WebView
if (auth && firebase.auth.Auth) {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function(err) {
        console.log("Auth persistence setup:", err);
    });
}

// Global Helper: Convert Email to Firebase Key
function emailToKey(email) {
    return email ? email.replace(/\./g, ',') : '';
}

// Safe SwalLight wrapper (Prevents "Swal is undefined" build error)
const SwalLight = {
    fire: function(title, text, icon) {
        if (typeof Swal !== 'undefined') {
            return Swal.fire({
                title: title || '',
                text: text || '',
                icon: icon || 'info',
                confirmButtonColor: '#3d88cd'
            });
        } else {
            console.log(title, text);
        }
    }
};
