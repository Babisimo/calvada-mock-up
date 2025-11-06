import React from 'react'
import { Link } from 'react-router-dom'
import Adot from '../components/adot'

const Maricopa = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Maricopa County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>111-42-114 &nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp; 112-21-072C</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://maps.mcassessor.maricopa.gov/' target={"_blank"} rel='noreferrer'>Land Information System</a>&nbsp;&nbsp;&nbsp;(Free APNS & Maps)
        <br />
        <a href='https://www.maricopa.gov/3942/GIS-Mapping-Applications' target={"_blank"} rel='noreferrer'>Land Survey Interactive Map</a>&nbsp;&nbsp;&nbsp;(NGS Control)
        <br />
        <a href='https://mcassessor.maricopa.gov/mcs/?q=' target={"_blank"} rel='noreferrer'>APN Map Search</a>&nbsp;&nbsp;&nbsp;(Free APNs & Record Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>ADOT:</h3>
        <Adot />
      </span>

    </div>
  )
}

export default Maricopa