import React from 'react'
import { Link } from 'react-router-dom'
import District6 from '../CaltransDistricts/District6'
import District9 from '../CaltransDistricts/District9'

const Kern = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Kern County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>451303010 &nbsp;&nbsp;&nbsp; (451-303-010)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.kerncounty.com/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://www.kerncounty.com/government/departments/assessor-recorder/property/assessor-parcel-map-search' target={"_blank"} rel='noreferrer'>Assessor</a>
        <br />
        <a href='https://www.kernpublicworks.com/services/development/maps' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://maps.kerncounty.com/H5/index.html?viewer=KCPublic' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <h4>Engineering & Survey Services Department:</h4>
        <p><strong>Charles Lackey</strong>, Director</p>
        <br />
        <h4>Public Services Building Address:</h4>
        <a href='https://www.google.com/maps/place/Public+services+building,+2700+M+St+%23570,+Bakersfield,+CA+93301/data=!4m2!3m1!1s0x80ea6991cfd9aa07:0xce3c2f2469426513?sa=X&ved=2ahUKEwiYx8_r1dT_AhU1HUQIHXJXBeIQ8gF6BAgTEAI' target='_blank' rel='noreferrer'>2700 "M" Street, Suite 570 <br/> Bakersfield, California 93301-2370</a>
        <p>Monday - Friday 8:00 AM - 5:00 PM</p>
        <br />
        <p><strong>Phone:</strong> (661) 862-5510</p>
        <p><strong>Fax:</strong> (661) 862-5101</p>
        <p><strong>TTY Relay:</strong> 1-800-735-2929</p>
        <p><strong>Email: </strong><a href='mailto:ess@co.kern.ca.us'>ess@co.kern.ca.us</a></p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans (West):</h3>
        <District6 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans (East):</h3>
        <District9 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Kern