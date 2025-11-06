import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../caltrans_districts/District4'

const SanFransisco = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>San Francisco County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p><strong>Book: </strong>0787 &nbsp;&nbsp; <strong>Lot: </strong>001 &nbsp;&nbsp; (0787-001)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://sf.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sfplanninggis.org/PIM/' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://bsm.sfdpw.org/subdivision/' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://sfpublicworks.org/ccsf-geodetic-network' target={"_blank"} rel='noreferrer'>Benchmarks</a>&nbsp;&nbsp;&nbsp;(CCSF Geodetic Network)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/SF+Public+Works+Department+Engineering/@37.77597,-122.4190548,15z/data=!4m2!3m1!1s0x0:0xddc2c769014977b5?sa=X&ved=2ahUKEwjG2erv4NT_AhVgLUQIHQviDJgQ_BJ6BAhaEAc' target='_blank' rel='noreferrer'>1 Dr. Carlton B. Goodlett Place<br/>City Hall Room 362 <br/> San Francisco, CA 94102</a>
        <p>Monday - Friday 8:00 AM - 8:00 PM</p>

        <br />

        <p><strong>Phone: </strong>(415) 554-4851 | (415) 554-6920 | (415) 554-6944 | (415) 554-6900</p>
        <p><strong>Email: </strong><a href='mailto:city.administrator@sfgov.org'>city.administrator@sfgov.org</a></p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District4 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}
    </div>
  )
}

export default SanFransisco