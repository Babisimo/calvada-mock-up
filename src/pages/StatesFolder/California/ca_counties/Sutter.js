import React from "react"
import { Link } from 'react-router-dom'
import District3 from "../CaltransDistricts/District3"

const Sutter = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Sutter County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <br />
        <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=6556d0deabef46f2afe00818c336e9bc' target={'_blank'} rel="noreferrer">GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free Parcel Maps, Record of Surveys, Corner Records, APNs)
        <br />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Caltrans</h3>
        <District3 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Sutter