import React from 'react'
import { Link } from 'react-router-dom'

const Merced = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Merced County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>45133010 &nbsp;&nbsp;&nbsp; (451-303-010)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='http://apps.co.merced.ca.us/PublicApplets/pages/assessor/parcelmap.aspx' target={"_blank"} rel='noreferrer'>Assessor's Office</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <br />
        <a href='https://web2.co.merced.ca.us/files/Surveyor/01-RECORDED-MAPS/' target={"_blank"} rel='noreferrer'>Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
        <br />
        <br />
        <a href='https://www.countyofmerced.com/654/County-Surveyor' target={"_blank"} rel='noreferrer'>County Surveyor</a>
      </span>

    </div>
  )
}

export default Merced