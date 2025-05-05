// src/config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdkNIj2d9PrC0xgsm8VHilkIvEQlnmRsg",
  authDomain: "best-room-service.firebaseapp.com",
  projectId: "best-room-service",
  storageBucket: "best-room-service.appspot.com", // corrected
  messagingSenderId: "569585291130",
  appId: "1:569585291130:web:e8327dc1f8829ca768d0c3",
  measurementId: "G-0806HG8Z62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app); // Export Firestore instance

export { database };
