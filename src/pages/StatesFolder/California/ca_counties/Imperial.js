import React from 'react'
import { Link } from 'react-router-dom'
import District11 from '../CaltransDistricts/District11'

const Imperial = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Imperial County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <br />
        <a href='https://www.icpds.com/planning/maps' target={"_blank"} rel='noreferrer'>GIS Mapping Applications</a>&nbsp;&nbsp;&nbsp;(General Plan, Zoning Information, etc.)
        <br />
        <a href='https://www.icpds.com/planning/maps' target={"_blank"} rel='noreferrer'>Assessors GIS</a>&nbsp;&nbsp;&nbsp;(APNs)
        <br />
        <a href='https://www.mediafire.com/folder/q354hmv2hcr73/Parcel_Maps' target={"_blank"} rel='noreferrer'>Parcel Maps</a>
        <br />
        <a href='https://www.mediafire.com/folder/y36infptag874/Record+of+Surveys' target={"_blank"} rel='noreferrer'>Record of Survey Maps</a>
        <br />
        <a href='https://www.mediafire.com/folder/a6a7pwm6ujbf2/LS' target={"_blank"} rel='noreferrer'>LS Maps</a>
        <br />
        <a href='https://www.mediafire.com/folder/73jtpesk818s4/Final+Maps' target={"_blank"} rel='noreferrer'>Final Maps</a>
        <br />
        <a href='https://www.mediafire.com/folder/7peq1fa35c8dg/Official+Maps' target={"_blank"} rel='noreferrer'>Official Maps</a>
        <br />
        <a href='https://www.mediafire.com/folder/gf0v0rgcgtz9q/Corner+Records' target={"_blank"} rel='noreferrer'>Corner Records</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District11 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Imperial