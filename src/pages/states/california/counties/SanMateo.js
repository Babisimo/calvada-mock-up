import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../caltrans_districts/District4'

const SanMateo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
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
        <a href='https://gis.smcgov.org/Html5Viewer/?viewer=raster' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS, Tract Maps, Parcel Maps, Record of Survey Maps, & Corner Records)
        <br />
        <a href='https://drive.google.com/file/d/1Y8ach8dJp4Ii8Qak8vYHGHPpRSa3eU-x/view?usp=sharing' target={"_blank"} rel='noreferrer'>Benchmarks</a>&nbsp;&nbsp;&nbsp;(KML Download)

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/555+County+Center,+Redwood+City,+CA+94063/@37.4890026,-122.2299087,17z/data=!3m1!4b1!4m6!3m5!1s0x808fa2525dc232df:0x7d9ae588b78512c9!8m2!3d37.4890026!4d-122.2299087!16s%2Fg%2F11bw3x_5r8?entry=ttu' target='_blank' rel='noreferrer'>555 County Center <br/> Redwood City, CA 94063</a>
        <br/>
        <br/>
        <p><strong>Phone: </strong>(650) 363-4500</p>
        <a href='https://www.smcacre.org/contact' target={"_blank"} rel='noreferrer'>Email / Contact Information</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District4 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanMateo