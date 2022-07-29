import React from 'react'
import { Link } from 'react-router-dom'

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
        <a href='http://www.sjmap.org/website/asrpdf/' target={"_blank"} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.sjgov.org/department/pwk/home' target={"_blank"} rel='noreferrer'>Surveyor Land Records System</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://sjc-gis.maps.arcgis.com/apps/webappviewer/index.html?id=735c39e1de274062abeb27b70ad2e0a9' target={"_blank"} rel='noreferrer'>GIS Mapping</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>1810 E. Hazelton Avenue</p>
        <p>PO Box 1810</p>
        <p>Stockton, California 85201</p>

        <p><strong>Hours: </strong>Monday - Friday 8:00 AM - 5:00 PM</p>
        <p><strong>Main Phone: </strong>(209) 468-3000</p>
        <p><strong>Email: </strong>PWInfoSupport@sjgov.org</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <h3>Request Record Maps by Email:</h3>
        <p><strong>Attach Postmile Info <a href='https://postmile.dot.ca.gov/PMQT/PostmileQueryTool.html?' target={'_blank'} rel='noreferrer'>Here</a></strong></p>

        <br />

        <h4>Contact:</h4>
        <p>Eddie Young</p>
        <p>eddie_young@dot.ca.gov</p>

        <br />

        <p>1976 East Charter Way / East Dr. Martin Luther King Jr. Blvd.</p>
        <p>Stockton, CA 95205</p>
        <p><strong>Public Information Office:</strong> (209) 948-7543</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanJoaquin