import React from 'react'
import { Link } from 'react-router-dom'

const Alpine = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
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
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist10/' target={'_blank'} rel="noreferrer">Caltrans District 10</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>1976 East Charter Way / East Dr. Martin Luther King Jr. Blvd</p>
        <p>Stockton, CA 95205</p>
        <p>Public Information Office: (209) 948-7543</p>
      </span>

    </div>
  )
}

export default Alpine