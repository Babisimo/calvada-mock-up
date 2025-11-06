import React from 'react'

function Temecula() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Temecula</button>
            <div className='city-dropdown-content'>
                <a href='https://maps-temecula.opendata.arcgis.com/datasets/ae358069091e44b9885f35b84c0f1c02/explore?location=33.524268%2C-117.127907%2C12.61' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://temecula.maps.arcgis.com/apps/SimpleViewer/index.html?appid=427dd3fc2ffb4325be02220987500359' target={'_blank'} rel='noreferrer'>Benchmarks (Faulty)</a>
            </div>
        </div>
    )
}

export default Temecula
