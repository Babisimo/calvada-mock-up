import React from 'react'

function LosAngeles() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>LA</button>
            <div className='city-dropdown-content'>
                <a href='https://navigatela.lacity.org/navigatela/' target={'_blank'} rel='noreferrer'>Benchmarks (NAVLA)</a>
                <a href='http://zimas.lacity.org/' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://navigatela.lacity.org/navigatela/' target={'_blank'} rel='noreferrer'>Navigate LA</a>
            </div>
        </div>
    )
}

export default LosAngeles
