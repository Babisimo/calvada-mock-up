import React from "react"
import NavBar from './pages/Main/NavBar'
import Home from './pages/Main/Home';
import Contact from "./pages/Main/Contact";
import Links from "./pages/Main/Links";

import { Route, Routes } from 'react-router-dom'

// Main Imports
import { Counties, Cities, Utilities } from "./pages/Main/MainExports"

// Importing Counties Routes
import CountiesRoutes from "./Routes/CountiesRoutes";
import CAUtilityRoutes from "./pages/StatesFolder/California/CA_Components/CAUtilityRoutes";
import CitiesRoutes from "./pages/StatesFolder/CitiesRoutes";

import ReactGA from 'react-ga4'

function App() {

  ReactGA.initialize('G-WRJR2K0YME')

  return (
    <>
      <html lang="en">
        <header>

          <NavBar />
        </header>

        <article>
          <div className="container">

            {/* Main Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/links" element={<Links />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/counties" element={<Counties />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/utilities" element={<Utilities />} />
            </Routes>

            {/* Routes for Counties */}
            <CountiesRoutes />

            {/* Routes for Utilities */}
            <CAUtilityRoutes />

            {/* Routes for Cities */}
            <CitiesRoutes />

          </div>
        </article>
      </html>
    </>
  );
}

export default App;
