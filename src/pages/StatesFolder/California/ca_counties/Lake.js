import React from 'react'
import { Link } from 'react-router-dom'
import District1 from '../CaltransDistricts/District1'

export const Lake = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Lake County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>430-144-08</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.lakecountyca.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://common2.mptsweb.com/megabytecommonsite/(S(kpg23ve1aizmlo3f3ovnolov))/PublicInquiry/Inquiry.aspx?CN=Lake&SITE=Public&DEPT=Tax&PG=Search' target={"_blank"} rel='noreferrer'>Parcel Search</a>
        <br />
        <a href='http://gispublic.co.lake.ca.us/flexviewer/index.html' target={"_blank"} rel='noreferrer'>GIS Viewer</a>
        <br />
        <h4>Request Record Maps:</h4>
        <p>Cara Bowin | <a href='mailto:Cara.Bowin@lakecountyca.gov'>Cara.Bowin@lakecountyca.gov</a></p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>255 N. Forbes St | Room 309</p>
        <p>Lakeport California 95453</p>
        <br />
        <p><strong>Phone:</strong> (707) 263-2341</p>
        <p><strong>Department Hours:</strong> Monday-Friday 8:00 AM to 5:00 OM</p>

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
