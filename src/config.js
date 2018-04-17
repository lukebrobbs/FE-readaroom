import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCMUbVVw4nTdK5hJ3Rjl508FCJhwfYwypo",
  authDomain: "sample-6cbe3.firebaseapp.com",
  databaseURL: "https://sample-6cbe3.firebaseio.com",
  projectId: "sample-6cbe3",
  storageBucket: "sample-6cbe3.appspot.com",
  messagingSenderId: "690680784935"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
