// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFpETs-75EsU5uPUPvWwHvQu6SNHdtcd8",
  authDomain: "e-commerce-project-a8ba2.firebaseapp.com",
  projectId: "e-commerce-project-a8ba2",
  storageBucket: "e-commerce-project-a8ba2.appspot.com",
  messagingSenderId: "876546066720",
  appId: "1:876546066720:web:751764474fcb3a9572af45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);