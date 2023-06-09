import React from 'react'
import { Link } from 'react-router-dom'
import District10 from '../CaltransDistricts/District10'

const Amador = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Amador County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>011-090-024</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.amadorgov.org/home' target={'_blank'} rel='noreferrer'>Official Website</a>
        <br />
        <a href='https://gisviewer.amadorgov.org/GPV/ParcelSearch.aspx' target={'_blank'} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;&nbsp;(Free PDF Assessors Parcel Maps)
        <br />
        <a href='https://www.amadorgov.org/departments/information-technology/gis/gis-viewer-and-parcel-search' target={'_blank'} rel='noreferrer'>GIS Viewer</a>
        <br />
        <a href='https://camapsource.com/amador/' target={'_blank'} rel='noreferrer'>CA Map Source</a>&nbsp;&nbsp;&nbsp;(Free Record Maps & Plats, Subdivisions)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>810 Court Street</p>
        <p>Jackson California, 95642</p>
        <p><strong>Phone:</strong> (209) 223-6371</p>
        <p><strong>Department Hours:</strong> Monday - Friday 8:00 AM to 5:00 PM</p>
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

export default Amador