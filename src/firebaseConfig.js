// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getfirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJzkwpeDCVSrIdfiLhyoVP4EFHQDzSsnI",
  authDomain: "libreria-infantil.firebaseapp.com",
  projectId: "libreria-infantil",
  storageBucket: "libreria-infantil.appspot.com",
  messagingSenderId: "652944012050",
  appId: "1:652944012050:web:caf5bd5931420de40fb9cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getfirestore(app) 