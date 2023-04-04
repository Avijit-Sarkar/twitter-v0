// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN_enxVr62nmkKR97D-7b66iW9sJP_TU0",
  authDomain: "twitter-clone-954ea.firebaseapp.com",
  projectId: "twitter-clone-954ea",
  storageBucket: "twitter-clone-954ea.appspot.com",
  messagingSenderId: "461320111973",
  appId: "1:461320111973:web:511b5c97b9918b8a2fc38c",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
