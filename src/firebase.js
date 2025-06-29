// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your correct Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyC-W32A8rniAAngvQnPHylbgOgVn_fZ6_0",
  authDomain: "sp-coffee-shop.firebaseapp.com",
  projectId: "sp-coffee-shop",
  storageBucket: "sp-coffee-shop.appspot.com", // ← corrected `.app` → `.appspot.com`
  messagingSenderId: "356802664358",
  appId: "1:356802664358:web:95fcd8bce283bfe4d0a167",
  measurementId: "G-ML72LWYPRZ"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firebase services you’re using
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
