import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../CaltransDistricts/District4'

const Solano = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Solano County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>003-042-360</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.solanocounty.com/default.asp' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='http://www.solanocounty.com/depts/ar/viewparcelmaps.asp' target={"_blank"} rel='noreferrer'>Assessor Maps Retrieval System</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.solanocounty.com/depts/ar/asr_filedmaps.asp' target={"_blank"} rel='noreferrer'>Land Records | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='http://gis.solanocounty.com/solanomaps/' target={"_blank"} rel='noreferrer'>GIS Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>675 Texas Street, Suite 5500</p>
        <p>Fairfield, CA 94533</p>
        <p><strong>Phone:</strong> (707) 784-6765</p>
        <p><strong>Fax:</strong> (707) 784-2894</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District4 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


      <p></p>
    </div>
  )
}

export default Solano