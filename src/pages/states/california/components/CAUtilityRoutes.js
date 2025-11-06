import React from "react";
import { Route, Routes } from "react-router-dom";

import LAUtils from "../utilities/LAUtils";
import ZoneTwoUtils from "../utilities/ZoneTwoUtils";
import ZoneThreeUtils from "../utilities/ZoneThreeUtils";
import ZoneFourUtils from "../utilities/ZoneFourUtils";
import ZoneFiveUtils from "../utilities/ZoneFiveUtils";
import ZoneSixUtils from "../utilities/ZoneSixUtils";

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