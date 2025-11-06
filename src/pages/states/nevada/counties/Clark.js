import React from 'react'
import { Link } from 'react-router-dom'

const Clark = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Clark County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>16223812002 &nbsp;&nbsp;&nbsp; (162-23-812-002)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.clarkcountynv.gov/' target={"_blank"} rel='noreferrer'>Official Site</a>
        <br />
        <a href='https://maps.clarkcountynv.gov/assessor/AssessorParcelDetail/pcl.aspx' target={"_blank"} rel='noreferrer'>Assessor Records and Maps</a>&nbsp;&nbsp;&nbsp;(Free APNS)
        <br />
        <a href='http://gisgate.co.clark.nv.us/assessor/webimages/' target={"_blank"} rel='noreferrer'>Assessor | Record Maps</a>&nbsp;&nbsp;&nbsp;(Free Maps & Deeds)
        <br />
        <a href='http://gisgate.co.clark.nv.us/openweb/?@782884,26762114,6' target={"_blank"} rel='noreferrer'>GIS Viewer</a>
        <br />
        <a href='https://www.clarkcountynv.gov/government/departments/public_works_department/professional_services/benchmark_book.php' target={"_blank"} rel='noreferrer'>Benchmarks</a>
      </span>


      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Highway:</h3>
        <a href='https://www.dot.nv.gov/' target={'_blank'} rel='noreferrer'><img alt='NDOT' src={'https://imgs.search.brave.com/adM8XFzknNGw3BPtGPLoMPEATxrQwX6_Xid-D-eWsvo/rs:fit:734:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/ZnhXRllMbDZyNFJx/X1hHbVhPOFdnSGFF/eSZwaWQ9QXBp'} width='200px'></img></a>
        <br />
        <h4>Request Row Maps:</h4>
        <a href={"https://drive.google.com/file/d/12YB5n3TTXWqQ7sGfl8frDhqBV71YC85x/view?usp=drive_link"} target="_blank" rel='noreferrer'>Download Request Form</a>
        <br />
        <br />
        <p><strong>Jason Knoff Email:</strong>&nbsp;&nbsp; JKnoff@dot.state.nv.us</p>
        <p>Tech IV Right-Of-Way Engineering</p>
        <p>Nevada Dept. of Transportation</p>
        <p><strong>Phone: </strong>(775) 888-7493</p>

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

    </div >
  )
}

export default Clark