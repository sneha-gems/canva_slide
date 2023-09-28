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
  apiKey: "AIzaSyBfwDZ1u34v9EW8WjRpRlDHIwnbkTHt4s4",
  authDomain: "quizdemov1.firebaseapp.com",
  projectId: "quizdemov1",
  storageBucket: "quizdemov1.appspot.com",
  messagingSenderId: "792210030232",
  appId: "1:792210030232:web:8a4c73571761bcc6539aed",
  measurementId: "G-5TB08FXYC9",
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
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
