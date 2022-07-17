import React from 'react'
import { Link } from 'react-router-dom'

const SanMateo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>San Mateo County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>095040390 &nbsp;&nbsp;&nbsp; (095-040-390)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.smcacre.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://www.smcacre.org/assessor/assessor-maps' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://gis.smcgov.org/Html5Viewer/?viewer=raster' target={"_blank"} rel='noreferrer'>GIS</a>&nbsp;&nbsp;&nbsp;(Free APNS, Tract Maps, Parcel Maps, Record of Survey Maps, & Corner Records)

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>555 County Venter Redwood City, California 94063</p>
        <p><strong>Phone: </strong>(650) 363-4500</p>
        <a href='https://www.smcacre.org/contact' target={"_blank"} rel='noreferrer'>Email / Contact Information</a>
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

export default SanMateo