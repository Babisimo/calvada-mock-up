import React from 'react'

function CulverCity() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Culver City</button>
            <div className='city-dropdown-content'>
                <a href='https://pw.lacounty.gov/sur/BenchMark/QUADS/CULVER/CURRENT/Culver_Quad.pdf' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.culvercity.org/Services/Building-Development/Center-Line-Ties' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://zoningpoint.com/california/los-angeles-county/culver-city/' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://codelibrary.amlegal.com/codes/culvercity/latest/culvercity_ca/0-0-0-46073' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default CulverCity
