import React from "react"
import NavBar from './NavBar'
import Home from './pages/Home';
import Links from "./pages/Links";
import { Route, Routes } from 'react-router-dom'
import Contact from "./pages/Contact";

// Main Imports
import { Arizona, Nevada, California, Texas, Counties, Cities, Caltrans } from "./MainExports"

// Importing California Counties
import { Alameda, Alpine, Amador, Butte, ContraCosta, Fresno, Kern, Kings, Lake, LosAngeles, Marin, Merced, Monterrey, Orange, Placer, Riverside, Sacramento, SanBernardino, SanDiego, SanFransisco, SanJoaquin, SanLuisObispo, SanMateo, SantaBarbara, SantaClara, SantaCruz, Shasta, Solano, Sonoma, Stanislaus, Tulare, Ventura, Yolo } from "./pages/StatesFolder/California/c_exports"

// Importing Arizona Counties
import { Maricopa, Pima } from './pages/StatesFolder/Arizona/az_ezports'

// Importing Nevada Counties
import { Clark, Washoe } from './pages/StatesFolder/Nevada/nv_exports'

// Importing Texas Counties
import {Bexar} from './pages/StatesFolder/Texas/tx_exports'

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

        {/* California Counties Routes */}
        <Routes>
          <Route path="/alameda" element={<Alameda />} />
          <Route path="/alpine" element={<Alpine />} />
          <Route path="/amador" element={<Amador />} />
          <Route path="/butte" element={<Butte />} />
          <Route path="/contracosta" element={<ContraCosta />} />
          <Route path="/fresno" element={<Fresno />} />
          <Route path="/kern" element={<Kern />} />
          <Route path="/kings" element={<Kings />} />
          <Route path="/lake" element={<Lake />} />
          <Route path="/losangeles" element={<LosAngeles />} />
          <Route path="/marin" element={<Marin />} />
          <Route path="/merced" element={<Merced />} />
          <Route path="/monterrey" element={<Monterrey />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/placer" element={<Placer />} />
          <Route path="/riverside" element={<Riverside />} />
          <Route path="/sacramento" element={<Sacramento />} />
          <Route path="/sanbernardino" element={<SanBernardino />} />
          <Route path="/sandiego" element={<SanDiego />} />
          <Route path="/sanfransisco" element={<SanFransisco />} />
          <Route path="/sanjoaquin" element={<SanJoaquin />} />
          <Route path="/sanluisobispo" element={<SanLuisObispo />} />
          <Route path="/sanmateo" element={<SanMateo />} />
          <Route path="/santabarbara" element={<SantaBarbara />} />
          <Route path="/santaclara" element={<SantaClara />} />
          <Route path="/santacruz" element={<SantaCruz />} />
          <Route path="/shasta" element={<Shasta />} />
          <Route path="/solano" element={<Solano />} />
          <Route path="/sonoma" element={<Sonoma />} />
          <Route path="/stanislaus" element={<Stanislaus />} />
          <Route path="/tulare" element={<Tulare />} />
          <Route path="/ventura" element={<Ventura />} />
          <Route path="/yolo" element={<Yolo />} />
        </Routes>

        {/* Arizona Counties Routes */}
        <Routes>
          <Route path="/maricopa" element={<Maricopa />} />
          <Route path="/pima" element={<Pima />} />
        </Routes>

        {/* Nevada Counties Routes */}
        <Routes>
          <Route path="/clark" element={<Clark />} />
          <Route path="/washoe" element={<Washoe />} />
        </Routes>

        {/* Texas Counties Routes */}
        <Routes>
          <Route path="/bexar" element={<Bexar />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
