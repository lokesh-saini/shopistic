import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNBGEfpeGppYri_CkFHCkj2OlM9Tib9r4",
  authDomain: "shopistic-db.firebaseapp.com",
  databaseURL: "https://shopistic-db.firebaseio.com",
  projectId: "shopistic-db",
  storageBucket: "",
  messagingSenderId: "496727677826",
  appId: "1:496727677826:web:a49159d078bd969f064d9b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
