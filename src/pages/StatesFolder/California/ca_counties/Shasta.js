import React from 'react'
import { Link } from 'react-router-dom'
import District2 from '../CaltransDistricts/District2'

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
        <a href='https://maps.shastacounty.gov/ShastaCountyMap/' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.mediafire.com/folder/pxfsax48v819z/Shasta' target={"_blank"} rel='noreferrer'>Mediafire</a>&nbsp;&nbsp;&nbsp;(Free Parcel Maps, Assessment Maps, etc.)
        <br />
        <a href='https://camapsource.com/shasta/' target={"_blank"} rel='noreferrer'>CA Map Source</a>&nbsp;&nbsp;&nbsp;(Free Parcel Maps, Assessment Maps, etc.)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Caltrans:</h3>
        <District2 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Shasta