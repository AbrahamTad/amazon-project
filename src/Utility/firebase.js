
import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOMOMSeWcsm3HVUTgNmuXeI7CokvcVpIw",
  authDomain: "clone-cfd41.firebaseapp.com",
  projectId: "clone-cfd41",
  storageBucket: "clone-cfd41.firebasestorage.app",
  messagingSenderId: "306981946234",
  appId: "1:306981946234:web:40a2da3b1d686a3b588cc3",
};
// Initialize Firebase
// const app = firebase(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export const auth = getAuth(app);
export const db = firebase.firestore;


// import firebase from "firebase/compat/app";
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCOMOMSeWcsm3HVUTgNmuXeI7CokvcVpIw",
//   authDomain: "clone-cfd41.firebaseapp.com",
//   projectId: "clone-cfd41",
//   storageBucket: "clone-cfd41.firebasestorage.app",
//   messagingSenderId: "306981946234",
//   appId: "1:306981946234:web:40a2da3b1d686a3b588cc3"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = firebase.firestore();


