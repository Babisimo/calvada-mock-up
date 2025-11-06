import React from 'react'
import { Link } from 'react-router-dom'
import WSDot from '../components/wsdot'

const King = () => {
    return (
        <div className='county-info'>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>King County</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <div className='apn-format'>
                <h3>APN Format:</h3>
                <p>121510043</p>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Links:</h3>
                <a href='https://gismaps.kingcounty.gov/parcelviewer2//' target={"_blank"} rel='noreferrer'>APN GIS Map</a>&nbsp;&nbsp;&nbsp;(GIS Assessor's Parcel Maps)
                <br />
                <a href='https://recordsearch.kingcounty.gov/LandmarkWeb' target={"_blank"} rel='noreferrer'>Public Records Search</a>&nbsp;&nbsp;&nbsp;(Records Search)
                <br />
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <WSDot />

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

        </div>
    )
}

export default King