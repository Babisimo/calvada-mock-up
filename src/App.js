import React from "react"
import './App.css';
import NavBar from './NavBar'
import Home from './pages/Home';
import Links from "./pages/Links";
import {Route, Routes} from 'react-router-dom'
import Contact from "./pages/Contact";
import {Arizona, Nevada, California, Texas} from "./Exports"
// import StatesPage from './pages/StatesPage';
// import California from "./pages/StatesFolder/California";
// import Nevada from "./pages/StatesFolder/Nevada";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/california" element={<California/>} />
          <Route path="/nevada" element={<Nevada />} />
          <Route path="/texas" element={<Texas />} />
          <Route path="/arizona" element={<Arizona />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
