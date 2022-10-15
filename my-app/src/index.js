import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function

