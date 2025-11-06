import React from 'react'

function Redwood() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Redwood</button>
            <div className='city-dropdown-content'>
                <a href='https://webgis.redwoodcity.org/community/' target={'_blank'} rel='noreferrer'>Benchmarks, Zoning, Utilities</a>                
                <a href='https://www.redwoodcity.org/departments/community-development-department/engineering-transportation/engineering/engineering-data-maps' target={'_blank'} rel='noreferrer'>Engineering Data & Maps</a>                
            </div>
        </div>
    )
}

export default Redwood
