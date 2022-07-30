import React from 'react'

function Temecula() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Temecula</button>
            <div className='dropdown-content'>
                <a href='https://temecula.maps.arcgis.com/apps/SimpleViewer/index.html?appid=427dd3fc2ffb4325be02220987500359' target={'_blank'} rel='noreferrer'>Benchmarks</a>
            </div>
        </div>
    )
}

export default Temecula
