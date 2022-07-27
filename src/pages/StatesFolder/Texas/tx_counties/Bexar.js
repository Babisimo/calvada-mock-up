import React from 'react'
import { Link } from 'react-router-dom'

const Bexar = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Bexar County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>16938-006-0030</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://bexar.trueautomation.com/clientdb/?cid=110' target={"_blank"} rel='noreferrer'>Property Search</a>&nbsp;&nbsp;&nbsp;(Bexar CAD)
        <br />
        <br />
        <a href='https://govapps1.propertyinfo.com/wam3/loginForm.asp?iWAMid=3' target={"_blank"} rel='noreferrer'>Mapping | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps & Deeds | <strong>LINK NOT WORKING</strong>)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Bexar