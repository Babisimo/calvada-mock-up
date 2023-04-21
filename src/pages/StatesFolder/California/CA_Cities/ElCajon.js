import React from 'react'

function ElCajon() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>El Cajon</button>
            <div className='city-dropdown-content'>
                <a href='https://cityofelcajon.maps.arcgis.com/apps/webappviewer/index.html?id=9c192b2dd3c6456a9eab0a52b517c06f' target={'_blank'} rel='noreferrer'>Benchmarks & Corner Records</a>
                <a href='https://cityofelcajon.maps.arcgis.com/apps/webappviewer/index.html?id=5fc20ac812ac42799d8c7d33a3db8cac' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://www.elcajon.gov/your-government/departments/community-development/zoning-information' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default ElCajon
