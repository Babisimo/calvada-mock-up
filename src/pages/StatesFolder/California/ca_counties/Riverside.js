import React from 'react'
import { Link } from 'react-router-dom'

const Riverside = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>379-423-014</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://rivco.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='https://gis1.countyofriverside.us/Html5Viewer/?viewer=MMC_Public' target={"_blank"} rel='noreferrer'>Assessor County Clerk Recorder</a>&nbsp;&nbsp;&nbsp; (Free APNS)
        <br />
        <br />
        <a href='http://weblink.rctlma.org/WebLink/Search_tran.aspx?cr=1' target={"_blank"} rel='noreferrer'>Map Inquire</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <br />
        <a href='https://rctlma.org/trans/Survey/Records-of-Survey-Corner-Records-Monument-Inspections' target={"_blank"} rel='noreferrer'>Transportation Department</a>&nbsp;&nbsp;&nbsp;(Free Maps)

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>4080 Lemon Street</p>
        <p>Riverside, California 92501</p>
        <p><strong>Phone: </strong> (951) 955-1000</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='https://www.dot.ca.gov/dist8' target={"_blank"} rel='noreferrer'>Caltrans District 8</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>464 West 4th Street</p>
        <p>San Bernardino, CA 92401</p>
        <br />
        <p><strong>Contact:</strong></p>
        <p>(866) 383-4631</p>
        <p>(909) 383-4631</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Riverside