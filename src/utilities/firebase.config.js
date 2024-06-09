// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_CONFIG } from "./constants";

// Initialize Firebase
initializeApp(FIREBASE_CONFIG);

export const auth = getAuth();
