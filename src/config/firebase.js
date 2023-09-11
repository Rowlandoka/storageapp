// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzM_XORYhYznWD1a0MsN_9TYcvz-1qzyE",
  authDomain: "storageapp-83909.firebaseapp.com",
  projectId: "storageapp-83909",
  storageBucket: "storageapp-83909.appspot.com",
  messagingSenderId: "590525058789",
  appId: "1:590525058789:web:7177cc89af44181f620e0c",
  measurementId: "G-PDDYN0XC1Y",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export const storage = getStorage(app);

// Export default parameters

export { auth, db, provider };
