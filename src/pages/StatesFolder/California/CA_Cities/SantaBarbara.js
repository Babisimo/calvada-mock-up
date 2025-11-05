import React from 'react'

function SantaBarbara() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Santa Barbara</button>
            <div className='city-dropdown-content'>
                <a href='https://santabarbaraca.gov/government/departments/public-works/engineering-division/survey-benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.countyofsb.org/2690/Santa-Maria-Tie-Book' target={'_blank'} rel='noreferrer'>City Ties</a>
            </div>
        </div>
    )
}

export default SantaBarbara
