import React from "react"
import NvCountiesNavBar from "./NvCountiesNavbar"
import { Link } from 'react-router-dom'

export default function Nevada() {
    return (
        <div >
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>Nevada Counties</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}
            <NvCountiesNavBar />
        </div>
    )

}
