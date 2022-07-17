import React from 'react'
import { Link } from 'react-router-dom'

const Washoe = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/nevada'}><button>Back to Nevada Counties</button></Link>
        <h1 className='title'>Washoe County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>007-294-36</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://gis.washoecounty.us/wrms/survey#' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.washoecounty.gov/' target={"_blank"} rel='noreferrer'>Mapping | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps & APNS | <strong>LINK NOT WORKING</strong>)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default Washoe