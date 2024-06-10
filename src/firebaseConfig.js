// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiBqbefNooLhZjrGPHjZUMYzOzyqG_ccw",
  authDomain: "b-ex-ccdd2.firebaseapp.com",
  projectId: "b-ex-ccdd2",
  storageBucket: "b-ex-ccdd2.appspot.com",
  messagingSenderId: "30223075195",
  appId: "1:30223075195:web:21b11aaf6c0b8083fbdfde",
  measurementId: "G-KKV0BJX6YX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {
  auth,
  collection,
  doc,
  firestore,
  getDoc,
  getDocs,
  isSignInWithEmailLink,
  query,
  sendSignInLinkToEmail,
  setDoc,
  signInWithEmailLink,
  where,
};
