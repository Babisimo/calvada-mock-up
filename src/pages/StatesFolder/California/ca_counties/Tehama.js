import React from "react"
import { Link } from 'react-router-dom'

const Tehama = () => {
    return (
      <div className='county-info'>
        <div className='county-btn'>
          <Link to={'/counties'}><button>Back to Counties</button></Link>
          <h1 className='title'>Tehama County</h1>
        </div>
  
        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}
  
        <span className='span'>
          <h3>Links:</h3>
          <br />
          <a href='https://camapsource.com/tehama/' target={'_blank'} rel="noreferrer">Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Parcel Maps, Record of Surveys)
          <br />
        </span>
       
        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}
  
      </div>
    )
  }
  
  export default Tehama