import React from "react";
import { Route, Routes } from 'react-router-dom'

// Importing California Counties
import cacounties from "../pages/StatesFolder/California/CA_Components/CACountiesExports";

// Importing Arizona Counties
// import azcounties from './pages/StatesFolder/Arizona/AZ_Components/az_exports'
import { SantaCruzAZ, Maricopa, Pima, Yuma, Cochise } from '../pages/StatesFolder/Arizona/AZ_Components/az_exports'

// Importing Nevada Counties
import { Clark, Washoe } from '../pages/StatesFolder/Nevada/NV_Components/nv_exports'

// Importing Texas Counties
import { Bexar } from '../pages/StatesFolder/Texas/TX_Components/tx_exports'

// Importing Washington Counties
import {Franklin, King} from '../pages/StatesFolder/Washington/WA_Components/wa_exports'

export default function CountiesRoutes() {
    return (
        <>
            {/* California Counties Routes */}
            <Routes>
                {Object.keys(cacounties).map(county => (
                    <Route key={county} path={`/${county.toLowerCase()}`} element={React.createElement(cacounties[county])} />
                ))}
            </Routes>

            {/* Arizona Counties Routes */}
            <Routes>
                
                {/* {Object.keys(azcounties).map(county => (
                    <Route key={county} path={`/${county.toLowerCase()}`} element={React.createElement(azcounties[county])} />
                ))} */}

                <Route path="/santacruzaz" element={<SantaCruzAZ />} />
                <Route path="/maricopa" element={<Maricopa />} />
                <Route path="/pima" element={<Pima />} />
                <Route path="/yuma" element={<Yuma />} />
                <Route path="/cochise" element={<Cochise />} />
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

            {/* Washington Counties Routes */}
            <Routes>
                <Route path="/franklin" element={<Franklin/>}/>
                <Route path="/king" element={<King/>}/>
            </Routes>
        </>
    )
}
