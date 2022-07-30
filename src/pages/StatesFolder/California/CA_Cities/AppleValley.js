import React from 'react'

function AppleValley() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Apple Valley</button>
            <div className='dropdown-content'>
                <a href='http://gis.anaheim.net/BenchmarkViewer/' target={'_blank'} rel='noreferrer'>Zoning Map & Municipal Code</a>
                <a href='https://www.applevalley.org/services/planning-division/zoning-map-permitted-use' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default AppleValley
