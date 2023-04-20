import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA8iy5yTNJLgMUd4buv4vMIhythQMkh2mA",
    authDomain: "koornik-h.firebaseapp.com",
    databaseURL: "https://koornik-h-default-rtdb.firebaseio.com",
    projectId: "koornik-h",
    storageBucket: "koornik-h.appspot.com",
    messagingSenderId: "177293775757",
    appId: "1:177293775757:web:f8c42f7651e757c8b123c4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
