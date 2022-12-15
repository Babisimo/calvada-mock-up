import React from "react";
import { Route, Routes } from 'react-router-dom'

// Importing California Counties
import { Alameda, Alpine, Amador, Butte, Calaveras, ElDorado, ContraCosta, Fresno, Kern, Kings, Lake, Lassen, LosAngeles, Marin, Madera, Merced, Modoc, Monterey, Orange, Placer, Riverside, Sacramento, SanBernardino, SanDiego, SanFrancisco, SanJoaquin, SanLuisObispo, SanMateo, SantaBarbara, SantaClara, SantaCruz, Shasta, Solano, Sonoma, Stanislaus, Tulare, Ventura, Yolo, Nevada, Plumas, Sierra, Tehama, Trinity, Mono, Sutter, Imperial } from "../pages/StatesFolder/California/CA_Components/CACountiesExports"

// Importing Arizona Counties
import { Maricopa, Pima } from '../pages/StatesFolder/Arizona/AZ_Components/az_exports'

// Importing Nevada Counties
import { Clark, Washoe } from '../pages/StatesFolder/Nevada/NV_Components/nv_exports'

// Importing Texas Counties
import { Bexar } from '../pages/StatesFolder/Texas/TX_Components/tx_exports'
import Siskiyou from "../pages/StatesFolder/California/ca_counties/Siskiyou";
import Yuba from "../pages/StatesFolder/California/ca_counties/Yuba";

export default function CountiesRoutes() {
    return (
        <>
            {/* California Counties Routes */}
            <Routes>
                <Route path="/alameda" element={<Alameda />} />
                <Route path="/alpine" element={<Alpine />} />
                <Route path="/amador" element={<Amador />} />
                <Route path="/butte" element={<Butte />} />
                <Route path="/calaveras" element={<Calaveras />} />
                <Route path="/contracosta" element={<ContraCosta />} />
                <Route path="/eldorado" element={<ElDorado />} />
                <Route path="/fresno" element={<Fresno />} />
                <Route path="/imperial" element={<Imperial />} />
                <Route path="/kern" element={<Kern />} />
                <Route path="/kings" element={<Kings />} />
                <Route path="/lake" element={<Lake />} />
                <Route path="/lassen" element={<Lassen />} />
                <Route path="/losangeles" element={<LosAngeles />} />
                <Route path="/marin" element={<Marin />} />
                <Route path="/modoc" element={<Modoc />} />
                <Route path="/mono" element={<Mono />} />
                <Route path="/merced" element={<Merced />} />
                <Route path="/madera" element={<Madera />} />
                <Route path="/monterey" element={<Monterey />} />
                <Route path="/nevada" element={<Nevada />} />
                <Route path="/orange" element={<Orange />} />
                <Route path="/placer" element={<Placer />} />
                <Route path="/plumas" element={<Plumas />} />
                <Route path="/riverside" element={<Riverside />} />
                <Route path="/sacramento" element={<Sacramento />} />
                <Route path="/sanbernardino" element={<SanBernardino />} />
                <Route path="/sandiego" element={<SanDiego />} />
                <Route path="/sanfransisco" element={<SanFrancisco />} />
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
                <Route path="/sierra" element={<Sierra />} />
                <Route path="/sutter" element={<Sutter />} />
                <Route path="/siskiyou" element={<Siskiyou />} />
                <Route path="/tulare" element={<Tulare />} />
                <Route path="/tehama" element={<Tehama />} />
                <Route path="/trinity" element={<Trinity />} />
                <Route path="/ventura" element={<Ventura />} />
                <Route path="/yolo" element={<Yolo />} />
                <Route path="/yuba" element={<Yuba />} />
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
        </>
    )
}