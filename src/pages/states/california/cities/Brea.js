import React from 'react'

function Brea() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Brea</button>
            <div className='city-dropdown-content'>
                <a href='https://brea.maps.arcgis.com/apps/webappviewer/index.html?id=d45bc07b4dc74935827c9c0b2d11de31' target={'_blank'} rel='noreferrer'>Zoning GIS</a>
                <a href='https://codelibrary.amlegal.com/codes/brea/latest/brea_ca/0-0-0-68094' target={'_blank'} rel='noreferrer'>Zoning Code</a>
            </div>
        </div>
    )
}

export default Brea
