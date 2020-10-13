import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCh0VLCoWJsOvG6Mx6AiLfZfW_uR63F580",
  authDomain: "fir-ab8e3.firebaseapp.com",
  databaseURL: "https://fir-ab8e3.firebaseio.com",
  projectId: "fir-ab8e3",
  storageBucket: "fir-ab8e3.appspot.com",
  messagingSenderId: "13782853398",
  appId: "1:13782853398:web:130df6f8b59fc254235237",
  measurementId: "G-46BJB1YRSL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };