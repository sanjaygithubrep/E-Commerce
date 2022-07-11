import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMZ9DaShevsrEBE348t8ssNX1GltdSCQk",
  authDomain: "products-5bd13.firebaseapp.com",
  projectId: "products-5bd13",
  storageBucket: "products-5bd13.appspot.com",
  messagingSenderId: "31582382583",
  appId: "1:31582382583:web:deca5dbae252356d5c26f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
