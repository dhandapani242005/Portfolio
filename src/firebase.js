import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwf4Vo3X31uROfyG7Rp9j_atwUz2Lpt6Q",
  authDomain: "portfolio-1d253.firebaseapp.com",
  projectId: "portfolio-1d253",
  storageBucket: "portfolio-1d253.firebasestorage.app",
  messagingSenderId: "365327744466",
  appId: "1:365327744466:web:425142dde764b246e81c0b",
  measurementId: "G-RM8TLTBWY5",
  databaseURL: "https://portfolio-1d253-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Switched to Realtime Database

export { app, analytics, db };
