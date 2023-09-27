import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ToastContainer } from "react-toastify";

//CSS Import file
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyBF9B9UXmVylblznFBN0vF5HNEHNgx9Ccg",
  authDomain: "quiz-game-8b9d7.firebaseapp.com",
  projectId: "quiz-game-8b9d7",
  storageBucket: "quiz-game-8b9d7.appspot.com",
  messagingSenderId: "981671622528",
  appId: "1:981671622528:web:137494ff852fc6daedb365",
  measurementId: "G-2JLPEQP25C",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <Resetpassword />,
  },
]);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
