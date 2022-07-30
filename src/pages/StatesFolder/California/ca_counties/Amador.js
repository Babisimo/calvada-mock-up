import React from 'react'
import { Link } from 'react-router-dom'

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
        <a href='https://www.amadorgov.org/assessor-parcel-maps' target={'_blank'} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;&nbsp;{"(Free PDF Assessors Parcel Maps)"}
        <br />
        <a href='amadorgov.org/departments/information-technology/gis/gis-viewer-and-parcel-search' target={'_blank'} rel='noreferrer'>GIS Viewer</a>
        <br />
        <a href='https://camapsource.com/amador-county/' target={'_blank'} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps & Plats, Subdivisions)
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

        <br />

        <h4>Request Record Maps by Email:</h4>
        <p>Attach <strong><a href='https://postmile.dot.ca.gov/PMQT/PostmileQueryTool.html?' target={'_blank'} rel='noreferrer'>Postmile Info</a></strong></p>

        <br />

        <h4>Contact:</h4>
        <p>Eddie Young</p>
        <p>eddie_young@dot.ca.gov</p>

        <br />

        <p>1976 East Charter Way / East Dr. Martin Luther King Jr. Blvd</p>
        <p>Stockton, CA 95205</p>
        <p><strong>Public Information Office:</strong> (209) 948-7543</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default Amador