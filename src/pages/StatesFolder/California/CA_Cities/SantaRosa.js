import React from 'react'

export default function SantaRosa() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Santa Rosa</button>
            <div className='city-dropdown-content'>
                <a href='https://maps.srcity.org/Html5Viewer/Index.html?viewer=CapitalImprovement&scale=153600&center=6377333.5,1920867' target={'_blank'} rel='noreferrer'>Benchmarks GIS</a>
                <a href='https://www.srcity.org/DocumentCenter/View/40515/NAVD-88-Benchmark-Final-Report' target={'_blank'} rel='noreferrer'>Benchmarks PDF</a>
                <a href='https://www.srcity.org/782/Survey-Section' target={'_blank'} rel='noreferrer'>Survey Section</a>
            </div>
        </div>
    )
}