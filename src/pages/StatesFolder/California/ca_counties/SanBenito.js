import React from 'react'
import { Link } from 'react-router-dom'
import District5 from '../CaltransDistricts/District5'

const SanBenito = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Benito County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>0572300220 &nbsp;&nbsp;&nbsp; (057-230-022-000)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://gis.cosb.us/Html5Viewer_2_0/Index.html?configBase=https://gis.cosb.us/Geocortex/Essentials/REST/sites/SBC/viewers/Public/virtualdirectory/Resources/Config/Default' target={"_blank"} rel='noreferrer'>APN GIS</a>&nbsp;&nbsp;&nbsp;(Free APNs)
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

export default SanBenito