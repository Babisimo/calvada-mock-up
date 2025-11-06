import React from 'react'
import { Link } from 'react-router-dom'
import District10 from '../caltrans_districts/District10'

const Alpine = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Alpine County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>03-120-011-0-0</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='http://www.alpinecountyca.gov/145/Maps-Property-Information' target={'_blank'} rel="noreferrer">Official Website</a>
        <br />
        <a href='https://camapsource.com/alpine/' target={'_blank'} rel="noreferrer">CA Map Source</a>&nbsp;&nbsp;&nbsp;(Free APNS, Record Maps)
        <br />
        <a href='https://www.mediafire.com/folder/iarqew8xvcpa3/Alpine' target={'_blank'} rel="noreferrer">Record Maps</a>&nbsp;&nbsp;&nbsp;
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

export default Alpine