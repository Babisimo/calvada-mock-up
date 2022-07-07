import React from 'react'
import { Link } from 'react-router-dom'

const Placer = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>Placer County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>091030011 &nbsp;&nbsp;&nbsp; (091-030-011)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.placer.ca.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='https://www.placer.ca.gov/5866/Property-Details' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <br />
        <a href='https://maps.placer.ca.gov/Html5viewer/Index.html?viewer=LIS_Public.LIS_Base-Public' target={"_blank"} rel='noreferrer'>GIS Mapping</a>
        <br />
        <br />
        <a href='https://www.placer.ca.gov/3701/Zoning-Ordinance' target={"_blank"} rel='noreferrer'>Zoning Maps</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <strong>Engineering and Surveying:</strong>
        <p>3091 County Center</p>
        <p>Auburn, California 95603</p>
        <p><strong>Phone:</strong> (530)-745-3110</p>
        <p><strong>Fax:</strong> (530)-745-7589</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist3/' target={"_blank"} rel='noreferrer'>Caltrans District 3</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>703 B Street Marysville, California 95901</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Placer