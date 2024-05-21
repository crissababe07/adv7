// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyDF6XFq9VSxkuzIRmCyX3a2BK4RX288KHE",
  authDomain: "adv7-70b2c.firebaseapp.com",
  projectId: "adv7-70b2c",
  storageBucket: "adv7-70b2c.appspot.com",
  messagingSenderId: "904221800955",
  appId: "1:904221800955:web:dacb8c5516db04a6c8b35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
