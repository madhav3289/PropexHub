// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7a4d7.firebaseapp.com",
  projectId: "mern-estate-7a4d7",
  storageBucket: "mern-estate-7a4d7.firebasestorage.app",
  messagingSenderId: "643263006302",
  appId: "1:643263006302:web:8c3767f31a9b43a992d6cf",
  measurementId: "G-ETVTSQJSK6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);