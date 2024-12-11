import React from 'react'
import { Link } from 'react-router-dom'
import District12 from '../CaltransDistricts/District12'

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
        <a href='https://webapps.ocgis.com/oclandinsights/map-viewer?id=2' target={"_blank"} rel='noreferrer'>Land Records / Record Maps</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/300+N+Flower+St,+Santa+Ana,+CA+92703/data=!4m2!3m1!1s0x80dcd90009f5c127:0x800ef18774ae1f32?sa=X&ved=2ahUKEwj83O_82dT_AhUsPkQIHaVXDzMQ8gF6BAgSEAI' target='_blank' rel='noreferrer'>300 N. Flower Street<br />Santa Ana, California 92703</a>
        <br />
        <br />
        <p>Monday - Friday 8:00 AM to 5:00 PM</p>
        <br />
        <p><strong>Phone:</strong> (714) 834-3568</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District12 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Orange