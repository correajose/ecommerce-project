// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgUC7TJsW4dSsXxiPWo8mDO5D2eHeaUaw",
  authDomain: "e-commerce-project-3f9ca.firebaseapp.com",
  projectId: "e-commerce-project-3f9ca",
  storageBucket: "e-commerce-project-3f9ca.appspot.com",
  messagingSenderId: "757345328848",
  appId: "1:757345328848:web:9f99f9418e80d46611c8d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);