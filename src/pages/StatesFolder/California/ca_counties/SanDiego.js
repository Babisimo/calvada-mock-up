import React from 'react'
import { Link } from 'react-router-dom'

const SanDiego = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>San Diego County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>006-380-001</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.sandiegocounty.gov/content/sdc/home.html' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sdgis.sandag.org/' target={"_blank"} rel='noreferrer'>GIS Interactive Map</a>
        <br />
        <a href='https://srs.sandiegocounty.gov/' target={"_blank"} rel='noreferrer'>Survey Records System</a><p>(Parcel Maps, Record of Survey, Tract Maps, Corner Record, Miscellaneous Map, Record Survey, Miscellaneous Survey, Official Center Line <strong><em>Credit Card Required</em></strong>)</p>
        <br />
        <a href='http://www.sdcdpw.org/surveyor/quads.html' target={"_blank"} rel='noreferrer'>Vertical Datum</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <br />
        <a href='https://www.sandiegocounty.gov/dpw/standards/standards.html' target={"_blank"} rel='noreferrer'>Standards</a>&nbsp;&nbsp;&nbsp;(Design Standards, CADD Drafring Standards, Private and Public Road Standards)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>5201 Ruffin Road. Suite P, MS0326</p>
        <p>San Diego, California 92123</p>
        <p><strong>Phone: </strong>(858) 694-3672</p>
        <p><strong>Fax: </strong>(858) 495-5263</p>
        <p><strong>E-Mail: </strong>terry.connors@sdcounty.ca.gov</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist11/' target={"_blank"} rel='noreferrer'>Caltrans District 11</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <br />
        <br />
        <strong>San Diego and Imperial Counties</strong>
        <p>4050 Taylor Street, San Diego, California 92110</p>
        <p><strong>General Number: </strong>(619) 688-6699</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanDiego