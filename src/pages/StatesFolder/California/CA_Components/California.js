import React from "react"
import CaCountiesNavBar from "./CaCountiesNavBar"
import { Link } from "react-router-dom"

export default function California() {
    return (
        <div>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Counties</button></Link>
                <h1 className='title'>California</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}
            <CaCountiesNavBar />
        </div>
    )
}