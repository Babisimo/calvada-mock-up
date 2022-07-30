import React from 'react'

function SantaMonica() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Santa Monica</button>
            <div className='dropdown-content'>
                <a href='https://www.arcgis.com/apps/mapviewer/index.html?webmap=7a65c2c884b241938011c9c702ee697c' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://qcode.us/codes/santamonica/' target={'_blank'} rel='noreferrer'>Municipal Code</a>
                <a href='https://www.arcgis.com/apps/mapviewer/index.html?layers=d85b82ca3796410d8d350a1a139417ab' target={'_blank'} rel='noreferrer'>Benchmarks & Centerline Ties</a>
            </div>
        </div>
    )
}

export default SantaMonica
