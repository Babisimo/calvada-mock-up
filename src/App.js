import React from "react"
import NavBar from './NavBar'
import Home from './pages/Main/Home';
import Links from "./pages/Main/Links";
// import Contact from "./ContactForm/Contact";
import Form from "./ContactForm/Form";
import { Route, Routes } from 'react-router-dom'

// Main Imports
import { Counties, Cities, Caltrans } from "./MainExports"

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
          <Route path="/form" element={<Form />} />
          <Route path="/counties" element={<Counties />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/caltrans" element={<Caltrans />} />
        </Routes>

        {/* Routes for Counties */}
        <CountiesRoutes />

      </div>
    </>
  );
}

export default App;
