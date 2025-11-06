import React from 'react'
import { Link } from 'react-router-dom'
import District1 from '../caltrans_districts/District1'

const Humboldt = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Humboldt County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>123456789012&nbsp;&nbsp;&nbsp;&nbsp;(123-456-789-012)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://hummaps.com/maps/' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://webgis.co.humboldt.ca.us/HCEGIS2.0/' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNs)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/Humboldt+County+Department-Public/@40.8051962,-124.1597352,15z/data=!4m6!3m5!1s0x54d155796011f989:0x547a246aaacda0c5!8m2!3d40.8051962!4d-124.1597352!16s%2Fg%2F1v93_t4h?entry=ttu' target='_blank' rel='noreferrer'>1106 2nd St<br/>Eureka, CA 95501</a>
        <br />
        <br />
        <p><strong>Phone:</strong> (707) 445-7421</p>
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

export default Humboldt