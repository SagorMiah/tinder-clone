import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAb9EhJ4wZ4Cr-c5N7-aXfQvlHiKAfaF6g",
  authDomain: "tinder-clone-8c7af.firebaseapp.com",
  projectId: "tinder-clone-8c7af",
  storageBucket: "tinder-clone-8c7af.appspot.com",
  messagingSenderId: "430535902691",
  appId: "1:430535902691:web:373fdcf1254d6cb26c8cd6",
});

const db = firebaseApp.firestore();

export default db;
