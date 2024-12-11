import React from 'react'

function BeverlyHills() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Beverly Hills</button>
            <div className='city-dropdown-content'>
                <a href='https://gis.beverlyhills.org/vbh/benchmarksTies/' target={'_blank'} rel='noreferrer'>Benchmarks & Centerline Ties</a>
                <a href='https://cs.beverlyhills.org/cs/' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://codelibrary.amlegal.com/codes/beverlyhillsca/latest/beverlyhills_ca/0-0-0-12820' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default BeverlyHills
