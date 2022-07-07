import React from 'react'
import { Link } from 'react-router-dom'

const Shasta = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>Shasta County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>077-490-005</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.co.shasta.ca.us/index.aspx' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='https://www.co.shasta.ca.us/index/assessor/assessment-inquiry' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <br />
        <a href='https://www.co.shasta.ca.us/index/gis' target={"_blank"} rel='noreferrer'>GIS</a>&nbsp;&nbsp;&nbsp;(APNS, Zoning)
        <br />
        <br />
        <a href='https://www.co.shasta.ca.us/index/gis/Data_Download.aspx' target={"_blank"} rel='noreferrer'>GIS Download Data Sets</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Shasta