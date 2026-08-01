// ====================================================================
// GANTI nilai-nilai di bawah ini dengan konfigurasi project Firebase
// kamu sendiri. Cara mendapatkannya ada di README.md bagian
// "1. Setup Firebase" — cuma perlu copy-paste dari console Firebase.
// ====================================================================
const firebaseConfig = {
  apiKey: "GANTI_DENGAN_API_KEY_KAMU",
  authDomain: "GANTI_DENGAN_PROJECT_ID.firebaseapp.com",
  projectId: "GANTI_DENGAN_PROJECT_ID",
  storageBucket: "GANTI_DENGAN_PROJECT_ID.appspot.com",
  messagingSenderId: "GANTI_DENGAN_SENDER_ID",
  appId: "GANTI_DENGAN_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
