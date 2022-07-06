import React from 'react'
import { Link } from 'react-router-dom'

const SantaCruz = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Santa Cruz County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>02433102 &nbsp;&nbsp;&nbsp;(024-331-02-000)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.co.santa-cruz.ca.us/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='https://gis.santacruzcounty.us/gisweb/' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS, Record Maps, Zoning, Benchmarks, etc.)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <h4>Request ROW Maps by Email</h4>
        <a href='https://www.dot.ca.gov/cpra/cpraform' target={"_blank"} rel='noreferrer'>Request Form</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING | Caltrans District 5)

        <h4>Contact:</h4>
        <p>Tim Romano | Transportation Surveyor</p>
        <p>timothy_romano@dot.ca.gov</p>
        <p>Caltrans District 5 - (805) 549-3060</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SantaCruz