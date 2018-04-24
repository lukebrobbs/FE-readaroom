import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDwqOx_6oIYIoHXZ-w4FmdeaXNNye7bgtw",
  authDomain: "readaroom-90fdc.firebaseapp.com",
  databaseURL: "https://readaroom-90fdc.firebaseio.com",
  projectId: "readaroom-90fdc",
  storageBucket: "readaroom-90fdc.appspot.com",
  messagingSenderId: "419332014044"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
