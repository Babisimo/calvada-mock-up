import React from 'react'
import { Link } from 'react-router-dom'

const Shasta = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Shasta County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>077-490-005</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.co.shasta.ca.us/index.aspx' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://www.co.shasta.ca.us/index/assessor/assessment-inquiry' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.co.shasta.ca.us/index/gis' target={"_blank"} rel='noreferrer'>GIS</a>&nbsp;&nbsp;&nbsp;(APNS, Zoning)
        <br />
        <a href='https://camapsource.com/shasta-county/' target={"_blank"} rel='noreferrer'>CA Map Source</a>&nbsp;&nbsp;&nbsp;(Free Parcel Maps, Assessment Maps, etc.)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Shasta