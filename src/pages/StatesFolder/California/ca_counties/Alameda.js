import React from 'react'

export default function Alameda() {
  return (
    <div className='county-info'>
      <h1 className='title'>Alameda County</h1>
      <a href='https://us-places.com/California/maps/Alameda-County-map.htm' target={'_blank'} rel="noreferrer">Map Showing Alameda County</a>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'><a href='http://www.acgov.org/MS/prop/index.aspx' target={'_blank'} rel="noreferrer">Property Assesment Information</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"(Free APNs)"}</span>

      <br />

      <span className='apn-format'>
        <h4>APN Formats:</h4>
        <p>85-1601-6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(085-1601-006)</p>
        <p>482-52-101 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(482-0052-101)</p>
        <p>48E-7334-63 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(048E-7334-063)   </p>
        <p>80G-933-19-2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(080G-0933-019-02)</p>
      </span>


    </div>

  )
}

