


import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCak6ldNqUlLUWpxs6XSLlIldKGZipRrQ",
    authDomain: "twitter-4fa22.firebaseapp.com",
    projectId: "twitter-4fa22",
    storageBucket: "twitter-4fa22.appspot.com",
    messagingSenderId: "402458602166",
    appId: "1:402458602166:web:8a6a3904746cc94f02d417"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
