import React from 'react'

function Sunnyvale() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Sunnyvale</button>
            <div className='city-dropdown-content'>
                <a href='https://www.sunnyvale.ca.gov/home/showpublisheddocument/1590/638336730043530000' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://www.cityofSunnyvale.org/105/Zoning' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://codelibrary.amlegal.com/codes/Sunnyvale/latest/Sunnyvale_ca/0-0-0-58296' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default Sunnyvale
