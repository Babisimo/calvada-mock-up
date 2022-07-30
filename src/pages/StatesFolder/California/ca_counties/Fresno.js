import React from 'react'
import { Link } from 'react-router-dom'
import District6 from '../CaltransDistricts/District6'

const Fresno = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Fresno County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>Book: 511 Page: 11 &nbsp;&nbsp;&nbsp;&nbsp;(511-112-07)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.co.fresno.ca.us/home' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://www.co.fresno.ca.us/departments/assessor/mapping/parcel-map-lookup' target={"_blank"} rel='noreferrer'>Assessor Map</a>&nbsp;&nbsp;&nbsp;(Free APNs)
        <br />
        <a href='https://www.co.fresno.ca.us/departments/public-works-planning/surveyor-s-office/surveyors-map-search' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>2220 Tulare St. | 6th Floor</p>
        <p>Fresno California, 93721</p>
        <br />
        <p><strong>Phone:</strong> (559) 262-4078</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District6 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Fresno