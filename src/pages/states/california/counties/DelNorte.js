import React from 'react'
import { Link } from 'react-router-dom'
import District1 from '../caltrans_districts/District1'

const DelNorte = () => {
    return (
        <div className='county-info'>
            <div className='county-btn'>
                <Link to={'/counties'}><button>Back to Counties</button></Link>
                <h1 className='title'>Del Norte County</h1>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <div className='apn-format'>
                <h3>APN Format:</h3>
                <p>115162007000&nbsp;&nbsp;&nbsp;&nbsp;(115-162-007-000)</p>
            </div>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Links:</h3>
                <a href='https://dnco.maps.arcgis.com/apps/webappviewer/index.html?id=52c9895399ff484a8b476d066172543e' target={"_blank"} rel="noreferrer">Parcel Viewer</a>&nbsp;&nbsp;&nbsp;(GIS)
                <br />
                <a href='https://assr.parcelquest.com/impl/DNXASSR' target={"_blank"} rel="noreferrer">APN Property Search</a>&nbsp;&nbsp;&nbsp;(Free APNS)
                <br />
                <a href='https://delnortecountyca-web.tylerhost.net/web/action/ACTIONGROUP201S4' target={"_blank"} rel="noreferrer">Official Records Search</a>&nbsp;&nbsp;&nbsp;(Grant Deeds, Record Maps, etc)
                <br />
                <a href='https://www.co.del-norte.ca.us/departments/EngineeringSurveying' target={"_blank"} rel="noreferrer">Engineering and Surveying</a>&nbsp;&nbsp;&nbsp;(Contacts)
                <br />
                <a href='https://www.mediafire.com/folder/l8cfu9xg1684v/Assessment+Maps' target={"_blank"} rel="noreferrer">Assessment Maps</a>&nbsp;&nbsp;&nbsp;
                <br />
                <a href='https://www.mediafire.com/folder/d7dz2hug5dy4o/Parcel+Maps' target={"_blank"} rel="noreferrer">Parcel Maps</a>&nbsp;&nbsp;&nbsp;
                <br />
                <a href='https://www.mediafire.com/folder/fps775jxuxebm/Survey+Maps' target={"_blank"} rel="noreferrer">Survey Maps</a>&nbsp;&nbsp;&nbsp;
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Engineering and Surveying Office:</h3>
                <a href='https://www.google.com/maps/place/981+H+St+%23110,+Crescent+City,+CA+95531/@41.7569438,-124.2043524,17z/data=!3m1!4b1!4m5!3m4!1s0x54d06638603af901:0x2c6e85341d91494f!8m2!3d41.7569398!4d-124.2017775?entry=ttu' target='_blank' rel='noreferrer'>981 H Street, Suite 110 <br/>
                Crescent City, CA 95531</a>
                <br/>
                <br/>
                <p><strong>Phone:</strong> (925) 313-2343</p>
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}

            <span className='span'>
                <h3>Caltrans:</h3>
                <District1 />
            </span>

            {/* Border To Separate Information */}
            <p className='border'></p>
            {/* Border To Separate Information */}


        </div>
    )
}

export default DelNorte