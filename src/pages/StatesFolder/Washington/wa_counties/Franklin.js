import React from 'react'
import { Link } from 'react-router-dom'
import WSDot from '../WA_Components/wsdot'

const Franklin = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Franklin County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>121510043</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://gisportal.franklin.co.franklin.wa.us/arcgisportal/apps/webappviewer/index.html?id=38d7697ee86e41e89116a889d355ff76' target={"_blank"} rel='noreferrer'>APN GIS Map</a>&nbsp;&nbsp;&nbsp;(GIS Assessor's Parcel Maps)
        <br/>
        <a href='http://terra.co.franklin.wa.us/TaxSifter/Search/Results.aspx' target={"_blank"} rel='noreferrer'>APN Search Portal</a>&nbsp;&nbsp;&nbsp;(Search Assessor's Parcel Maps)
        <br/>
        <a href='https://gisportal.franklin.co.franklin.wa.us/arcgisportal/apps/webappviewer/index.html?id=cda111ac97064578bdd8d7a11d395b39' target={"_blank"} rel='noreferrer'>Planning GIS</a>&nbsp;&nbsp;&nbsp;(Record Maps, APNs, Zoning, etc.)
        <br/>
        <a href='https://recording.franklin.co.franklin.wa.us:4444/' target={"_blank"} rel='noreferrer'>Official Records Search</a>&nbsp;&nbsp;&nbsp;(Instrument No., Legal Description, Official Records)
        <br/>
        <a href='https://www.franklincountywa.gov/Mapping-GIS' target={"_blank"} rel='noreferrer'>Franklin County GIS Portal</a>&nbsp;&nbsp;&nbsp;(Different GIS Maps)
        <br/>
        <a href='https://www.wsdot.wa.gov/monument/gis/index.html' target={"_blank"} rel='noreferrer'>State Survey Monuments GIS</a>&nbsp;&nbsp;&nbsp;(State Benchmarks)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
      
      <WSDot />
      
      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Franklin