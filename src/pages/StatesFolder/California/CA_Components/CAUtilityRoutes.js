import React from "react";
import { Route, Routes } from "react-router-dom";

import LAUtils from "../CA_Utilities/LAUtils";
import ZoneTwoUtils from "../CA_Utilities/ZoneTwoUtils";
import ZoneThreeUtils from "../CA_Utilities/ZoneThreeUtils";
import ZoneFourUtils from "../CA_Utilities/ZoneFourUtils";
import ZoneFiveUtils from "../CA_Utilities/ZoneFiveUtils";
import ZoneSixUtils from "../CA_Utilities/ZoneSixUtils";

export default function CAUtilityRoutes(){
    return(
        <>
             <Routes>
                {/* Los Angeles County Utility Routes */}
                <Route path="/utilities/lautilities" element={<LAUtils />}/>
             
                {/* Zone Two Utilities */}
                <Route path="/utilities/zonetwoutilities" element={<ZoneTwoUtils/>}/>

                {/* Zone Three Utilities */}
                <Route path="/utilities/zonethreeutilities" element={<ZoneThreeUtils/>}/>

                {/* Zone Four Utilities */}
                <Route path="/utilities/zonefourutilities" element={<ZoneFourUtils/>}/>
                
                {/* Zone Five Utilities */}
                <Route path="/utilities/zonefiveutilities" element={<ZoneFiveUtils/>}/>
                
                {/* Zone Six Utilities */}
                <Route path="/utilities/zonesixutilities" element={<ZoneSixUtils/>}/>
 
             </Routes>
             
        </>
    )
}