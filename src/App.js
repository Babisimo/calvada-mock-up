import React from "react"
import './App.css';
import NavBar from './NavBar'
import Home from './pages/Home';
import StatesPage from './pages/StatesPage';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statesPage" element={<StatesPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
