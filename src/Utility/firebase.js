<<<<<<< HEAD
/* eslint-disable no-undef */

=======
>>>>>>> cad2174f4be8228a982a34bf977229782a475f64
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load environment variables

<<<<<<< HEAD
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
=======
// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
>>>>>>> cad2174f4be8228a982a34bf977229782a475f64
};

const app = firebase(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
<<<<<<< HEAD













// import firebase from "firebase/compat/app";
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "xx",
//   authDomain: "clone-cfd41.firebaseapp.com",
//   projectId: "clone-cfd41",
//   storageBucket: "clone-cfd41.firebasestorage.app",
//   messagingSenderId: "306981946234",
//   appId: "1:306981946234:web:40a2da3b1d686a3b588cc3",
// };

// // Initialize Firebase
// const app = firebase(firebaseConfig);
// export const auth = getAuth(app); 
// export const db = app.firestore();

=======
>>>>>>> cad2174f4be8228a982a34bf977229782a475f64
