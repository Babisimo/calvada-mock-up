import React from 'react'

function Sacramento() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Sacramento</button>
            <div className='city-dropdown-content'>
                <a href='http://www.cityofsacramento.org/public-works/engineering-services/programs-and-services/survey-services/search-benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.cityofsacramento.org/Public-Works/Engineering-Services/Programs-and-Services/Survey-Services/Search-Ties-by-Street-Name-and-Grid' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://assessorparcelviewer.saccounty.gov/JSViewer/assessor.html' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://library.qcode.us/lib/sacramento_ca/pub/city_code' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Sacramento
