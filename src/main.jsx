import React from 'react';
import ReactDOM from 'react-dom/client';
// import { LoginRouter, HomeRouter } from './App.jsx';
// import { LoginRouter } from './App.jsx';
// import Login from './pages/login/Login';
import { BrowserRouter } from 'react-router-dom';
import { Index } from './pages/login/Index';
// import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />

    </BrowserRouter>
  </React.StrictMode>
)
