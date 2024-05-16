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
        <a href='https://www.slocounty.ca.gov/Departments/Public-Works/Services/Maps/GIS-of-Survey-Maps.aspx' target={"_blank"} rel='noreferrer'>Interactive GIS Mapping</a>
        <br />
        <a href='https://www.slocounty.ca.gov/Departments/Public-Works/Services/Maps/Record-Map-Index.aspx' target={"_blank"} rel='noreferrer'>Land Records | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps, Corner Records)
        <br />
        <a href='https://www.slocity.org/home/showpublisheddocument/15462/637601204870730000' target={"_blank"} rel='noreferrer'>Benchmarks</a>&nbsp;&nbsp;&nbsp;
        <br />
        <a href='https://www.slocity.org/government/department-directory/public-works/documents-online' target={"_blank"} rel='noreferrer'>Public Record Documents</a>&nbsp;&nbsp;&nbsp;(Storm Drain, FEMA, Benchmarks)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <h4>County Government Center</h4>
        <a href='https://www.google.com/maps/place/1055+Monterey+St,+San+Luis+Obispo,+CA+93408/@35.2820737,-120.660256,19.5z/data=!4m6!3m5!1s0x80ecf104077358bf:0x98141c6ad90e8eed!8m2!3d35.2821867!4d-120.6601675!16s%2Fg%2F11c14_3rcy?entry=ttu' target='_blank' rel='noreferrer'>1055 Monterey Street, San Luis Obispo, CA 93408</a>

        < br />
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