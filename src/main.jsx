import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginRouter, HomeRouter } from './App.jsx';
// import { LoginRouter } from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeRouter className="max-h-screen w-screen"/>
  </React.StrictMode>
)
