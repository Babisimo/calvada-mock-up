import React from "react";
// import { CACities } from "../StatesFolder/California/CA_Components/CACitiesExports";
import CACities from "../StatesFolder/California/CA_Components/CACities";
// import { Link } from 'react-router-dom'

export default function Cities() {
    return (
        <div>
            <h1 className="title">Cities</h1>

            {/* Border To Separate Information */}
            <p className='border'></p>

            <h2 className="city-title">California Cities</h2>
            <CACities />

            {/* Border To Separate Information */}
            <p className='border'></p>


        </div>
    )
}


