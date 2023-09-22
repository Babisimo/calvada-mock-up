import React from "react"
import NavBar from './pages/Main/NavBar'
import Home from './pages/Main/Home';
import Form from "./ContactForm/Form";
import Links from "./pages/Main/Links";

import { Route, Routes } from 'react-router-dom'

// Main Imports
import { Counties, Cities, Utilities } from "./pages/Main/MainExports"

// Importing Counties Routes
import CountiesRoutes from "./Routes/CountiesRoutes";
import CAUtilityRoutes from "./pages/StatesFolder/California/CA_Components/CAUtilityRoutes";

function App() {
  return (
    <>
      <html lang="en">
        <header>

          <NavBar />
          <div className="container">

            {/* Main Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/links" element={<Links />} />
              <Route path="/form" element={<Form />} />
              <Route path="/counties" element={<Counties />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/utilities" element={<Utilities />} />
            </Routes>

            {/* Routes for Counties */}
            <CountiesRoutes />

            {/* Routes for Utilities */}
            <CAUtilityRoutes />
          </div>
        </header>

        <footer className="disclaimer_footer">
          <div>
              <h3>
              This website is provided for informational purposes only. Cal Vada Surveying, INC. is not responsible for the accuracy or completeness of the information. Always consult professionals for advice. Use at your own risk.
              </h3>
          </div>          
        </footer>

      </html>
    </>
  );
}

export default App;
