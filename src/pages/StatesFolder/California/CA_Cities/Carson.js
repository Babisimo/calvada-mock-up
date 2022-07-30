import React from 'react'

function Carson() {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Carson</button>
            <div className='dropdown-content'>
                <a href='https://gis.carson.ca.us/' target={'_blank'} rel='noreferrer'>GIS (Zoning)</a>
                <a href='https://gis.carson.ca.us/pdfs/mapgallery/Zoning_24x36.pdf' target={'_blank'} rel='noreferrer'>Zoning Map</a>
                <a href='https://www.codepublishing.com/CA/Carson/#!/Carson09/Carson09010000.html' target={'_blank'} rel='noreferrer'>Municipal Code</a>
            </div>
        </div>
    )
}

export default Carson
