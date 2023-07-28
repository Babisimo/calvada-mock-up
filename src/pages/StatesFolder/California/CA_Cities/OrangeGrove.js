import React from 'react'

function OrangeGrove() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Orange Grove</button>
            <div className='city-dropdown-content'>
                <a href='https://ggcity.org/maps/benchmarks/' target={'_blank'} rel='noreferrer'>Benchmarks</a>
                <a href='https://ggcity.org/engineering/centerline-ties' target={'_blank'} rel='noreferrer'>Centerline Ties</a>
                <a href='https://ggcity.org/econdev/zoning-map' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://library.qcode.us/lib/garden_grove_ca/pub/municipal_code/item/title_9' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default OrangeGrove
