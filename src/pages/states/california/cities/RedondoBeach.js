import React from 'react'

function RedondoBeach() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Redondo Beach</button>
            <div className='city-dropdown-content'>
                <a href={"https://redondobeachgis.maps.arcgis.com/home/index.html"} target={'_blank'} rel='noreferrer'>GIS Mapping Portal</a>
            </div>
        </div>
    )
}

export default RedondoBeach
