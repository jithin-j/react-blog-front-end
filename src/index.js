import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFOLWwKixaR_W7lb-dzu4CxNN2cUEMsjM",
  authDomain: "my-react-blog-58785.firebaseapp.com",
  projectId: "my-react-blog-58785",
  storageBucket: "my-react-blog-58785.appspot.com",
  messagingSenderId: "85123679351",
  appId: "1:85123679351:web:638b8508edbf7237443272"
};
  
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
