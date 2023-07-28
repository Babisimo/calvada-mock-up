import React from 'react'
import PDF from "../../../../PDF/BMs/City of Palm Desert Control Network.pdf"

function PalmDesert() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Palm Desert</button>
            <div className='city-dropdown-content'>
                <a href={PDF} target='_blank' rel='noreferrer'>Benchmarks (PDF)</a>
                <a href='https://www.palmdesert.gov/departments/planning/zoning' target='_blank' rel='noreferrer' download={'City of Palm Desert Control Network.pdf'}>Zoning</a>
                <a href="https://library.qcode.us/lib/palm_desert_ca/pub/municipal_code" target='_blank' rel='noreferrer' download={'City of Palm Desert Control Network.pdf'}>Municipal Code</a>
            </div>
        </div>
    )
}

export default PalmDesert
