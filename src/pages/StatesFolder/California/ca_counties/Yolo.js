import React from 'react'
import { Link } from 'react-router-dom'

const Yolo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Yolo County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.yolocounty.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://yolo.maps.arcgis.com/apps/webappviewer/index.html?id=07aafdb9df8b40fea378723de601c69b&extent=-13651962.5683%2C4642419.391%2C-13505203.474%2C4708996.0427%2C102100' target={"_blank"} rel='noreferrer'>GIS Property Information</a>&nbsp;&nbsp;&nbsp;(Free APNS)
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