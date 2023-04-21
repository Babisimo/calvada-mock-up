// import React from "react";
// import { Route, Routes } from 'react-router-dom'

// // Importing California Counties
// import counties from "../pages/StatesFolder/California/CA_Components/CACountiesExports";

// // Importing Arizona Counties
// import { Maricopa, Pima, Yuma } from '../pages/StatesFolder/Arizona/AZ_Components/az_exports'

// // Importing Nevada Counties
// import { Clark, Washoe } from '../pages/StatesFolder/Nevada/NV_Components/nv_exports'

// // Importing Texas Counties
// import { Bexar } from '../pages/StatesFolder/Texas/TX_Components/tx_exports'


// export default function CountiesRoutes() {
//     return (
//         <>
//             {/* California Counties Routes */}
//             <Routes>
//                 <Route path="/alameda" element={<cacounties.Alameda />} />
//                 <Route path="/amador" element={<cacounties.Amador />} />
//                 <Route path="/alpine" element={<cacounties.Alpine />} />
//                 <Route path="/butte" element={<cacounties.Butte />} />
//                 <Route path="/calaveras" element={<cacounties.Calaveras />} />
//                 <Route path="/contracosta" element={<cacounties.ContraCosta />} />
//                 <Route path="/eldorado" element={<cacounties.ElDorado />} />
//                 <Route path="/fresno" element={<cacounties.Fresno />} />
//                 <Route path="/imperial" element={<cacounties.Imperial />} />
//                 <Route path="/kern" element={<cacounties.Kern />} />
//                 <Route path="/kings" element={<cacounties.Kings />} />
//                 <Route path="/lake" element={<cacounties.Lake />} />
//                 <Route path="/lassen" element={<cacounties.Lassen />} />
//                 <Route path="/losangeles" element={<cacounties.LosAngeles />} />
//                 <Route path="/marin" element={<cacounties.Marin />} />
//                 <Route path="/modoc" element={<cacounties.Modoc />} />
//                 <Route path="/mono" element={<cacounties.Mono />} />
//                 <Route path="/merced" element={<cacounties.Merced />} />
//                 <Route path="/madera" element={<cacounties.Madera />} />
//                 <Route path="/monterey" element={<cacounties.Monterey />} />
//                 <Route path="/nevada" element={<cacounties.Nevada />} />
//                 <Route path="/orange" element={<cacounties.Orange />} />
//                 <Route path="/placer" element={<cacounties.Placer />} />
//                 <Route path="/plumas" element={<cacounties.Plumas />} />
//                 <Route path="/riverside" element={<cacounties.Riverside />} />
//                 <Route path="/sacramento" element={<cacounties.Sacramento />} />
//                 <Route path="/sanbernardino" element={<cacounties.SanBernardino />} />
//                 <Route path="/sandiego" element={<cacounties.SanDiego />} />
//                 <Route path="/sanfransisco" element={<cacounties.SanFrancisco />} />
//                 <Route path="/sanjoaquin" element={<cacounties.SanJoaquin />} />
//                 <Route path="/sanluisobispo" element={<cacounties.SanLuisObispo />} />
//                 <Route path="/sanmateo" element={<cacounties.SanMateo />} />
//                 <Route path="/santabarbara" element={<cacounties.SantaBarbara />} />
//                 <Route path="/santaclara" element={<cacounties.SantaClara />} />
//                 <Route path="/santacruz" element={<cacounties.SantaCruz />} />
//                 <Route path="/shasta" element={<cacounties.Shasta />} />
//                 <Route path="/solano" element={<cacounties.Solano />} />
//                 <Route path="/sonoma" element={<cacounties.Sonoma />} />
//                 <Route path="/stanislaus" element={<cacounties.Stanislaus />} />
//                 <Route path="/sierra" element={<cacounties.Sierra />} />
//                 <Route path="/sutter" element={<cacounties.Sutter />} />
//                 <Route path="/siskiyou" element={<cacounties.Siskiyou />} />
//                 <Route path="/tulare" element={<cacounties.Tulare />} />
//                 <Route path="/tehama" element={<cacounties.Tehama />} />
//                 <Route path="/trinity" element={<cacounties.Trinity />} />
//                 <Route path="/ventura" element={<cacounties.Ventura />} />
//                 <Route path="/yolo" element={<cacounties.Yolo />} />
//                 <Route path="/yuba" element={<cacounties.Yuba />} />
//             </Routes>

//             {/* Arizona Counties Routes */}
//             <Routes>
//                 <Route path="/maricopa" element={<Maricopa />} />
//                 <Route path="/pima" element={<Pima />} />
//                 <Route path="/yuma" element={<Yuma />} />
//             </Routes>

//             {/* Nevada Counties Routes */}
//             <Routes>
//                 <Route path="/clark" element={<Clark />} />
//                 <Route path="/washoe" element={<Washoe />} />
//             </Routes>

//             {/* Texas Counties Routes */}
//             <Routes>
//                 <Route path="/bexar" element={<Bexar />} />
//             </Routes>
//         </>
//     )
// }
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
