import React from 'react'
import { Link } from 'react-router-dom'
import District3 from '../CaltransDistricts/District3'

const Placer = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Placer County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>091030011 &nbsp;&nbsp;&nbsp; (091-030-011)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.placer.ca.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://experience.arcgis.com/experience/cbff35c3f33a49348c65251459b8b0bc#data_s=id%3Ae5cb0caba85049a8836e7a041feb107f-1924945c5dd-layer-12%3A181760' target={"_blank"} rel='noreferrer'>APN GIS</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.placer.ca.gov/5866/Property-Details' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://camapsource.com/placer/' target={"_blank"} rel='noreferrer'>CA Map Source</a>&nbsp;&nbsp;&nbsp;(Parcel Maps, Map Locator, Corner Records, etc.)
        <br />
        <a href='https://www.mediafire.com/folder/qv3xd7nwd6rni/Placer' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Book & Page)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/3091+County+Center+Dr,+Auburn,+CA+95603/@38.9413256,-121.1071291,17z/data=!3m1!4b1!4m6!3m5!1s0x809b106bf6e2539d:0x438e066f2125d6b0!8m2!3d38.9413256!4d-121.1071291!16s%2Fg%2F11bw3xp6fy?entry=ttu' target='_blank' rel='noreferrer'>3091 County Center<br />Auburn, California 95603</a>
        <br />
        <br />
        <p><strong>Phone:</strong> (530)-745-3110</p>
        <p><strong>Fax:</strong> (530)-745-7589</p>
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

export default Placer