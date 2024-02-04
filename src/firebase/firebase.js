// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOHVY7fIyVvfRjxTtuYlHFsH1HTMvId4M",
  authDomain: "discord-clone-f2c90.firebaseapp.com",
  projectId: "discord-clone-f2c90",
  storageBucket: "discord-clone-f2c90.appspot.com",
  messagingSenderId: "930668512700",
  appId: "1:930668512700:web:55ba6917101686dfed17b9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"; // Add this line
// import "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAOHVY7fIyVvfRjxTtuYlHFsH1HTMvId4M",
//   authDomain: "discord-clone-f2c90.firebaseapp.com",
//   projectId: "discord-clone-f2c90",
//   storageBucket: "discord-clone-f2c90.appspot.com",
//   messagingSenderId: "930668512700",
//   appId: "1:930668512700:web:55ba6917101686dfed17b9"
 
// };

//Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app); // Update this line
//const auth = app.auth();
//const provider = new app.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth"; // Add this line

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
// const db = app.firestore();
// const auth = app.auth(); // Update this line
// const provider = new app.auth.GoogleAuthProvider(); // Update this line

// export { auth, provider };
// export default db;


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"; // Add this line
// import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Add this line

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
// const db = getFirestore(app); // Update this line
// const auth = getAuth(app); // Add this line
// const provider = new GoogleAuthProvider(); // Update this line

// export { auth, provider };
// export default db;








// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

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
// const db = app.firestore();
// const auth = firebase.auth();
// const provider = firebase.auth.GoogleAuthProvider();

// export {auth, provider}
// export default db;