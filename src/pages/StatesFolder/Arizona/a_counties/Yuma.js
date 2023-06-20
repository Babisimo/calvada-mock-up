import React from 'react'
import { Link } from 'react-router-dom'
import Adot from '../AZ_Components/adot'

const Yuma = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Yuma County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://geo-viewer.yumacountyaz.gov/Html5Viewer/index.html?viewer=YumaCountyPublicApplication' target={"_blank"} rel='noreferrer'>GIS</a>&nbsp;&nbsp;&nbsp;&nbsp;(Free Record Maps)
        <br />
        <a href='https://yumacountyaz-recorder.tylerhost.net/recorder/eagleweb/docSearch.jsp' target={"_blank"} rel='noreferrer'>Document Search</a>&nbsp;&nbsp;&nbsp;&nbsp;(Free Record Maps & Deeds)
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

export default Yuma