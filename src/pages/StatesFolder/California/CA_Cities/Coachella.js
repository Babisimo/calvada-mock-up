import React from 'react'

function Coachella() {
    return (
        <div className='city-dropdown'>
            <button className='city-dropbtn'>Coachella</button>
            <div className='city-dropdown-content'>
                <a href={"https://drive.google.com/file/d/1PwgdXSB0Z49bec3hGytwmhnji0858Qth/view?usp=drive_link"} target={'_blank'} rel='noreferrer'>Benchmarks (PDF)</a>
                <a href={"https://www.coachella.org/departments/community-development/maps"} target={'_blank'} rel='noreferrer'>Zoning</a>
                <a href={"https://library.municode.com/ca/coachella/codes/code_of_ordinances?nodeId=TIT17ZO"} target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Coachella
