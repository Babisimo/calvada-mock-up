import React from 'react'

function Glendale() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Glendale</button>
            <div className='city-dropdown-content'>
                <a href='https://www.arcgis.com/home/webmap/viewer.html?webmap=522eebe33b0548649688b17c0dec0e53&extent=-118.4547,34.0651,-117.964,34.3116' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www2.glendaleca.gov/centerline_survey/centerlinetiesurveys.aspx' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://cog-gis.maps.arcgis.com/apps/webappviewer/index.html?id=096fdb68fd5a4717a1b6e02883482a4f' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://library.municode.com/az/glendale/codes/code_of_ordinances?nodeId=COGLAR1985' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Glendale
