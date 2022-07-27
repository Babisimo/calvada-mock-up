import React from 'react'
import { Link } from 'react-router-dom'

const SanFransisco = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Fransisco County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p><strong>Book: </strong>0787 &nbsp;&nbsp; <strong>Lot: </strong>001 &nbsp;&nbsp; (0787-001)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://sf.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sfplanninggis.org/PIM/' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://bsm.sfdpw.org/subdivision/' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>

        <strong>City Administrator</strong>
        <p>1 Dr. Carlton B. Goodlett Place</p>
        <p>City Hall Room 362</p>
        <p>San Francisco, CA 94102</p>
        <p>Monday - Friday 8:00 AM - 8:00 PM</p>

        <p><strong>Phone: </strong>(415) 554-4851 | (415) 554-6920 | (415) 554-6944 | (415) 554-6900</p>
        <p><strong>Email: </strong>city.administrator@sfgov.org</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=04efb9a9f14c4da2aabd9ce36b7dda48' target={"_blank"} rel='noreferrer'>Caltrans District 4</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanFransisco