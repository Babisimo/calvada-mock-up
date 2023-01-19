import React from 'react'

function Fullerton() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Fullerton</button>
            <div className='city-dropdown-content'>
                <a href='https://www.cityoffullerton.com/government/departments/public-works/engineering/general-engineering/bench-marks?locale=en' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://portal.laserfiche.com/Portal/Browse.aspx?id=292163&repo=r-3261686e' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://gis.cityoffullerton.com/portal/apps/webappviewer/index.html?id=38a7db5f8a8748b1818bc31269bfa3b0' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://codelibrary.amlegal.com/codes/fullerton/latest/fullerton_ca/0-0-0-8438' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Fullerton
