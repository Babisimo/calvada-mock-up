import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/Styles/counties.css'
import './pages/Styles/stateStyle.css'
import App from './App';
import './style.css'
import './pages/Styles/contact.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

