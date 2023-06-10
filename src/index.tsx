import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";

// Initialize Firebase
import {initializeApp} from 'firebase/app';
import Home from "./Pages/Home";

const firebaseConfig = {
  apiKey: "AIzaSyAbsmGb_JFXLC2s4eu3WffRf9cUN1Mz6WQ",
  authDomain: "minicursofirebase-feca3.firebaseapp.com",
  projectId: "minicursofirebase-feca3",
  storageBucket: "minicursofirebase-feca3.appspot.com",
  messagingSenderId: "283924365876",
  appId: "1:283924365876:web:550ca3f387fedf5f758061",
  measurementId: "G-BFR196HQY3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
