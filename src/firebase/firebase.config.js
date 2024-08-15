// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9gOkkuVaQOIWrLoxIqZNJg8erkDOdOF4",
  authDomain: "product-sell-88afe.firebaseapp.com",
  projectId: "product-sell-88afe",
  storageBucket: "product-sell-88afe.appspot.com",
  messagingSenderId: "863729860269",
  appId: "1:863729860269:web:bd1d10b0ce929c259b5024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);