// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCaZElkHjYyujJP93OBMqS9tdp0e2vtwlk",
  authDomain: "monkey-blog2911.firebaseapp.com",
  projectId: "monkey-blog2911",
  storageBucket: "monkey-blog2911.appspot.com",
  messagingSenderId: "1080277601358",
  appId: "1:1080277601358:web:5db969c9af62e69263871f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
