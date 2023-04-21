import React from 'react'
import { Link } from 'react-router-dom'
import District11 from '../CaltransDistricts/District11'

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
        <a href=' https://assr.parcelquest.com/Statewide?IndexViewModel=PQGov.Models.IndexViewModel' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNs)
        <br />
        <a href='https://sdgis.sandag.org/' target={"_blank"} rel='noreferrer'>GIS Interactive Map</a>
        <br />
        <br />
        <a href='https://arcc-acclaim.sdcounty.ca.gov/' target={"_blank"} rel='noreferrer'>San Diego County Public Records</a><p>(Official Records Search <strong><em>Credit Card Required</em></strong>)</p>
        <br />
        <a href='https://srs.sandiegocounty.gov/' target={"_blank"} rel='noreferrer'>Survey Record System</a><p>(Parcel Maps, Record of Survey, Tract Maps, Corner Record, Miscellaneous Map, Record Survey, Miscellaneous Survey, Official Center Line <strong><em>Credit Card Required</em></strong>)</p>
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

        <br />

        <p><strong>Phone: </strong>(858) 694-3672</p>
        <p><strong>Fax: </strong>(858) 495-5263</p>
        <p><strong>E-Mail: </strong><a href='mailto:terry.connors@sdcounty.ca.gov'>terry.connors@sdcounty.ca.gov</a></p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District11 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanDiego