import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../CaltransDistricts/District4'

const SantaClara = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Santa Clara County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>132-40-012</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://home.sccgov.org/home' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://www.sccassessor.org/index.php/online-services/property-search/real-property' target={"_blank"} rel='noreferrer'>Assessor Maps Information System</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://sccplanning.maps.arcgis.com/apps/webappviewer/index.html?id=bc21a949580746968cb7139386996978' target={"_blank"} rel='noreferrer'>GIS County Surveyors</a>&nbsp;&nbsp;&nbsp;(Free APNS, Corner Records)
        <br />
        <a href='https://geoess.sccgov.org/discovergis/asbuiltmap' target={"_blank"} rel='noreferrer'>Record Drawing Maps</a>&nbsp;&nbsp;&nbsp;(Street Improvement Plans, As-Built Plans)
        <br />
        {/* <a href='https://www.valleywater.org/interactive-benchmark-locator' target={"_blank"} rel='noreferrer'>Interactive Benchmark Locator</a> */}
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/County+of+Santa+Clara+Office+of+the+County+Clerk-Recorder/@37.352169,-121.9070364,17z/data=!3m2!4b1!5s0x808fcb7faf7f1cc5:0x9cf5b0ffee88c992!4m6!3m5!1s0x808fcb7fba8c47e7:0x253cbe0fb2fa8945!8m2!3d37.3521648!4d-121.9044615!16s%2Fg%2F1hc5qks95?entry=ttu' target='_blank' rel='noreferrer'>70 West Hedding Street
        East Wing <br/> 11th Floor <br/> San Jose, California 95110
        </a>

        <br />
        <br />

        <h4>General Contact Information:</h4>
        <p><strong>Main Number: </strong>(480) 229-5151</p>
        <p><strong>Media Line: </strong>(480) 229-5119</p>

        <br />

        <h4>Office of the County Executive:</h4>
        <p><a href='mailto:SCCPublicAffairs@ceo.sccgov.org'>SCCPublicAffairs@ceo.sccgov.org</a></p>

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

    </div>
  )
}

export default SantaClara