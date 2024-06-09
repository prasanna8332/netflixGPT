// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./src/utilities/constants";

const firebaseApp = initializeApp(FIREBASE_CONFIG);
export default firebaseApp;
