import React from 'react'

function Sacramento() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Sacramento</button>
            <div className='city-dropdown-content'>
                <a href='https://saccity.maps.arcgis.com/apps/webappviewer/index.html?id=49ea6aa0d45848798966b77e391d321a' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.cityofsacramento.gov/information-technology/gis' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://assessorparcelviewer.saccounty.gov/JSViewer/assessor.html' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://library.qcode.us/lib/sacramento_ca/pub/city_code' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Sacramento
