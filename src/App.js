import React from "react"
import './App.css';
import NavBar from './NavBar'
import Home from './pages/Home';
import StatesPage from './pages/StatesPage';
import {Route, Routes} from 'react-router-dom'
import California from "./pages/StatesFolder/California";
import Nevada from "./pages/StatesFolder/Nevada";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/states" element={<StatesPage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/california" element={<California/>} />
          <Route path="/nevada" element={<Nevada />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
