import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga4'

// Main Style
import './style.css'

// Style for all dropdown components
import './styles/dropdown.css'
import './styles/city.css'
import './styles/city_dropdown.css'

// Scrollbar style for all components that require a scrollbar
import './styles/scrollbar.css'

// Styling for all things Utilities
import './styles/utils.css'

// Styling for notifications
import './styles/notification.css'

// Initialize Google Analytics
ReactGA.initialize('G-WRJR2K0YME');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);