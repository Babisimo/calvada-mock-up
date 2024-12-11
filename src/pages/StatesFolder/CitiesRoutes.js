import React from "react";
import {Route, Routes} from "react-router-dom"

import CACities from "./California/CA_Components/CACities";
import AZCities from "./Arizona/AZ_Components/AZCities";

export default function CitiesRoutes(){
    return(
        <>
            <Routes>
                {/* CA Cities Routes */}
                <Route path="/cities/CACities" element={<CACities/>}></Route>
                <Route path="/cities/AZCities" element={<AZCities/>}></Route>
            </Routes>
        </>
    )
}