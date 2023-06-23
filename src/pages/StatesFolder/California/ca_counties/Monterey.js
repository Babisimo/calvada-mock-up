import React from 'react'
import { Link } from 'react-router-dom'
import District5 from '../CaltransDistricts/District5'

const Monterey = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Monterey County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.co.monterey.ca.us/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://maps.co.monterey.ca.us/wab/parcelreportwebapp/' target={"_blank"} rel='noreferrer'>Assessor Maps GIS</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://maps.co.monterey.ca.us/portal/apps/webappviewer/index.html?id=a43bf9d208474b7c941a09eeeea7dea2' target={"_blank"} rel='noreferrer'>Survey Records Viewer GIS</a>&nbsp;&nbsp;&nbsp;(Property Information | Free Record Maps)
        <br />
        <a href='https://montereycountyca-web.tylerhost.net/Montereyweb/action/ACTIONGROUP284S187S1' target={"_blank"} rel='noreferrer'>Monterey County Clerk-Recorder</a>&nbsp;&nbsp;&nbsp;(Official Records)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/468+W+Alisal+St+2nd+Floor,+Salinas,+CA+93901/@36.6727214,-121.6667464,17z/data=!3m1!4b1!4m5!3m4!1s0x808df8dda325302d:0xa1a782f631a893f7!8m2!3d36.6727214!4d-121.6667464?entry=ttu' target='_blank' rel='noreferrer'>468 W. Alisal St. | 2nd Floor<br/>Salinas, California 93901</a>

        <br />
        <br />

        <p><strong>Phone:</strong> (831) 755-4800</p>
        <p><strong>Monterey:</strong> (831) 647-7748</p>
        <p><strong>Fax:</strong> (831) 755-4958</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District5 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div >
  )
}

export default Monterey