import React from 'react'

function Colton() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Colton</button>
            <div className='city-dropdown-content'>
                <a href={"https://www.ci.colton.ca.us/680/Bench-Mark-and-Street-Ties"} target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href={"https://www.ci.colton.ca.us/DocumentCenter/View/286/Zoning-Map?bidId="} target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href={"https://www.ci.colton.ca.us/546/Municipal-Code"} target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Colton
