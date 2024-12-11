import React from 'react'
import { Link } from 'react-router-dom'
import District3 from '../CaltransDistricts/District3'

const Butte = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Butte County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>006-380-001</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='http://www.buttecounty.net/' target={'_blank'} rel="noreferrer">Official Website</a>
        <br />
        <a href='https://gisportal.buttecounty.net/portal/apps/webappviewer/index.html?id=3233e5b8cea24348bcbd4c2646497349' target={'_blank'} rel="noreferrer">Public Works</a>&nbsp;&nbsp;&nbsp;(Free Benchmarks, GIS)
        <br />
        <a href='https://assr.parcelquest.com/Home' target={'_blank'} rel="noreferrer">Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNs)
        <br />
        <a href='http://gis.buttecounty.net/Public/index.html?viewer=dssearch' target={'_blank'} rel="noreferrer">GIS Mapping</a>
        <br />
        <a href='https://camapsource.com/butte/' target={'_blank'} rel="noreferrer">CA Map Source</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/7+County+Center+Dr,+Oroville,+CA+95965/@39.5250632,-121.5740924,17z/data=!3m1!4b1!4m6!3m5!1s0x809cb599dfabfcef:0xb554446d5a56cc7!8m2!3d39.5250591!4d-121.5715175!16s%2Fg%2F11c447jkm3?entry=ttu' target='_blank' rel='noreferrer'>7 County Center Drive <br/>Oroville CA, 95965</a>
        <br />
        <br />
        <p><strong>Phone:</strong> (530) 538-7681</p>
        <p><strong>Fax:</strong> (530) 538-7171</p>
        <p><strong>Department Hours:</strong> Monday-Friday 7:30 AM to 4:00 PM</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District3 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Contacts:</h3>
        <p><strong>Anna Cielsa, LS</strong> | Surveyor Associate | (530) 538-7681 x2034 | <a href='mailto:aciesla@buttecounty.net'>aciesla@buttecounty.net</a></p>
        <p><strong>Danny Chow</strong> | Engineering Technician Associate | (530) 538-7681 x2033 | <a href='mailto:dchow@buttecounty.net'>dchow@buttecounty.net</a></p>
        <p><strong>Joe Von Kleist</strong> | Survey Party Chief | (530) 538-7681 x2031 | <a href='mailto:jvonkleist@buttecounty.net'>jvonkleist@buttecounty.net</a></p>
        <p><strong>Dave Landon</strong> | Survey Party Chief  | (530) 538-7681 x2035 | <a href='mailto:dlandon@buttecounty.net'>dlandon@buttecounty.net</a></p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default Butte