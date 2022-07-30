import React from 'react'
import { Link } from 'react-router-dom'

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
        <a href='https://maps.assessor.lacounty.gov/m/' target={"_blank"} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://dpw.lacounty.gov/smpm/landrecords/' target={"_blank"} rel='noreferrer'>Land Records / Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps, Corner Records, Field Books)
        <br />
        <a href='https://ladpw.org/sur/benchmark/' target={"_blank"} rel='noreferrer'>Benchmarks</a>
        <br />
        <a href='https://planning.lacounty.gov/gis/interactive' target={"_blank"} rel='noreferrer'>Interactive GIS Web Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='https://www.arcgis.com/home/webmap/viewer.html?webmap=be47fd3f5cc349f28f2871b5a6c07c6f&extent=-118.7232,33.7525,-117.538,34.5967' target={"_blank"} rel='noreferrer'>Caltrans District 7</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default LosAngeles