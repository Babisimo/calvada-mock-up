import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../CaltransDistricts/District4'

export default function Alameda() {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to  Counties</button></Link>
        <h1 className='title'>Alameda County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Formats:</h3>
        <p>85-1601-6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(085-1601-006)</p>
        <p>482-52-101 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(482-0052-101)</p>
        <p>48E-7334-63 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(048E-7334-063)   </p>
        <p>80G-933-19-2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(080G-0933-019-02)</p>
      </div>


      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>

        <h3>Links:</h3>

        <a href='http://www.acgov.org/' target={'_blank'} rel="noreferrer">Official Site</a>

        <br />

        <a href='https://www.acassessor.org/parcel_viewer/' target={'_blank'} rel="noreferrer">Property Assesment Information - GIS</a>&nbsp;&nbsp;&nbsp;&nbsp;(Free APNs)

        <br />

        <a href="http://www.acgov.org/MS/surveyorDocSearch/" target={'_blank'} rel="noreferrer">Survey Documents</a>&nbsp;&nbsp;&nbsp;&nbsp;(Free Record Maps, Corner Records, Benchmarks)

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <span>
          <a href='https://www.google.com/maps/place/399+Elmhurst+St,+Hayward,+CA+94544/@37.6560519,-122.0974592,17z/data=!3m1!4b1!4m6!3m5!1s0x808f915b5559d5bb:0x3fc53bc8befe69d!8m2!3d37.6560477!4d-122.0948843!16s%2Fg%2F11b8txc6zs?entry=ttu' target='_blank' rel='noreferrer'>399 Elmhurst Street <br/> Hayward CA, 94544</a>
          <br />
          <br />
          <p><strong>Phone:</strong> (510) 670-5480</p>
          <p><strong>Department Hours:</strong> Monday - Friday 8:00 AM to 5:00 PM</p>
        </span>
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

