import React from 'react'

function Corona() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Corona</button>
            <div className='city-dropdown-content'>
                <a href='https://www.coronaca.gov/government/departments-divisions/public-works/development-and-permits/benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://centerlineties.coronaca.gov/' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://www.coronaca.gov/government/departments/community-development/planning-division/general-plan-and-zoning-maps' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://www.coronaca.gov/government/mayor-city-council/zoning-code' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default Corona
