// Import the necessary Firebase functions from the modular SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0_kHuVb3zn7o7ZATa0Bzi2L7_Y4w6KVI",
  authDomain: "ecommercewebsite-94a19.firebaseapp.com",
  projectId: "ecommercewebsite-94a19",
  storageBucket: "ecommercewebsite-94a19.firebasestorage.app",
  messagingSenderId: "552551379070",
  appId: "1:552551379070:web:e8e670e5b1b360c646e82f",
  measurementId: "G-PJKY3FQ0CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword };
