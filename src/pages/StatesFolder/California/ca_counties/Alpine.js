import React from 'react'
import { Link } from 'react-router-dom'

const Alpine = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Counties</button></Link>
        <h1 className='title'>Alpine</h1>
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

      <div className='span'>
        <h3>Links:</h3>
        <a href='http://www.alpinecountyca.gov/145/Maps-Property-Information' target={'_blank'} rel="noreferrer">Official Website</a>
      </div>

    </div>
  )
}

export default Alpine