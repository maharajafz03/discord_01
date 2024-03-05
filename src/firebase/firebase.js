// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhGoVjyQ-UmCCp7e0PgvBil4ZujoIeywY",
  authDomain: "instagram-368a4.firebaseapp.com",
  projectId: "instagram-368a4",
  storageBucket: "instagram-368a4.appspot.com",
  messagingSenderId: "860675828556",
  appId: "1:860675828556:web:36e94f10fa5e6eeeecbde9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase authentication
const provider = new GoogleAuthProvider();

export { auth, provider };



// ------------------------wrong config.....you should review later--------------------------------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAOHVY7fIyVvfRjxTtuYlHFsH1HTMvId4M",
//   authDomain: "discord-clone-f2c90.firebaseapp.com",
//   projectId: "discord-clone-f2c90",
//   storageBucket: "discord-clone-f2c90.appspot.com",
//   messagingSenderId: "930668512700",
//   appId: "1:930668512700:web:55ba6917101686dfed17b9"

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default db;

