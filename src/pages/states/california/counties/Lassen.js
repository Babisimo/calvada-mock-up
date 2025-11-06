import React from "react"
import { Link } from 'react-router-dom'
import District2 from "../caltrans_districts/District2"

const Lassen = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Lassen County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <br />
        <a href='https://camapsource.com/lassen/' target={'_blank'} rel="noreferrer">Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
        <br />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className="span">
        <h3>Caltrans:</h3>
        <District2 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Lassen