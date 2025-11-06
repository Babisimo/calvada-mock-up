import React from "react";
import { Route, Routes } from 'react-router-dom'

// Importing California Counties
import cacounties from "../pages/states/california/components/CACountiesExports";

// Importing Arizona Counties
import azcounties from '../pages/states/arizona/components/az_exports'
// import { SantaCruzAZ, Maricopa, Pima, Yuma, Cochise, Pinal } from '../pages/states/Arizona/AZ_Components/az_exports'

// Importing Nevada Counties
import { Clark, Washoe } from '../pages/states/nevada/components/nv_exports'

// Importing Texas Counties
import { Bexar } from '../pages/states/texas/components/tx_exports'

// Importing Washington Counties
import { Franklin, King } from '../pages/states/washington/components/wa_exports'

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

                {Object.keys(azcounties).map(county => (
                    <Route key={county} path={`/${county.toLowerCase()}`} element={React.createElement(azcounties[county])} />
                ))}

                {/* <Route path="/santacruzaz" element={<SantaCruzAZ />} />
                <Route path="/maricopa" element={<Maricopa />} />
                <Route path="/pima" element={<Pima />} />
                <Route path="/yuma" element={<Yuma />} />
                <Route path="/cochise" element={<Cochise />} />
                <Route path="/pinal" element={<Pinal />} /> */}

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
                <Route path="/franklin" element={<Franklin />} />
                <Route path="/king" element={<King />} />
            </Routes>
        </>
    )
}
