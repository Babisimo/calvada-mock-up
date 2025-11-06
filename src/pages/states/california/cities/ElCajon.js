import React from 'react'

function ElCajon() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>El Cajon</button>
            <div className='city-dropdown-content'>
                <a href='https://experience.arcgis.com/experience/21891d9a9d054922957cd83dea0e79e5/' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://cityofelcajon.maps.arcgis.com/apps/webappviewer/index.html?id=5fc20ac812ac42799d8c7d33a3db8cac' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://www.elcajon.gov/your-government/departments/community-development/zoning-information' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default ElCajon
