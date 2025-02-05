import React from "react"
import { Link } from 'react-router-dom'
import District3 from "../CaltransDistricts/District3"

const ElDorado = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>El Dorado County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <br />
        <a href='https://camapsource.com/el-dorado/' target={'_blank'} rel="noreferrer">Recorded Maps</a>&nbsp;&nbsp;&nbsp;(Free Assesment Maps, Cemetery, Parcel, Subdivision, Survey)
        <br />
        <a href='https://sftp2.edcgov.us/public/folder/wh8fcjkmskotbesok_blcg/wh8fcjkmskotbesok_blcg%5C' target={'_blank'} rel="noreferrer">County Benchmarks</a>&nbsp;&nbsp;&nbsp;(Free Benchmark KMZ)
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

export default ElDorado