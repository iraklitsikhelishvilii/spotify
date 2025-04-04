import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBFLC90HEsqC3rbnuqfJvmGMuCOX0ZiocA",
  authDomain: "spotify-app-a0da1.firebaseapp.com",
  projectId: "spotify-app-a0da1",
  storageBucket: "spotify-app-a0da1.firebasestorage.app",
  messagingSenderId: "6055342662",
  appId: "1:6055342662:web:42ee46a68fd148b71b5047",
  measurementId: "G-M6TZ1LP7Z3",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
