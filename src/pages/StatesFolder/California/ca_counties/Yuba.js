import React from "react"
import { Link } from 'react-router-dom'
import District3 from "../CaltransDistricts/District3"

const Yuba = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Yuba County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <br />
        <a href='https://camapsource.com/yuba/' target={'_blank'} rel="noreferrer">Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Assesment Maps, Recorded Map Books, & more)
        <br />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Caltrans</h3>
        <District3 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Yuba