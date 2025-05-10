import React from 'react'
import { Link } from 'react-router-dom'
import District7 from '../CaltransDistricts/District7'

const LosAngeles = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Los Angeles County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>2463001900 &nbsp;&nbsp;&nbsp; (2463-001-900)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://maps.assessor.lacounty.gov/m/' target={"_blank"} rel='noreferrer'>Assessor Parcel GIS</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://portal.assessor.lacounty.gov/' target={"_blank"} rel='noreferrer'>Assessor Parcel Portal</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://dpw.lacounty.gov/smpm/landrecords/' target={"_blank"} rel='noreferrer'>Land Records / Record Maps GIS</a>&nbsp;&nbsp;&nbsp;(Free Maps, Corner Records, Field Books)
        <br />
        <a href='https://planning.lacounty.gov/maps-and-gis/interactive-gis-web-mapping-apps/' target={"_blank"} rel='noreferrer'>Interactive GIS Apps</a>&nbsp;&nbsp;&nbsp;(Zoning)
        <br />
        <a href='https://pw.lacounty.gov/des/design/hwyMain.cfm' target={"_blank"} rel='noreferrer'>Design Construction Plans</a>&nbsp;&nbsp;&nbsp;(As-Built Plans, Drainage)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District7 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default LosAngeles