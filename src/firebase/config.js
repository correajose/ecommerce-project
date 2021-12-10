// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH6l3E_8b0bcyAjkwtzNl9IAGk7G0NC2M",
  authDomain: "asfdgfngfds.firebaseapp.com",
  projectId: "asfdgfngfds",
  storageBucket: "asfdgfngfds.appspot.com",
  messagingSenderId: "741466037400",
  appId: "1:741466037400:web:5250e657f6ffc47bccc4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);