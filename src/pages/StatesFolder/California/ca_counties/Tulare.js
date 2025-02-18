import React from 'react'
import { Link } from 'react-router-dom'
import District6 from '../CaltransDistricts/District6'

const Tulare = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Tulare County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>123-456-789-000</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://tularecounty.ca.gov/county/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://iportal.tularecounty.ca.gov/iportal/apps/webappviewer/index.html?id=a1a6e2f2f9f341ed84a64f3b61919760' target={"_blank"} rel='noreferrer'>Assessor Map</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://publicdocs.co.tulare.ca.us/Questys.CMx.Surveyorweb/Browse/Default.aspx' target={"_blank"} rel='noreferrer'>Surveyor Documents</a>&nbsp;&nbsp;&nbsp;(Free Record Maps, Corner Records, Benchmarks, etc.)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/5961+S+Mooney+Blvd,+Visalia,+CA+93277/data=!4m2!3m1!1s0x80952ecf3af26543:0x8c97a9b9d32505c1?sa=X&ved=2ahUKEwiLrsG-5NT_AhWjKEQIHe4fCa4Q8gF6BAgNEAI' target='_blank' rel='noreferrer'>5961 S. Mooney Blvd.<br/>Visalia, CA 93277</a>
        <br/>
        <br/>
        <p><strong>Phone: </strong>(559) 624-7152</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District6 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Tulare