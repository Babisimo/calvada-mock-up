import React from 'react'
import { Link } from 'react-router-dom'
import Adot from '../components/adot'


const Pinal = () => {
    return (
        <div className='county-info'>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>Pinal County</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Links:</h3>
                <a href='https://pinal-county-gis-open-data-portal-pinal.hub.arcgis.com/' target={"_blank"} rel='noreferrer'>Pinal County GIS Open Data Portal</a>
                <br />
                <a href='https://intranet.pinal.gov/DocumentCenter/View/7901/Pinal-County-Control-Network-Data-PDF?bidId=' target={"_blank"} rel='noreferrer'>County Control Network</a>
                <br />
                <a href='https://acclaim.pinalcountyaz.gov/acclaimweb/' target={"_blank"} rel='noreferrer'>Official Records Search</a>
                <br />
                <a href='https://www.pinal.gov/Directory.aspx?did=120' target={"_blank"} rel='noreferrer'>Staff Directory</a>&nbsp;&nbsp;&nbsp;(County Surveyor Email & Phone Number)
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>ADOT:</h3>
                <Adot />
            </span>

        </div>
    )
}

export default Pinal