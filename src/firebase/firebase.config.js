// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2xwoqgkebpP5WQ5ITaXHIhp7ZMehIgWk",
  authDomain: "drangon-news-auth.firebaseapp.com",
  projectId: "drangon-news-auth",
  storageBucket: "drangon-news-auth.appspot.com",
  messagingSenderId: "695413003075",
  appId: "1:695413003075:web:e6a66ada7d53d64258d5f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
