import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCui5Uejz8ickXPViHX-Ytg2P5mgQsQBIE",
  authDomain: "sol-house-app.firebaseapp.com",
  projectId: "sol-house-app",
  storageBucket: "sol-house-app.appspot.com",
  messagingSenderId: "703423384641",
  appId: "1:703423384641:web:1b103c901eeac4ac1e0ac0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
