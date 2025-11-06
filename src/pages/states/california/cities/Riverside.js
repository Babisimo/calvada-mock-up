import React from 'react'

function Riverside() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Riverside</button>
            <div className='city-dropdown-content'>
                <a href='https://riversideca.gov/PWSurvey/benchmark_map.pdf' target={'_blank'} rel='noreferrer'>Benchmark Map</a>
                <a href='https://riversideca.gov/PWSurvey/benchmarks.pdf' target={'_blank'} rel='noreferrer'>BM Description</a>
                <a href='https://riversideca.gov/PWSurvey/control.asp' target={'_blank'} rel='noreferrer'>Control Points</a>
                <a href='https://riversideca.gov/PWSurvey/corner_record.asp' target={'_blank'} rel='noreferrer'>Corner Records</a>
                <a href='https://riversideca.gov/PWSurvey/ties.asp' target={'_blank'} rel='noreferrer'>Tie Location</a>
            </div>
        </div>
    )
}

export default Riverside
