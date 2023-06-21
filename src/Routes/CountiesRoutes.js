import React from "react";
import { Route, Routes } from 'react-router-dom'

// Importing California Counties
import counties from "../pages/StatesFolder/California/CA_Components/CACountiesExports";

// Importing Arizona Counties
import { Maricopa, Pima, Yuma } from '../pages/StatesFolder/Arizona/AZ_Components/az_exports'

// Importing Nevada Counties
import { Clark, Washoe } from '../pages/StatesFolder/Nevada/NV_Components/nv_exports'

// Importing Texas Counties
import { Bexar } from '../pages/StatesFolder/Texas/TX_Components/tx_exports'

export default function CountiesRoutes() {
    return (
        <>
            {/* California Counties Routes */}
            <Routes>
                {Object.keys(counties).map(county => (
                    <Route key={county} path={`/${county.toLowerCase()}`} element={React.createElement(counties[county])} />
                ))}
            </Routes>

            {/* Arizona Counties Routes */}
            <Routes>
                <Route path="/maricopa" element={<Maricopa />} />
                <Route path="/pima" element={<Pima />} />
                <Route path="/yuma" element={<Yuma />} />
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
