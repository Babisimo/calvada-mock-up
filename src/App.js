import React from "react"
import NavBar from './NavBar'
import Home from './pages/Main/Home';
import Links from "./pages/Main/Links";
import Contact from "./pages/Main/Contact";
import { Route, Routes } from 'react-router-dom'

// Main Imports
import { Arizona, Nevada, California, Texas, Counties, Cities, Caltrans } from "./MainExports"

// Importing Counties Routes
import CountiesRoutes from "./Routes/CountiesRoutes";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">

        {/* Main Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/california" element={<California />} />
            <Route path="/nevada" element={<Nevada />} />
            <Route path="/texas" element={<Texas />} />
            <Route path="/arizona" element={<Arizona />} />
            <Route path="/counties" element={<Counties />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/caltrans" element={<Caltrans />} />
        </Routes>

        {/* Routes for Counties */}
        <CountiesRoutes />

        {/* Routes For Cities */}

        {/* Routes for Caltrans */}

      </div>
    </>
  );
}

export default App;
