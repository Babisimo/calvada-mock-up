import React from 'react'
import { Link } from 'react-router-dom'

export default function Alameda() {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
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
        <br />

        <a href='http://www.acgov.org/MS/prop/index.aspx' target={'_blank'} rel="noreferrer">Property Assesment Information</a>&nbsp;&nbsp;&nbsp;&nbsp;{"(Free APNs)"}

        <br />
        <br />

        <a href="http://www.acgov.org/MS/surveyorDocSearch/" target={'_blank'} rel="noreferrer">Public Works</a>&nbsp;&nbsp;&nbsp;&nbsp;{"(Free Record Maps)"}

        <br />
        <br />

        <a href='http://gis.acgov.org/Html5Viewer/index.html?viewer=parcel_viewer' target={'_blank'} rel="noreferrer">County GIS</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <span>
          <p>399 Elmhurst Street</p>
          <p>Hayward California, 94544</p>
          <p>Phone: (510) 670-5480</p>
          <p>Department Hours: Monday - Friday 8:00 AM to 5:00 PM</p>
        </span>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}



    </div>

  )
}

