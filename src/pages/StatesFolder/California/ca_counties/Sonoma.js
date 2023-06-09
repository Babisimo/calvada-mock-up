import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../CaltransDistricts/District4'

const Sonoma = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Sonoma County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>028-060-042</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://sonomacounty.ca.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://assr.parcelquest.com/Statewide?IndexViewModel=PQGov.Models.IndexViewModel' target={"_blank"} rel='noreferrer'>Public Assessor Services</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://permitsonoma.org/zoningcodes' target={"_blank"} rel='noreferrer'>Zoning Database</a>&nbsp;&nbsp;&nbsp;(Free Zoning Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>585 Fiscal Drive, Suite 103F</p>
        <p>Santa Rosa, California 95403</p>
        <p><strong>Phone: </strong> (707) 565-2651</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District4 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Sonoma