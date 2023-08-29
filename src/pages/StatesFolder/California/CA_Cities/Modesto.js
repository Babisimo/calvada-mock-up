import React from 'react'

function Modesto() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Modesto</button>
            <div className='city-dropdown-content'>
                <a href='https://gis.modestogov.com/gis/' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://gis.modestogov.com/gis/' target={'_blank'} rel='noreferrer'>Zoning</a>
            </div>
        </div>

    )
}

export default Modesto
