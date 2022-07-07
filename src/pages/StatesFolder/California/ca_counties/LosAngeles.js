import React from 'react'
import { Link } from 'react-router-dom'

const LosAngeles = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
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
        <br />
        <a href='https://dpw.lacounty.gov/smpm/landrecords/' target={"_blank"} rel='noreferrer'>Land Records / Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps, Corner Records, Field Books)
        <br />
        <br />
        <a href='https://ladpw.org/sur/benchmark/' target={"_blank"} rel='noreferrer'>Benchmarks</a>
        <br />
        <br />
        <a href='https://planning.lacounty.gov/gis/interactive' target={"_blank"} rel='noreferrer'>Interactive GIS Web Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist07/' target={"_blank"} rel='noreferrer'>Caltrans District 7</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)

        <div>
          <h4>Request ROW Maps by Email:</h4>
          <p><strong>ATTATCH ADDRESS & APN MAPS</strong></p>
          <p><strong>Contact:</strong> Victor Zamora | victor_zamora@dot.ca.gov</p>
        </div>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default LosAngeles