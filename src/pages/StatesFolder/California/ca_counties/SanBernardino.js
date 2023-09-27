import React from 'react'
import { Link } from 'react-router-dom'
import District8 from '../CaltransDistricts/District8'

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
        <a href='https://www.sbcity.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='http://www.sbcounty.gov/assessor/pims/(S(z2yqm24244gskf1mzepvqq2a))/PIMSINTERFACE.ASPX' target={"_blank"} rel='noreferrer'>Property Information System</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://sbcountydpw.maps.arcgis.com/apps/webappviewer/index.html?id=998f9db88f77437cbb0842885685fd87' target={"_blank"} rel='noreferrer'>Surveyor's Public Map - GIS (OLD)</a>
        <br />
        <a href='https://experience.arcgis.com/experience/a1a8b62daed444d2ad76caae4327f91a' target={"_blank"} rel='noreferrer'>Surveyor's Public Map - GIS (NEW)</a>&nbsp;&nbsp;&nbsp;(APNs | Parcel Maps | Record Of Survey | Tract Maps | Corner Record | Miscellaneous Survey | Vertical & Horizontal Control ) - Free
        <br />
        <a href='https://lus.sbcounty.gov/planning-home/zoning-and-overlay-maps/zoning-maps/' target={"_blank"} rel='noreferrer'>Land Use</a>&nbsp;&nbsp;&nbsp;(General Plan Update | Mapping | Land Use Zoning Disctrict Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/825+E+3rd+St,+San+Bernardino,+CA+92415/data=!4m2!3m1!1s0x80c353559913cb3d:0x19a9a29e099a8411?sa=X&ved=2ahUKEwjG9dLq3NT_AhVahu4BHWhcBVkQ8gF6BAgYEAI' target='_blank' rel='noreferrer'>825 East Third Street<br/>San Bernardino, California 92415</a>
        <br />
        <br />
        <h4>County Surveyor:</h4>
        <p>Mike Raihle | (909) 387-8149</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District8 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanBernardino