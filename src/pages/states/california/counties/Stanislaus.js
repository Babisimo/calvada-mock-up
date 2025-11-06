import React from 'react'
import { Link } from 'react-router-dom'
import District10 from '../caltrans_districts/District10'


const Stanislaus = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Stanislaus County</h1>
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
        <a href='https://www.stancounty.com/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='http://qa.co.stanislaus.ca.us/AssessorWeb/public/app.jsp?inquiryType=VALUE_NOTICE_SEARCH' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://open-data-stancounty-gis.hub.arcgis.com/' target={"_blank"} rel='noreferrer'>GIS Mapping Applications</a>
        <br />
        <a href='https://stancounty-gis.maps.arcgis.com/apps/webappviewer/index.html?id=8ed16a887b0e49b48e8cdabec45f7e81' target={"_blank"} rel='noreferrer'>Record Maps GIS</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District10 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Stanislaus