const firebaseConfig = {
  apiKey: "AIzaSyAn0PNlM3dpik_zJ91L0hXIi0WSXwqs7E0",
  authDomain: "register-surat-sekda.firebaseapp.com",
  projectId: "register-surat-sekda",
  storageBucket: "register-surat-sekda.firebasestorage.app",
  messagingSenderId: "79525297224",
  appId: "1:79525297224:web:3f4ffb06ca732ab46b2c7d"
};

const ALLOWED_EMAILS = [
  "maulanaf77@gmail.com",
  "ajudansekdakotablitar10@gmail.com"
];

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
