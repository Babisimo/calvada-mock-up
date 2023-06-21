import React from 'react'
import { Link } from 'react-router-dom'
import District1 from '../CaltransDistricts/District1'

const Mendocino = () => {
    return (
        <div className='county-info'>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>Mendocino County</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <div className='apn-format'>
                <h3>APN Format:</h3>
                <p>026-123-01</p>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Links:</h3>
                <a href='https://assr.parcelquest.com/Statewide?IndexViewModel=PQGov.Models.IndexViewModel' target={"_blank"} rel='noreferrer'>APN Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
                <br />
                <a href='https://gis.mendocinocounty.org/portal/apps/webappviewer/index.html?id=255d7af6ece142b9962e92181d0f4ad9' target={"_blank"} rel='noreferrer'>GIS Parcel Viewer</a>&nbsp;&nbsp;&nbsp;<strong><em>(Remember to Enable Popups To View Parcel Info)</em></strong>
                <br />
                <a href='http://icris.co.mendocino.ca.us/recorder/eagleweb/docSearchPOST.jsp' target={"_blank"} rel='noreferrer'>Document Search</a>&nbsp;&nbsp;&nbsp;(Free Maps, Parcel Maps, Subdivision Maps)
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Caltrans:</h3>
                <District1 />
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}


        </div>
    )
}

export default Mendocino