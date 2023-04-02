import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB7pSCNNe-zQFdTfiblolmot9HRD0LVnlg",
    authDomain: "e-commerce-react-1215f.firebaseapp.com",
    projectId: "e-commerce-react-1215f",
    storageBucket: "e-commerce-react-1215f.appspot.com",
    messagingSenderId: "926241990594",
    appId: "1:926241990594:web:c624552c977c42e410185b"
  };

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)