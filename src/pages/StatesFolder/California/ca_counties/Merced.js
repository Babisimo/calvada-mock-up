import React from 'react'
import { Link } from 'react-router-dom'
import District10 from '../CaltransDistricts/District10'

const Merced = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Merced County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>45133010 &nbsp;&nbsp;&nbsp; (451-303-010)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='http://apps.co.merced.ca.us/PublicApplets/pages/assessor/parcelmap.aspx' target={"_blank"} rel='noreferrer'>Assessor's Office</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://web2.co.merced.ca.us/files/Surveyor/01-RECORDED-MAPS/' target={"_blank"} rel='noreferrer'>Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
        <br />
        <a href='https://maps.countyofmerced.com/portal/apps/webappviewer/index.html?id=757a63735795436cb14f7a09761a30df' target={"_blank"} rel='noreferrer'>Survey Index GIS</a>&nbsp;&nbsp;&nbsp;(Record Maps, Township & Range & Section)
        <br />
        <a href='https://geostack-mercedcounty.opendata.arcgis.com/' target={"_blank"} rel='noreferrer'>GIS Portal</a>&nbsp;&nbsp;&nbsp;(Zoning, General Plan, Land Use)
        <br />
        <a href='https://www.countyofmerced.com/239/Recorder' target={"_blank"} rel='noreferrer'>Recorder Division</a>&nbsp;&nbsp;&nbsp;(County Recorder)
        <br />
        <br />
        <a href='https://www.mediafire.com/?eed8oc0w0xhf5' target={"_blank"} rel='noreferrer'>Assessment Maps</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/folder/emeed9cnxf7at//Miller-Lux' target={"_blank"} rel='noreferrer'>Miller-Lux</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/folder/mapnqhgyo7ea3//MonumentTies' target={"_blank"} rel='noreferrer'>Monument Ties</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/?058jtycnae4ek' target={"_blank"} rel='noreferrer'>Official Plats 1-50</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/?s3ynae1i27yga' target={"_blank"} rel='noreferrer'>Official Plats 51-__</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/?4y167zr9yoc1q' target={"_blank"} rel='noreferrer'>Parcel Maps Bk 1-60</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/?13y54aptttiej' target={"_blank"} rel='noreferrer'>Parcel Maps Bk 61-__</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <a href='https://www.mediafire.com/?1yahenr3e80dj' target={"_blank"} rel='noreferrer'>Records of Survey</a>&nbsp;&nbsp;&nbsp;(Book & Page)
        <br />
        <br />
        <a href='https://www.countyofmerced.com/654/County-Surveyor' target={"_blank"} rel='noreferrer'>County Surveyor</a>
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

export default Merced