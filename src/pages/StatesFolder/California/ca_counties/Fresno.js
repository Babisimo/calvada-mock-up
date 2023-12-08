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
        <br />
        <a href='https://gisportal.co.fresno.ca.us/portal/apps/webappviewer/index.html?id=c065c87a83a7486bbf1bf7088c4c6742' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free Record Maps, Corner Records, NGS)
        <br />
        <a href='https://gisportal.co.fresno.ca.us/portal/apps/webappviewer/index.html?id=b921843d343d4df998b5b3c6a301756a' target={"_blank"} rel='noreferrer'>Zoning Map</a>
        <br />
        <a href='https://www.co.fresno.ca.us/departments/public-works-planning/divisions-of-public-works-and-planning/development-services-division/zoning-ordinance' target={"_blank"} rel='noreferrer'>Municipal Code</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/2220+Tulare+St+6th+Floor,+Fresno,+CA+93721/@36.7352674,-119.7870229,19.5z/data=!4m5!3m4!1s0x80945e203e5cb369:0xe5b3e7274a3cbbe1!8m2!3d36.7352896!4d-119.7867452?entry=ttu' target='_blank' rel='noreferrer'>2220 Tulare St. | 6th Floor <br/>
        Fresno California, 93721</a>
        <br />
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