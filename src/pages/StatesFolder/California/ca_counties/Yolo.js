import React from 'react'
import { Link } from 'react-router-dom'

const Yolo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>Yolo County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.yolocounty.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <br />
        <a href='https://www.yolocounty.org/community-development/planning-public-works/geographic-information-system-gis-/use-gis' target={"_blank"} rel='noreferrer'>GIS Property Information</a>&nbsp;&nbsp;&nbsp;(Free APNS | <strong>LINK NOT WORKING</strong>)
        <br />
        <br />
        <a href='https://camapsource.com/yolo-county/' target={"_blank"} rel='noreferrer'>CA Map Source</a>&nbsp;&nbsp;&nbsp;(Free Assessment Maps, Map Books, Parcel Maps, etc)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist3/' target={"_blank"} rel='noreferrer'>Caltrans District 3</a>&nbsp;&nbsp;&nbsp;(<strong>LINK NOT WORKING</strong>)
        <p>703 B Street</p>
        <p>Marysville, California 95901</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Yolo