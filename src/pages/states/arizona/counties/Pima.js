import React from 'react'
import { Link } from 'react-router-dom'
import Adot from '../components/adot'

const Pima = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Pima County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://webcms.pima.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://pimamaps.pima.gov/HtmlPubViewer/index.html?configBase=https://pimamaps.pima.gov/Geocortex/Essentials/PublicPM/REST/sites/surveysite/viewers/surveymap/virtualdirectory/Resources/Config/Default&layerName=NAVD%201988%20Elevation%20Circuit&zExtent=1&runWorkflow=primarysource-UrlQuery' target={"_blank"} rel='noreferrer'>GIS</a>
        <br />
        <a href='https://pimacountyaz-web.tylerhost.net/web/search/DOCSEARCH55S10' target={"_blank"} rel='noreferrer'>Pima County Recorder</a>
        <br />
        <a href='https://onbase.pima.gov/PublicAccess/TR_NextGen_Multi/etc/cq/' target={"_blank"} rel='noreferrer'>Maps & Records</a>&nbsp;&nbsp;&nbsp;(Road Maps, Construction Plans, Etc.)
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

export default Pima