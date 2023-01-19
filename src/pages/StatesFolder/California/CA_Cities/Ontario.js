import React from 'react'

function Ontario() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Ontario</button>
            <div className='city-dropdown-content'>
                <a href='https://gisportal.ontarioca.gov/arcgis/apps/webappviewer/index.html?id=853ea4f34b6842feb7facca802f9e201' target={'_blank'} rel='noreferrer'>Benchmarks & Centerline Ties</a>
                <a href='https://www.ontarioca.gov/sites/default/files/Ontario-Files/Planning/Documents/Zoning%20Map/Zoning_20220415.pdf' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://www.ontarioca.gov/sites/default/files/Ontario-Files/Planning/Documents/chapter_5.0_-_zoning_and_land_use_20180501.pdf' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Ontario
