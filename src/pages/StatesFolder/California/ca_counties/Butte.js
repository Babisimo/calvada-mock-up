import React from 'react'
import { Link } from 'react-router-dom'

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
        <br />
        <a href='http://www.buttecounty.net/publicworks/GIS-Maps' target={'_blank'} rel="noreferrer">Public Works</a>&nbsp;&nbsp;&nbsp;Free Benchmarks
        <br />
        <br />
        <a href='https://assr.parcelquest.com/Home/Disclaimer' target={'_blank'} rel="noreferrer">Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;Free APNs
        <br />
        <br />
        <a href='http://gis.buttecounty.net/Public/index.html?viewer=dssearch' target={'_blank'} rel="noreferrer">GIS Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>7 County Center Drive</p>
        <p>Oroville California, 95965</p>
        <p>Phone: (530) 538-7681</p>
        <p>Fax: (530) 538-7171</p>
        <p>Department Hours: Monday-Friday 7:30 AM to 4:00 PM</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist10/' target={'_blank'} rel="noreferrer">Caltrans District 3</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>703 B Street</p>
        <p>Marysville CA, 95901</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Contacts:</h3>
        <p>Anna Cielsa, LS | Surveyor Associate | (530) 538-7681 x2034 | aciesla@buttecounty.net</p>
        <p>Danny Chow | Engineering Technician Associate | (530) 538-7681 x2033 | dchow@buttecounty.net</p>
        <p>Joe Von Kleist | Survey Party Chief | (530) 538-7681 x2031 | jvonkleist@buttecounty.net</p>
        <p>Dave Landon | Survey Party Chief  | (530) 538-7681 x2035 | dlandon@buttecounty.net</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default Butte