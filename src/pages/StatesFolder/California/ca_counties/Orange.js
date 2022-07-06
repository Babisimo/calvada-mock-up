import React from 'react'
import { Link } from 'react-router-dom'

const Orange = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Orange County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>453-062-13</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.ocgov.com/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='https://www.ocgis.com/ocpw/landrecords/' target={"_blank"} rel='noreferrer'>Land Records / Record Maps</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>300 N. Flower Street</p>
        <p>Santa Ana, California 92703</p>
        <p>Monday - Friday 8:00 AM to 5:00 PM</p>
        <p><strong>Phone:</strong> (714) 834-3568</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='https://dot.ca.gov/Configuration/Error-Pages/Error-404-Page?item=%2fdist12%2f&user=extranet%5cAnonymous&site=Caltrans' target={"_blank"} rel='noreferrer'>Caltrans District 12</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>3347 Michelson Drive, Suite 100</p>
        <p>Irvine, California 92612</p>
        <p><strong>Phone:</strong> (949) 724-2000</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Orange