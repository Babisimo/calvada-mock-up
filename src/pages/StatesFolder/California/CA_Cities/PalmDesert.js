import React from 'react'
import PDF from "../../../../PDF/City of Palm Desert Control Network.pdf"

function PalmDesert() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Palm Desert</button>
            <div className='city-dropdown-content'>
                <a href={PDF} download={'City of Palm Desert Control Network.pdf'}>Benchmarks (Download PDF)</a>
            </div>
        </div>
    )
}

export default PalmDesert
