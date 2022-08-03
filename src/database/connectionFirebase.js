// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVgZe5DgAeip5SrZBPJNKwWxr2-JJ-7E8",
  authDomain: "todolist-6de52.firebaseapp.com",
  projectId: "todolist-6de52",
  storageBucket: "todolist-6de52.appspot.com",
  messagingSenderId: "659288077777",
  appId: "1:659288077777:web:21e5275c7adf4889e8dcf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)