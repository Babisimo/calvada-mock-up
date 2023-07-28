import React from 'react'
import BMMap from '../../../../PDF/BMs/City of Redlands BM Map.pdf'
import BMList from '../../../../PDF/BMs/City of Redlands BM List.PDF'

function Redlands() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Redlands</button>
            <div className='city-dropdown-content'>
                <a href={BMMap} target={'_blank'} rel='noreferrer'>Benchmarks Map (PDF)</a>
                <a href={BMList} target={'_blank'} rel='noreferrer'>Benchmarks List (PDF)</a>
            </div>
        </div>
    )
}

export default Redlands
