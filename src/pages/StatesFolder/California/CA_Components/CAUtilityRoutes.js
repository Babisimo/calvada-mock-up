import React from "react";
import { Route, Routes } from "react-router-dom";

import LAUtils from "../CA_Utilities/LAUtils";
import ZoneTwoUtils from "../CA_Utilities/ZoneTwoUtils";
import ZoneThreeUtils from "../CA_Utilities/ZoneThreeUtils";

export default function CAUtilityRoutes(){
    return(
        <>
             <Routes>
                {/* Los Angeles County Utility Routes */}
                <Route path="/lautilities" element={<LAUtils />}/>
             
                {/* Zone Two Utilities */}
                <Route path="/zonetwoutilities" element={<ZoneTwoUtils/>}/>

                {/* Zone Three Utilities */}
                <Route path="/zonethreeutilities" element={<ZoneThreeUtils/>}/>
             </Routes>
             
        </>
    )
}