// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDI8g4PvT0kTCedc_zYVCd6-ndLIxwOruM",
  authDomain: "blogreact-28564.firebaseapp.com",
  projectId: "blogreact-28564",
  storageBucket: "blogreact-28564.firebasestorage.app",
  messagingSenderId: "926245585078",
  appId: "1:926245585078:web:a51d409b006a62be902617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);