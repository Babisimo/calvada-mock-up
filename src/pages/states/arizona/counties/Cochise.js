import React from 'react'
import { Link } from 'react-router-dom'
import Adot from '../components/adot'

const Cochise = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Cochise County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>11414177A</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://cochise.maps.arcgis.com/apps/webappviewer/index.html?id=37d793d478664634b4de3ad8042f248a' target={"_blank"} rel='noreferrer'>Parcel Information GIS</a>&nbsp;&nbsp;&nbsp;(Free APN Information - Get APN Map from DataTree)
        <br />
        <a href='https://gis-cochise.opendata.arcgis.com/apps/894fc296052d43a9ac52a088f8ed3fd0/explore' target={"_blank"} rel='noreferrer'>Plat and Survey Index</a>&nbsp;&nbsp;&nbsp;(Free Record of Survey, Maps, Plats)
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

export default Cochise