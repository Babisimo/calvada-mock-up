import React from 'react'
import PDF from '../../../../PDF/BMs/City of Coachella Bench Marks.pdf'

function Coachella() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Coachella</button>
            <div className='city-dropdown-content'>
                <a href={PDF} target={'_blank'} rel='noreferrer'>Benchmarks (PDF)</a>
                <a href={"https://www.coachella.org/departments/community-development/maps"} target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href={"https://library.municode.com/ca/coachella/codes/code_of_ordinances?nodeId=TIT17ZO"} target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Coachella
