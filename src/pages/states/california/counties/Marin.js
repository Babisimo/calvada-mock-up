import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../caltrans_districts/District4'

const Marin = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Marin County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>026-123-01</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.marincounty.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://apps.marincounty.org/TaxRollSearch' target={"_blank"} rel='noreferrer'>Assessor's Mapbooks</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.marinmap.org/Html5Viewer/Index.html?viewer=smmdataviewer' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>Ernest Klock - Principal Civil Engineer | <a href='mailto:eklock@co.marin.ca.usv'>eklock@co.marin.ca.usv</a></p>
        <p>Room 404 Civic Center Dr</p>
        <p>P.O. Box 4186</p>
        <p>San Rafael, California 94913-4186</p>
        <br />
        <p><strong>Phone:</strong> (415) 499-7877</p>
        <p><strong>Fax:</strong> (415) 473-3232</p>

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

export default Marin