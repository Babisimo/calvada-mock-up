import React from 'react'
import { Link } from 'react-router-dom'

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
        <br />
        <a href='https://www.co.fresno.ca.us/departments/assessor/mapping/parcel-map-lookup' target={"_blank"} rel='noreferrer'>Assessor Map</a>&nbsp;&nbsp;&nbsp;(Free APNs)
        <br />
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
        <p>Phone: (559) 262-4078</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        {/* LINK DONT WORK */}
        <a href='http://www.dot.ca.gov/dist6/' target={"_blank"} rel='noreferrer'>Caltrans District 6</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <p>Fresno Fair Grounds, Educational Building</p>
        <p>1121 S. Chance Avenue, Fresno, California 93702</p>
        <h4>Telephone:</h4>
        <p>(559) 444-2409 (Fresno/Madera)</p>
        <p>(559) 488-4082 (Tulare/Kings)</p>
        <p>(661) 326-3968 (Kern)</p>
        <p>(559) 488-4067</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Fresno