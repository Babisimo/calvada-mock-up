import React from 'react'
import { Link } from 'react-router-dom'

const Kings = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Kings County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>020-017-013-000</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://assr.parcelquest.com/Home' target={"_blank"} rel='noreferrer'>Parcel Search</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://kings-county.maps.arcgis.com/apps/webappviewer/index.html?id=338d13f286174722982f74aadfd5e87e' target={"_blank"} rel='noreferrer'>GIS Viewer</a>
        <br />
        <a href='https://www.countyofkings.com/departments/public-works' target={"_blank"} rel='noreferrer'>Public Works</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist6/' target={"_blank"} rel='noreferrer'>Caltrans District 6</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>Fresno Fair Grounds, Educational Building</p>
        <p>1121 S. Chance Avenue, Fresno California 93702</p>

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

export default Kings