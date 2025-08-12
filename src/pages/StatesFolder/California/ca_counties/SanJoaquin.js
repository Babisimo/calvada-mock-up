import React from 'react'
import { Link } from 'react-router-dom'
import District10 from '../CaltransDistricts/District10'

const SanJoaquin = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Joaquin County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>145-064-02</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.sjgov.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sjmap.org/DistrictViewer/' target={"_blank"} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://sjc-gis.maps.arcgis.com/apps/webappviewer/index.html?id=735c39e1de274062abeb27b70ad2e0a9' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Record Maps)
        <br />
        <a href='https://lfweb.sjgov.org/WebLink/Browse.aspx?dbid=0&cr=1' target={"_blank"} rel='noreferrer'>Surveyor Land Records System (Directory)</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://sjc-gis.maps.arcgis.com/apps/webappviewer/index.html?id=1985b52403334249a510715aeca3873e' target={"_blank"} rel='noreferrer'>Corner Records</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://san-joaquin-county-public-works-sjc-gis.hub.arcgis.com/datasets/sjc-gis::benchmarks-1/explore?layer=0&location=37.873963%2C-121.246680%2C9.99' target={"_blank"} rel='noreferrer'>County Benchmarks</a>&nbsp;&nbsp;&nbsp;(GIS)
        <br />
        <a href='https://keithwspencer.net/Library/SanJoaquinCounty/BenchmarkBook.pdf' target={"_blank"} rel='noreferrer'>County Benchmarks</a>&nbsp;&nbsp;&nbsp;(PDF)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/1810+E+Hazelton+Ave,+Stockton,+CA+95205/@37.9503252,-121.2667918,17.25z/data=!4m6!3m5!1s0x809012b4f81db4e7:0x8d08d2d0f47be71b!8m2!3d37.9503078!4d-121.2654363!16s%2Fg%2F11bw3xc_9v?entry=ttu' target='_blank' rel='noreferrer'>1810 E. Hazelton Avenue<br/>PO Box 1810<br/>Stockton, California 85201</a>

        <br />
        <br />

        <p><strong>Hours: </strong>Monday - Friday 8:00 AM - 5:00 PM</p>
        <p><strong>Main Phone: </strong>(209) 468-3000</p>
        <p><strong>Email: </strong><a href='mailto:PWInfoSupport@sjgov.org'>PWInfoSupport@sjgov.org</a></p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District10 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanJoaquin