import React from 'react'

function SanCarlos() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>San Carlos</button>
            <div className='city-dropdown-content'>
                <a href='https://gis.cityofsancarlos.org/map' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.cityofsancarlos.org/government/departments/community-development/planning/zoning' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://www.codepublishing.com/CA/SanCarlos/#!/SanCarlos18/SanCarlos18.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default SanCarlos
