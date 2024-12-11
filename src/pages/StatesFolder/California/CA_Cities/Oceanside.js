import React from 'react'

function Oceanside() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Oceanside</button>
            <div className='city-dropdown-content'>
                <a href='https://oceanside.maps.arcgis.com/apps/webappviewer/index.html?id=d448a8964a084234891ffe19cb4b935a' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://oceanside.maps.arcgis.com/apps/webappviewer/index.html?id=4c27c9b8bdb94f3986c1b302b436cedb' target={'_blank'} rel='noreferrer'>Storm Sewer System</a>
                <a href='https://oceanside.maps.arcgis.com/apps/webappviewer/index.html?id=f67bb01c71aa4c418a8e7b8f741320ae' target={'_blank'} rel='noreferrer'>GIS Map Books</a>
            </div>
        </div>
    )
}

export default Oceanside
