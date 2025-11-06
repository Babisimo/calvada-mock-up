import React from 'react'

function MenloPark() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Menlo Park</button>
            <div className='city-dropdown-content'>
                <a href='https://menlopark.gov/Government/Departments/Public-Works/Engineering-Division/City-benchmarks' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://menlopark.gov/Government/Departments/Community-Development/Planning-Division/Comprehensive-planning/General-Plan-land-use-and-zoning-map' target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href='https://www.codepublishing.com/CA/MenloPark/html/MenloPark16/MenloPark16.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>

    )
}

export default MenloPark
