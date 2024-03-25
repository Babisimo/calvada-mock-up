import React from 'react'
import { Link } from 'react-router-dom'
import Adot from '../AZ_Components/adot'

const SantaCruzAZ = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Santa Cruz County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.santacruzcountyaz.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sccaz-gis.maps.arcgis.com/home/index.html' target={"_blank"} rel='noreferrer'>GIS</a>
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

export default SantaCruzAZ