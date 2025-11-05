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
        <a href='https://www.solanocounty.gov/government/assessorrecorder/assessor-division/assessor-maps' target={"_blank"} rel='noreferrer'>Assessor Maps Retrieval System</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        {/* <a href='https://www.solanocounty.com/depts/ar/asr_filedmaps.asp' target={"_blank"} rel='noreferrer'>Land Records | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps) */}
        <br />
        <a href='https://solanocountygis.com/portal/apps/webappviewer/index.html?id=5cbdaf8d97d94036857c67b50decbe9b' target={"_blank"} rel='noreferrer'>GIS Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/675+Texas+St+%235500,+Fairfield,+CA+94533/data=!4m2!3m1!1s0x8085144a5f123e17:0xbde0b33b6bf68a5?sa=X&ved=2ahUKEwi1oMDX49T_AhXCOkQIHbVlC4EQ8gF6BAgSEAI' target='_blank' rel='noreferrer'>675 Texas Street, Suite 5500 <br/> Fairfield, CA 94533</a>

        <br/>
        <br/>

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

    </div>
  )
}

export default Solano