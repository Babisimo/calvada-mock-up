import React from "react"
import { Link } from 'react-router-dom'
import District10 from "../CaltransDistricts/District10"

const Calaveras = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Calaveras County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <br />
        <a href='https://pmaps.calaverasgov.us/' target={'_blank'} rel="noreferrer">Assessor Parcel Map Search</a>&nbsp;&nbsp;&nbsp;(Free APNS Search)
        <br />
        <a href='https://gisportal.calaverascounty.gov/portal/apps/webappviewer/index.html?id=6e2681937019448b8f4e761b22d11a6e' target={'_blank'} rel="noreferrer">Assessor Parcel Map GIS</a>&nbsp;&nbsp;&nbsp;(Free APNS GIS)
        <br />
        <a href='https://camapsource.com/Calaveras/' target={'_blank'} rel="noreferrer">Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
        <br />
        <a href='https://drive.google.com/file/d/1qdJe3zwVSBVuUtH3IoLSIrgqRy52RqMA/view?usp=drive_link' target={'_blank'} rel="noreferrer">Benchmarks</a>&nbsp;&nbsp;&nbsp;(PDF)
        <br />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Caltrans:</h3>
        <District10 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Calaveras