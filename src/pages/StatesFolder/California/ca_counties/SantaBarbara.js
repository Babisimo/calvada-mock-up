import React from 'react'
import { Link } from 'react-router-dom'
import District5 from '../CaltransDistricts/District5'

const SantaBarbara = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Santa Barbara County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>069090056 &nbsp;&nbsp;&nbsp; (069-090-056)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.countyofsb.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://apps.simplelayers.com/public/viewer/979' target={"_blank"} rel='noreferrer'>County Surveyor GIS</a>&nbsp;&nbsp;&nbsp;(Free Record Maps, Corner Records)
        <br />
        <a href='https://sbcassessor.com/Assessor/AssessorParcelMap.aspx' target={"_blank"} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/105+E+Anapamu+St,+Santa+Barbara,+CA+93101/@34.4252375,-119.7032854,19.25z/data=!4m6!3m5!1s0x80e914875bede043:0x7f84836c4d7a8e98!8m2!3d34.4252526!4d-119.7031015!16s%2Fg%2F11bw42l__h?entry=ttu' target='_blank' rel='noreferrer'>105 E Anapamu Street<br/>Santa Barbara, California 93101</a>
        <br/>
        <br/>
        <p><strong>Phone: </strong>(805) 681-4200</p>
        <a href='https://www.countyofsb.org/178/Directory' target={"_blank"} rel='noreferrer'>Directory</a>

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

    </div>
  )
}

export default SantaBarbara