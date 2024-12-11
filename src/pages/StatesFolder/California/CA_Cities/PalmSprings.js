import React from 'react'

function PalmSprings() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Palm Springs</button>
            <div className='city-dropdown-content'>
                <a href='https://www.palmspringsca.gov/government/departments/engineering-services/field-engineering/benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.palmspringsca.gov/government/departments/engineering-services/field-engineering/monument-centerline-ties' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://www.palmspringsca.gov/government/departments/planning/zoning-code-municipal-code-and-zoning-map' target={'_blank'} rel='noreferrer'>Zoning Map & Municipal Code</a>
            </div>
        </div>
    )
}

export default PalmSprings
