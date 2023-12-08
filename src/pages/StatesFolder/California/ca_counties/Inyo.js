import React from 'react'
import { Link } from 'react-router-dom'
import District9 from '../CaltransDistricts/District9'

const Inyo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Inyo County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>0011101400 &nbsp;&nbsp;&nbsp; (001-110-14)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://gis.inyoco.com/arcgis/apps/webappviewer/index.html?id=4f0e9813612040c3994f0ec22235fba4' target={"_blank"} rel='noreferrer'>Inyo County GIS Data</a>&nbsp;&nbsp;&nbsp;(APNs, Record Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District9 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Inyo