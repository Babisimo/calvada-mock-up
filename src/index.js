import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/styles/counties.css'
import './pages/styles/stateStyle.css'
import App from './App';
import './style.css'
import './ContactForm/contact.css'
import './pages/styles/city.css'
import './pages/styles/dropdown.css'
import './pages/styles/links.css'
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

