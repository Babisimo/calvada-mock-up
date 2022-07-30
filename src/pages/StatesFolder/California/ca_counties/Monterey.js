import React from 'react'
import { Link } from 'react-router-dom'

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
        <a href='https://assr.parcelquest.com/Home' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.co.monterey.ca.us/government/departments-i-z/information-technology/gis-mapping-data' target={"_blank"} rel='noreferrer'>County GIS</a>&nbsp;&nbsp;&nbsp;(Property Information | Free Record Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>468 W. Alisal St. | 2nd Floor</p>
        <p>Salinas, California 93901</p>
        <p><strong>Phone:</strong> (831) 755-4800</p>
        <p><strong>Monterey:</strong> (831) 647-7748</p>
        <p><strong>Fax:</strong> (831) 755-4958</p>
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
        <p>Amar, Jorge | <a href='mailto:Jorge.Amar@dot.ca.gov'>Jorge.Amar@dot.ca.gov</a></p>
        <p>Caltrans District 5 - (805) 549-3060</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div >
  )
}

export default Monterey