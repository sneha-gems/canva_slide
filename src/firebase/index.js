// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9B9UXmVylblznFBN0vF5HNEHNgx9Ccg",
  authDomain: "quiz-game-8b9d7.firebaseapp.com",
  projectId: "quiz-game-8b9d7",
  storageBucket: "quiz-game-8b9d7.appspot.com",
  messagingSenderId: "981671622528",
  appId: "1:981671622528:web:137494ff852fc6daedb365",
  measurementId: "G-2JLPEQP25C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
