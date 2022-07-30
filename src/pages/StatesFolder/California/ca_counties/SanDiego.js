import React from 'react'
import { Link } from 'react-router-dom'

const SanDiego = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Diego County</h1>
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
        <a href='https://www.sandiegocounty.gov/content/sdc/home.html' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sdgis.sandag.org/' target={"_blank"} rel='noreferrer'>GIS Interactive Map</a>
        <br />
        <a href='https://srs.sandiegocounty.gov/' target={"_blank"} rel='noreferrer'>Survey Records System</a><p>(Parcel Maps, Record of Survey, Tract Maps, Corner Record, Miscellaneous Map, Record Survey, Miscellaneous Survey, Official Center Line <strong><em>Credit Card Required</em></strong>)</p>
        <br />
        <a href='https://www.sandiegocounty.gov/content/sdc/dpw/surveyor/vertcontrol.html' target={"_blank"} rel='noreferrer'>Vertical Datum</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>5201 Ruffin Road. Suite P, MS0326</p>
        <p>San Diego, California 92123</p>
        <p><strong>Phone: </strong>(858) 694-3672</p>
        <p><strong>Fax: </strong>(858) 495-5263</p>
        <p><strong>E-Mail: </strong>terry.connors@sdcounty.ca.gov</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>

        <br />

        <h4>Request Record Maps by Email:</h4>
        <p>Attach <strong><a href='https://postmile.dot.ca.gov/PMQT/PostmileQueryTool.html?' target={'_blank'} rel='noreferrer'>Postmile Info</a></strong></p>

        <br />

        <h4>Contact:</h4>

        <p>Ben Sarkisian | <a href='mailto:ben_sarkisian@dot.ca.gov'>ben_sarkisian@dot.ca.gov</a></p>

        <br />

        <strong>San Diego and Imperial Counties</strong>
        <p>4050 Taylor Street, San Diego, California 92110</p>
        <p><strong>General Number: </strong>(619) 688-6699</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanDiego