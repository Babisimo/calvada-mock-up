import React from "react"
import { Link } from 'react-router-dom'
import District9 from "../CaltransDistricts/District9"

const Mono = () => {
    return (
      <div className='county-info'>
        <div className='county-btn'>
          <Link to={'/counties'}><button>Back to Counties</button></Link>
          <h1 className='title'>Mono County</h1>
        </div>
  
        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}
  
        <span className='span'>
          <h3>Links:</h3>
          <br />
          <a href='https://www.mediafire.com/folder/jdiatk4vuo4oo//Mono' target={'_blank'} rel="noreferrer">Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Book & Page) 
          <br />
          <a href='https://webapps.mono.ca.gov/filebrowser/' target={'_blank'} rel="noreferrer">Document Browser</a>&nbsp;&nbsp;&nbsp;(Free Assessor Parcel Maps, Record Maps, & More)
          <br />
        </span>
       
        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}

        <span className="span">
          <h3>Caltrans</h3>
          <District9/>
        </span>
  
      </div>
    )
  }
  
  export default Mono