import React from 'react'
import { Link } from 'react-router-dom'

const SanBernardino = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Bernardino County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>0350172290000&nbsp;&nbsp;&nbsp;&nbsp;(0350-172-29)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='http://www.sbcounty.gov/assessor/pims/(S(z2yqm24244gskf1mzepvqq2a))/PIMSINTERFACE.ASPX' target={"_blank"} rel='noreferrer'>Property Information System</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <br />
        <a href='https://sbcountydpw.maps.arcgis.com/apps/webappviewer/index.html?id=998f9db88f77437cbb0842885685fd87' target={"_blank"} rel='noreferrer'>Surveyor's Public Map</a>&nbsp;&nbsp;&nbsp;( Parcel Maps | Record Of Survey | Tract Maps | Corner Record | Miscellaneous Survey | Vertical & Horizontal Control ) - Free
        <br />
        <br />
        <a href='http://www.sbcounty.gov/assessor/pims/(S(z2yqm24244gskf1mzepvqq2a))/PIMSINTERFACE.ASPX' target={"_blank"} rel='noreferrer'>Land Use</a>&nbsp;&nbsp;&nbsp;(General Plan Update | Mapping | Land Use Zoning Disctrict Maps) <strong>LINK NOT WORKING</strong>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>825 East Third Street</p>
        <p>San Bernardino, California 92415</p>
        <h4>County Surveyor:</h4>
        <p>Mike Raihle | (909) 387-8149</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='' target={"_blank"} rel='noreferrer'>Caltrans Disctrict 8</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>464 West 4th Street San Bernardino, California 92401</p>

        <p><strong>Contact: </strong> (866) 383-4631 | (909) 383-4631 </p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanBernardino