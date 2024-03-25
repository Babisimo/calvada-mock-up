import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../CaltransDistricts/District4'

const Napa = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Napa County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.countyofnapa.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://gis.countyofnapa.org/portal/apps/webappviewer/index.html?id=0bbafe490c58430da719ff851c78b7fa' target={"_blank"} rel='noreferrer'>Napa County Online Public Map</a>&nbsp;&nbsp;&nbsp;(Corner Records, Zoning)
        <br />
        <a href='https://www.mediafire.com/folder/uq2u6ag1dsvgh/Corner+Records' target={"_blank"} rel='noreferrer'>Corner Records Mediafire Database</a>&nbsp;&nbsp;&nbsp;(Corner Records)
        <br />
        <a href='https://services.countyofnapa.org/FiledMapSearch' target={"_blank"} rel='noreferrer'>Filed Maps & CR Search</a>&nbsp;&nbsp;&nbsp;(APN Map, Record Maps)
        <br />
        <a href='https://www.countyofnapa.org/1602/Surveying' target={"_blank"} rel='noreferrer'>Other Surveying Services</a>&nbsp;&nbsp;&nbsp;
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>County Surveyor:</h3>
        <p><a href={`mailto:${"danielle.goshert@countyofnapa.org"}`}>{"Email Danielle Goshert"}</a></p>
        <br />
        
        <p><strong>Phone:</strong> 707-259-8380</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District4 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div >
  )
}

export default Napa