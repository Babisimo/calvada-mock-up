import React from 'react'
import { Link } from 'react-router-dom'

const Tulare = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Tulare County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>123-456-789-000</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://tularecounty.ca.gov/county/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://tularecounty.ca.gov/assessor/nnpages/parcel-search/' target={"_blank"} rel='noreferrer'>Assessor Map</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='http://publicdocs.co.tulare.ca.us/Questys.CMx.Surveyorweb/Browse/Default.aspx' target={"_blank"} rel='noreferrer'>Surveyor Documents</a>&nbsp;&nbsp;&nbsp;(Free Record Maps, Corner Records, Benchmarks, etc.)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>5961 S. Mooney Blvd.</p>
        <p>Visalia, CA 93277</p>
        <p><strong>Phone: </strong>(559) 624-7152</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist6/' target={"_blank"} rel='noreferrer'>Caltrans District 6</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>Fresno Fair Grounds, Educational Building</p>
        <p>1121 S. Chance Avenue, Fresno, California 93702</p>
        <h4>Telephone:</h4>
        <p>(559) 444-2409 (Fresno/Madera)</p>
        <p>(559) 488-4082 (Tulare/Kings)</p>
        <p>(661) 326-3968 (Kern)</p>
        <p>(559) 488-4067</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Tulare