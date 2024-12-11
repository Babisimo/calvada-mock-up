import React from 'react'
import { Link } from 'react-router-dom'
import District1 from '../CaltransDistricts/District1'

const Lake = () => {
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
        <a href='https://gispublic.co.lake.ca.us/portal/home/' target={"_blank"} rel='noreferrer'>GIS Viewer</a>
        <br />
        <br />
        <a href='https://www.mediafire.com/folder/e6nags4364gtd/PM' target={"_blank"} rel='noreferrer'>Parcel Maps</a>
        <br />
        <a href='https://www.mediafire.com/folder/q4j0yv1ik2rpf/RS' target={"_blank"} rel='noreferrer'>Records of Survey</a>
        <br />
        <a href='https://www.mediafire.com/folder/nnhtqg3xoznd2/Sub' target={"_blank"} rel='noreferrer'>Subdivision Maps</a>
        <br />
        <br />
        <h4>Request Record Maps:</h4>
        <p>Cara Bowin | <a href='mailto:Cara.Bowin@lakecountyca.gov'>Cara.Bowin@lakecountyca.gov</a></p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/255+N+Forbes+St+%23+309,+Lakeport,+CA+95453/@39.0436432,-122.9167214,20z/data=!4m6!3m5!1s0x8083e5e69128f40d:0x8403bbe71edfb2ad!8m2!3d39.0436658!4d-122.9164835!16s%2Fg%2F11m_lfc9sz?entry=ttu' target='_blank' rel='noreferrer'>255 N. Forbes St | Room 309 <br/> Lakeport California 95453</a>
        <br />
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

export default Lake