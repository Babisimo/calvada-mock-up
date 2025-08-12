import React from 'react'

export default function NationalCity() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>National City</button>
            <div className='city-dropdown-content'>
                <a href='https://www.nationalcityca.gov/home/showpublisheddocument/8512/636090627169130000' target={'_blank'} rel='noreferrer'>City Benchmarks</a>
                <a href='https://www.nationalcityca.gov/home/showpublisheddocument/8891/636090627169130000' target={'_blank'} rel='noreferrer'>City Ties</a>
            </div>
        </div>

    )
}