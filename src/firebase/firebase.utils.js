import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOez0tPe8RT4GnuaWRkhUFd2YDW7lvPw8",
    authDomain: "king-db-72b27.firebaseapp.com",
    databaseURL: "https://king-db-72b27.firebaseio.com",
    projectId: "king-db-72b27",
    storageBucket: "king-db-72b27.appspot.com",
    messagingSenderId: "565737922048",
    appId: "1:565737922048:web:4a01f351a6d1ce089f02e5",
    measurementId: "G-HMDCL0XHV4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firestore.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;