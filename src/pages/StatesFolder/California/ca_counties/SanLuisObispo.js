import React from 'react'
import { Link } from 'react-router-dom'
import District5 from '../CaltransDistricts/District5'

const SanLuisObispo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Luis Obispo County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>053-184-005</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.slocounty.ca.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://propertyinquiryportal.slocounty.ca.gov/#/property-inquiry' target={"_blank"} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.slocounty.ca.gov/Departments/Public-Works/Services/Maps/Record-Map-Index.aspx' target={"_blank"} rel='noreferrer'>Land Records | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps, Corner Records)
        <br />
        <a href='https://www.slocounty.ca.gov/Departments/Public-Works/Services/Maps/GIS-of-Survey-Maps.aspx' target={"_blank"} rel='noreferrer'>Interactive GIS Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <h4>County Government Center</h4>
        <p>1055 Monterey Street, San Luis Obispo, CA 93408</p>

        < br />

        <p><strong>Phone: </strong>(805) 781-5000</p>
        <p><strong>Toll Free: </strong>(800) 834-4636</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District5 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanLuisObispo