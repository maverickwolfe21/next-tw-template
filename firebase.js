import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA2eDPGu52Moox3V-Rummdmcr-eCovh5U",
  authDomain: "quote-generator-89de6.firebaseapp.com",
  projectId: "quote-generator-89de6",
  storageBucket: "quote-generator-89de6.firebasestorage.app",
  messagingSenderId: "880901264480",
  appId: "1:880901264480:web:dfe10db20ebc9406379f05",
  measurementId: "G-37CW1ZE9GF",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
