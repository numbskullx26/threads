// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAJPeBSqbF1KDS8ygKrq7tQy8GmrVPL9zA",
    authDomain: "threads-53d29.firebaseapp.com",
    projectId: "threads-53d29",
    storageBucket: "threads-53d29.appspot.com",
    messagingSenderId: "649979958209",
    appId: "1:649979958209:web:168996bfa5a41afea55540",
    measurementId: "G-6YYN0MZSJH"
  };

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
