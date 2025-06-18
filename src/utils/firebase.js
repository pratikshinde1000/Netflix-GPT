// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNWuqO3-nwFjjhaRbPjuo7qk9rmcFJT6s",
  authDomain: "netflix-gpt-291c4.firebaseapp.com",
  projectId: "netflix-gpt-291c4",
  storageBucket: "netflix-gpt-291c4.firebasestorage.app",
  messagingSenderId: "554547102181",
  appId: "1:554547102181:web:d3b53ab6a2e659ca29af0c",
  measurementId: "G-HQXWSZFMEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();