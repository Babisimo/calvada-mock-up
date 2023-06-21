import React from 'react'
import { Link } from 'react-router-dom'
import District4 from '../CaltransDistricts/District4'

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
        <a href='http://records.pw.contra-costa.org/WebLink/Welcome.aspx?cr=1' target={"_blank"} rel="noreferrer">Public Works</a>&nbsp;&nbsp;&nbsp;(Free Record Maps & Benchmarks)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <a href='https://www.google.com/maps/place/255+Glacier+Dr,+Martinez,+CA+94553/@37.9880552,-122.0894262,17z/data=!3m1!4b1!4m6!3m5!1s0x8085642b2b04262f:0xadb3b9a481926035!8m2!3d37.988051!4d-122.0868513!16s%2Fg%2F11b8v5361y?entry=ttu' target='_blank' rel='noreferrer'>255 Glacier Drive <br/> Martinez CA, 94553</a>
        <br />
        <br />
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
        <District4 />
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default ContraCosta