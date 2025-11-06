import React from 'react'
import { Link } from 'react-router-dom'
import District8 from '../caltrans_districts/District8'

const Riverside = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Riverside County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>379-423-014</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://rivco.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://gis1.countyofriverside.us/Html5Viewer/?viewer=MMC_Public' target={"_blank"} rel='noreferrer'>Assessor County Clerk Recorder</a>&nbsp;&nbsp;&nbsp; (GIS, Free APNS)
        <br />
        <a href='http://weblink.rctlma.org/WebLink/?dbid=0&repo=TLMA' target={"_blank"} rel='noreferrer'>Map Inquire</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=26ab70d308c349dd934b1b65378c6544' target={"_blank"} rel='noreferrer'>Transportation Department GIS</a>&nbsp;&nbsp;&nbsp;(Free Record Maps, Corner Records, ROW Maps, Plans)
        <br />
        <a href='https://countyofriverside.maps.arcgis.com/apps/webappviewer/index.html?id=8eaafd49a33147f5905d318a034839bb' target={"_blank"} rel='noreferrer'>Geodetic Control</a>&nbsp;&nbsp;&nbsp;(Benchmarks & NGS Cors)
        <br />
        <a href='https://www.arcgis.com/apps/mapviewer/index.html?webmap=8d1541d435f44f6f94892dce32130e93' target={"_blank"} rel='noreferrer'>Hanging File Mosaic</a>&nbsp;&nbsp;&nbsp;(Hanging Files & Counter Books)
        <br />
        <a href='https://countyofriverside.maps.arcgis.com/apps/webappviewer/index.html?id=485352d7b8c143e7b9de92d111678c25' target={"_blank"} rel='noreferrer'>C.A.T.C.H</a>&nbsp;&nbsp;&nbsp;(County Automated Terrestrial CAD Helper - Tool)
        <br />
        <a href='https://www.boe.ca.gov/maps/RiversideCo.htm#:~:text=Tax%20Rate%20Areas%20%E2%80%93%20Riverside%20County%202023&text=Each%20TRA%20is%20assigned%20a,the%20specified%20assessment%20roll%20year' target={"_blank"} rel='noreferrer'>TRA GIS</a>&nbsp;&nbsp;&nbsp;(Tax Rate Areas - 2023)
        <br />
        <br />
        <a href='https://rivcounty.sharepoint.com/sites/tlmaXnt/RivCoSurvey/default.aspx' target={"_blank"} rel='noreferrer'>RivCo Survey Scanned Images Directory</a>&nbsp;&nbsp;&nbsp;(Free Record Maps | Ask <a href='mailto:ogonzalez@calvada.com?subject=RivCoSurvey Login&body=Can you please provide me with the login for RivCo Survey?'>Oswaldo</a> for login)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/4080+Lemon+St,+Riverside,+CA+92501/data=!4m2!3m1!1s0x80dcb1e5ff7ca79f:0x566b43c951322556?sa=X&ved=2ahUKEwiOgv-J3NT_AhXaJ0QIHYRmC6wQ8gF6BAgQEAI' target='_blank' rel='noreferrer'>4080 Lemon Street<br/>Riverside, California 92501</a>
        <br />
        <br />
        <p><strong>Phone: </strong> (951) 955-1000</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District8 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Riverside