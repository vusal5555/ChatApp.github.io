// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1mJpL5XyiNs4TYcZmLoQ03SQftgbMih0",
  authDomain: "chat-app-cfd38.firebaseapp.com",
  projectId: "chat-app-cfd38",
  storageBucket: "chat-app-cfd38.appspot.com",
  messagingSenderId: "742595363480",
  appId: "1:742595363480:web:5294b5c3cfb0a30b8ac6ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
