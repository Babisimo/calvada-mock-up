import React from 'react'
import { Link } from 'react-router-dom'
import District7 from '../caltrans_districts/District7'

const Ventura = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Ventura County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>1010172085 &nbsp;&nbsp;&nbsp;(101-0-172-085)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.ventura.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://assessor.countyofventura.org/research/mappage.asp' target={"_blank"} rel='noreferrer'>Assessor Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://maps.ventura.org/Html5Viewer/index.html?viewer=CountyView.CountyView_gvh' target={"_blank"} rel='noreferrer'>County Records - GIS</a>&nbsp;&nbsp;&nbsp;(Free Maps, Benchmarks, Corner Records)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District7 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default Ventura