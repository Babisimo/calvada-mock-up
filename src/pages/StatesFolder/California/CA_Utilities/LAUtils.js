import React from 'react'
import { Link } from 'react-router-dom'

const LAUtils = () => {
  return (
    <>
      <div className='county-info'>
        <div className='county-btn'>
          <Link to={'/utilities'}><button>Back to Utilities</button></Link>
          <h1 className='title'>Los Angeles County Utilities</h1>
        </div>

        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}

        {/* Sewer System */}
        <span className='span'>
          <h3 className='util-header'>Sewer System</h3>
          <a href='https://pw.lacounty.gov/smd/sewernetwork/' target='_blank' rel='noreferrer'>LA County Sanitary Sewer Network</a>&nbsp;&nbsp;&nbsp;(County)
          <br />
          <a href='https://geohub.lacity.org/datasets/sewer-pipes/explore' target='_blank' rel='noreferrer'>LA City Sewer System</a>&nbsp;&nbsp;&nbsp;(County)
          <br />
          <a href='https://www.arcgis.com/apps/mapviewer/index.html?layers=40bfe69666a34f6a8c6a16116715ea02' target='_blank' rel='noreferrer'>El Monte</a>&nbsp;&nbsp;&nbsp;(City Sewer GIS)
          <br />
          <a href='https://www.elsegundo.org/home/showpublisheddocument/1017/637136686386330000' target='_blank' rel='noreferrer'>El Segundo</a>&nbsp;&nbsp;&nbsp;(City Sewer PDF)
          <br />
          <a href='https://www.arcgis.com/apps/mapviewer/index.html?layers=9d3097e76d0a4166a9e5e489e05d61db' target='_blank' rel='noreferrer'>Pasadena</a>&nbsp;&nbsp;&nbsp;(City Sewer GIS)
          <br />
          <a href='https://drive.google.com/drive/folders/1CQsQZAI8JlWBz4ZsQuovogNhWfWNmR9M?usp=share_link' target='_blank' rel='noreferrer'>Torrance</a>&nbsp;&nbsp;&nbsp;(Sewer Maps Drive PDFs)
        </span>


        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}

        {/* Storm Drain Plans */}
        <span className='span'>
          <h3 className='util-header'>Storm Drain Plans</h3>
          <a href='https://pw.lacounty.gov/fcd/StormDrain/disclaimer.cfm?CFID=29218589&CFTOKEN=c3d928abbc8a0ed0-0399C76E-DD3C-677E-6B672BB64A253299' target='_blank' rel='noreferrer'>LA County Storm Drain</a>&nbsp;&nbsp;&nbsp;(GIS)
        </span>

        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}

        {/* SOCAL Edison Lines */}
        <span className='span'>
          <h3 className='util-header'>Southern California Edison Lines</h3>
          <a href='https://www.arcgis.com/apps/webappviewer/index.html?id=05a84ec9d19f43ac93b451939c330888' target='_blank' rel='noreferrer'>SoCal Edison Lines</a>
          <br />
        </span>

        {/* Border To Separate Information */}
        <p className='border'></p>
        {/* Border To Separate Information */}

        {/* LA County Underground Utilities */}
        <span className='span'>
          <h3 className='util-header'>LA County Underground Utilities</h3>
          <a href='https://www.app.lacsd.org/ugutilities/' target='_blank' rel='noreferrer'>LA Underground Lines</a>
        </span>
      </div>
    </>
  )
}

export default LAUtils