// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5d49b.firebaseapp.com",
  projectId: "mern-estate-5d49b",
  storageBucket: "mern-estate-5d49b.appspot.com",
  messagingSenderId: "666047990906",
  appId: "1:666047990906:web:db11823c3ef856ca537fc3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);