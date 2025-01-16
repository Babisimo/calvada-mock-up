import React from 'react'
import { Link } from 'react-router-dom'
import District3 from '../CaltransDistricts/District3'

const Sacramento = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Sacramento County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>013-0244-025-0000</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.saccounty.gov/Pages/default.aspx' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://generalmap.gis.saccounty.gov/JSViewer/county_portal.html' target={"_blank"} rel='noreferrer'>GIS Mapping</a>
        <br />
        <a href='https://assr.parcelquest.com/Statewide/Disclaimer' target={"_blank"} rel='noreferrer'>APNS</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='http://www.sacmaps.com/' target={"_blank"} rel='noreferrer'>County Maps</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
        <br />
        <a href='http://www.sacmaps.com/NAVD%2088%20Database/Sacramento%20County%20BM%27s%20NAVD%2088.pdf' target={"_blank"} rel='noreferrer'>County Benchmarks</a>
        <br />
        <a href='https://ccr.saccounty.gov/DocumentRecording/Pages/Index.aspx' target={"_blank"} rel='noreferrer'>Online Index of Recorded Documents</a>&nbsp;&nbsp;&nbsp;(Deeds, Deeds of Trust, Liens)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <strong>Municipal Services Agency:</strong>
        <br />
        <a href='https://www.google.com/maps/place/700+H+St+%236720,+Sacramento,+CA+95814/data=!4m2!3m1!1s0x809ad12b6eaf177d:0x34ad0247ffefce9e?sa=X&ved=2ahUKEwjn1YO03NT_AhVWJkQIHcbhCdsQ8gF6BAgZEAI' rel='noreferrer' target='_blank'>700 H St. Room 6720</a>
        <br />
        <br />
        <p><strong>Phone: </strong> (916) 876-5928</p>
        <p><strong>County Surveyor:</strong> <a href='mailto:DSSSurveys@SacCounty.net'>DSSSurveys@SacCounty.net</a></p>
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
    </div>
  )
}

export default Sacramento