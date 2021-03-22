import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDikeOK8HPpndoWQSzE891tDULuSZXlKv4",
    authDomain: "zoritt-app.firebaseapp.com",
    projectId: "zoritt-app",
    storageBucket: "zoritt-app.appspot.com",
    messagingSenderId: "888856675930",
    appId: "1:888856675930:web:3ebc3f0288629af3c23a63",
    measurementId: "G-KMZC0EPJ48"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.storage();
export default firebase;