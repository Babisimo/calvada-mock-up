import React from "react";
import CACities from "../StatesFolder/California/CA_Components/CACities";



export default function Cities() {
    return (
        <div>
            <h1 className="title">Cities</h1>

            {/* Border To Separate Information */}
            <p className='border'></p>

            <CACities />

            {/* Border To Separate Information */}
            <p className='border'></p>


        </div>
    )
}


