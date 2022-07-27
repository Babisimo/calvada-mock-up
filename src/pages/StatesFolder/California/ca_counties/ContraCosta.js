import React from 'react'
import { Link } from 'react-router-dom'

const ContraCosta = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Contra Costa County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>376210043&nbsp;&nbsp;&nbsp;(376-210-043)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.contracosta.ca.gov/' target={"_blank"} rel="noreferrer">Official Site</a>
        <br />
        <a href='https://ccmap.cccounty.us/Html5/index.html?viewer=CCMAP' target={"_blank"} rel="noreferrer">GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free APNs)
        <br />
        <a href='http://records.pw.contra-costa.org/WebLink/CustomSearch.aspx?SearchName=RecordedMaps&dbid=0&cr=1' target={"_blank"} rel="noreferrer">Public Works</a>&nbsp;&nbsp;&nbsp;(Free Record Maps & Benchmarks)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>255 Glacier Drive</p>
        <p>Martinez California, 94553</p>
        <p><strong>Phone:</strong> (925) 313-2000</p>
        <p><strong>Fax:</strong> (925) 313-2333</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>County Surveyor:</h3>
        <p>Jim Stein</p>
        <p><strong>Phone:</strong> (925) 313-2343</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=04efb9a9f14c4da2aabd9ce36b7dda48' target={'_blank'} rel='noreferrer'>Caltrans District 4</a>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default ContraCosta