import React from 'react'
import { Link } from 'react-router-dom'

const SantaBarbara = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>Santa Barbara County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>069090056 &nbsp;&nbsp;&nbsp; (069-090-056)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.countyofsb.org/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://sbcassessor.com/Assessor/AssessorParcelMap.aspx' target={"_blank"} rel='noreferrer'>Assessor Parcel Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='https://www.countyofsb.org/1898/Recorded-Maps' target={"_blank"} rel='noreferrer'>Land Records | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps, Highway ROW Maps)
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <p>105 E Anapamu Street</p>
        <p>Santa Barbara, California 93101</p>
        <p><strong>Phone: </strong>(805) 681-4200</p>
        <a href='https://www.countyofsb.org/178/Directory' target={"_blank"} rel='noreferrer'>Directory</a>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>

        <h4>Request ROW Maps by Email</h4>
        <a href='https://www.dot.ca.gov/cpra/cpraform' target={"_blank"} rel='noreferrer'>Request Form</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING | Caltrans District 5)

        <h4>Contact:</h4>
        <p>Tim Romano | Transportation Surveyor</p>
        <p>timothy_romano@dot.ca.gov</p>
        <p>Caltrans District 5 - (805) 549-3060</p>
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div>
  )
}

export default SantaBarbara