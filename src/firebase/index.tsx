// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwzIL96DUQbgVnD1Hrd_0b9Kxr9_UJNO8",
  authDomain: "backend9445.firebaseapp.com",
  projectId: "backend9445",
  storageBucket: "backend9445.appspot.com",
  messagingSenderId: "1011555807499",
  appId: "1:1011555807499:web:7304f420678ce60e8c320e",
  measurementId: "G-YSWJDE3E8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
