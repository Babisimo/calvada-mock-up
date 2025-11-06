import React from 'react'

function SanBernardino() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>San Bernardino</button>
            <div className='city-dropdown-content'>
                <a href='https://www.sanbernardino.gov/719/Survey-Benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://edocs.sbcity.org/WebLink/?dbid=0&repo=SB' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://sbcity.maps.arcgis.com/apps/webappviewer/index.html?id=dcca6aa4816b4021bd9364888ba669fd' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://codelibrary.amlegal.com/codes/sanbernardinoca/latest/overview' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default SanBernardino
