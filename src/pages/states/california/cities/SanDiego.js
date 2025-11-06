import React from 'react'

function SanDiego() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>San Diego</button>
            <div className='city-dropdown-content'>
                <a href='https://www.sandiego.gov/sites/default/files/legacy/publicworks/pdf/edocref/verticalbenchbook111004.pdf' target={'_blank'} rel='noreferrer'>Benchmarks PDF List</a>
                <a href='https://www.sandiego.gov/sites/default/files/legacy/publicworks/pdf/edocref/ros14492.pdf' target={'_blank'} rel='noreferrer'><strong>DO NOT USE AS BM</strong> - Benchmarks PDF Data Sheets</a>
            </div>
        </div>
    )
}

export default SanDiego
