import React from "react";
import { Route, Routes } from "react-router-dom";

import LAUtils from "../CA_Utilities/LAUtils";

export default function CAUtilityRoutes(){
    return(
        <>
             {/* Los Angeles County Utility Routes */}
             <Routes>
                <Route path="/lautilities" element={<LAUtils />}/>
             </Routes>
        </>
    )
}