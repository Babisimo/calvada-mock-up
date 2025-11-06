import React from "react";
import {Route, Routes} from "react-router-dom"

import CACities from "./california/components/CACities";
import AZCities from "./arizona/components/AZCities";
import WACities from "./washington/components/WACities";

export default function CitiesRoutes(){
    return(
        <>
            <Routes>
                {/* CA Cities Routes */}
                <Route path="/cities/CACities" element={<CACities/>}></Route>
                <Route path="/cities/AZCities" element={<AZCities/>}></Route>
                <Route path="/cities/WACities" element={<WACities/>}></Route>
            </Routes>
        </>
    )
}