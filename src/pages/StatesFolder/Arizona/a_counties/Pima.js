import React from 'react'
import { Link } from 'react-router-dom'

const Pima = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Pima County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://webcms.pima.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://webcms.pima.gov/cms/one.aspx?portalId=169&pageId=22235' target={"_blank"} rel='noreferrer'>GIS</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Pima