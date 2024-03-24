import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth"; 
// Import GoogleAuthProvider from firebase/auth
//import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
//import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOHVY7fIyVvfRjxTtuYlHFsH1HTMvId4M",
  authDomain: "discord-clone-f2c90.firebaseapp.com",
  databaseURL: "https://discord-clone-f2c90-default-rtdb.firebaseio.com",
  projectId: "discord-clone-f2c90",
  storageBucket: "discord-clone-f2c90.appspot.com",
  messagingSenderId: "930668512700",
  appId: "1:930668512700:web:55ba6917101686dfed17b9"
};

// Initialize Firebase
const app      = initializeApp(firebaseConfig);
const db       = getFirestore(app);
const auth     = getAuth(app); 
const provider = new GoogleAuthProvider();

 export { auth, provider };

export default db;

