import React from 'react'
import { Link } from 'react-router-dom'
import District9 from '../caltrans_districts/District9'

const Inyo = () => {
  return (
    <div className='county-info'>
      <div className='county-btn'>
        <Link to={'/counties'}><button>Back to Counties</button></Link>
        <h1 className='title'>Inyo County</h1>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <div className='apn-format'>
        <h3>APN Format:</h3>
        <p>0011101400 &nbsp;&nbsp;&nbsp; (001-110-14)</p>
      </div>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Links:</h3>
        <a href='https://www.inyocounty.us/services/gis-data-maps' target={"_blank"} rel='noreferrer'>Inyo County GIS Data</a>&nbsp;&nbsp;&nbsp;(APNs, Record Maps)
        <br />
        <a href='https://www.inyocounty.us/services/gis-data-maps/public-maps' target={"_blank"} rel='noreferrer'>Inyo County GIS Public Maps</a>&nbsp;&nbsp;&nbsp;(Zoning, General Plan)
        <br />
        <br />
        <a href='https://www.mediafire.com/folder/xknl3palbke3v/Misc' target={"_blank"} rel='noreferrer'>Misc Records</a>&nbsp;&nbsp;&nbsp;
        <br />
        <a href='https://www.mediafire.com/folder/7nwwydmdw5164/Parcel+Maps' target={"_blank"} rel='noreferrer'>Parcel Maps</a>&nbsp;&nbsp;&nbsp;
        <br />
        <a href='https://www.mediafire.com/folder/pdl0txldk5ou7/Record+of+Survey' target={"_blank"} rel='noreferrer'>Records of Survey</a>&nbsp;&nbsp;&nbsp;
        <br />
        <a href='https://www.mediafire.com/folder/k6v85jjqmpr35/Subdivision' target={"_blank"} rel='noreferrer'>Subdivision Maps</a>&nbsp;&nbsp;&nbsp;
        <br />
        <a href='https://www.mediafire.com/folder/c4f4sh0uzbsu2/Condo+Plans' target={"_blank"} rel='noreferrer'>Condo Plans</a>&nbsp;&nbsp;&nbsp;
        <br />
        <a href='https://www.mediafire.com/folder/472bmp901ry2i/Corner+Records' target={"_blank"} rel='noreferrer'>Corner Records</a>&nbsp;&nbsp;&nbsp;
      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}

      <span className='span'>
        <h3>Caltrans:</h3>
        <District9 />

      </span>

      {/* Border To Separate Information */}
      <p className='border'></p>
      {/* Border To Separate Information */}


    </div>
  )
}

export default Inyo