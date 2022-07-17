import React from 'react'
import { Link } from 'react-router-dom'

const Kern = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/california'}><button>Back to California Counties</button></Link>
        <h1 className='title'>Kern County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>451303010 &nbsp;&nbsp;&nbsp; (451-303-010)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.kerncounty.com/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='http://assessor.co.kern.ca.us/prop_search.php' target={"_blank"} rel='noreferrer'>Assessor's Office</a>&nbsp;&nbsp;&nbsp;(Link Not Working)
        <br />
        <a href='https://kernpublicworks.com/maps/' target={"_blank"} rel='noreferrer'>Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps)
        <br />
        <a href='https://maps.kerncounty.com/H5/index.html?viewer=KCPublic' target={"_blank"} rel='noreferrer'>GIS Mapping</a>&nbsp;&nbsp;&nbsp;(Free Record Maps)

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Public Works:</h3>
        <h4>Engineering & Survey Services Department</h4>
        <p>Charles Lackey, Director</p>
        <br />
        <h4>Public Services Building Address:</h4>
        <p>2700 "M" Street, Suite 570</p>
        <p>Bakersfield, California 93301-2370</p>
        <p>Monday - Friday 8:00 AM - 5:00 PM</p>
        <p><strong>Phone:</strong> (661) 862-5510</p>
        <p><strong>Fax:</strong> (661) 862-5101</p>
        <p><strong>TTY Relay:</strong> 1-800-735-2929</p>
        <p><strong>Email:</strong> ess@co.kern.ca.us</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <a href='http://www.dot.ca.gov/dist6/' target={"_blank"} rel='noreferrer'>Caltrans District 6</a>&nbsp;&nbsp;&nbsp;(LINK NOT WORKING)
        <p>Fresno Fair Grounds, Educational Building</p>
        <p>1121 S. Chance Avenue, Fresno California 93702</p>

        <h4>Telephone:</h4>
        <p>(559) 444-2409 (Fresno/Madera)</p>
        <p>(559) 488-4082 (Tulare/Kings)</p>
        <p>(661) 326-3968 (Kern)</p>
        <p>(559) 488-4067</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Kern