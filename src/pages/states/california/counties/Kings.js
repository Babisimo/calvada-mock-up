import React from 'react'
import { Link } from 'react-router-dom'
import District6 from '../caltrans_districts/District6'

const Kings = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Kings County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>020-017-013-000</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://assr.parcelquest.com/Statewide?IndexViewModel=PQGov.Models.IndexViewModel' target={"_blank"} rel='noreferrer'>Parcel Search</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://docs.google.com/spreadsheets/d/12RRIXXaf3BRFoNv1FSp4p3QksgWy-YkF/edit?usp=sharing&ouid=105049049012291462963&rtpof=true&sd=true' target={"_blank"} rel='noreferrer'>Corner Records & Record Maps</a>&nbsp;&nbsp;&nbsp;(Excel Sheet - Free Record Maps)
        <br />
        <a href='https://kings-county.maps.arcgis.com/apps/webappviewer/index.html?id=338d13f286174722982f74aadfd5e87e' target={"_blank"} rel='noreferrer'>GIS Viewer</a>&nbsp;&nbsp;&nbsp;(Parcel Map & Tax Rate Area Viewer)
        <br />
        <a href='https://kingscomdev.maps.arcgis.com/apps/webappviewer/index.html?id=35c6e6dac50446b9945154c9fc7f46c8' target={"_blank"} rel='noreferrer'>Zoning</a>&nbsp;&nbsp;&nbsp;(GIS)
        <br />
        <a href='https://www.countyofkings.com/departments/public-works' target={"_blank"} rel='noreferrer'>Public Works</a>&nbsp;&nbsp;&nbsp;(County Department)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District6 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Kings