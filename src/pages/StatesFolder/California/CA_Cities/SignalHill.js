import React from 'react'

function SignalHill() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Signal Hill</button>
            <div className='city-dropdown-content'>
                <a href='https://www.cityofsignalhill.org/185/Survey-Information' target={'_blank'} rel='noreferrer'>Benchmarks & Centerline Ties</a>
                <a href='https://www.cityofsignalhill.org/105/Zoning' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://codelibrary.amlegal.com/codes/signalhill/latest/signalhill_ca/0-0-0-58296' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default SignalHill
