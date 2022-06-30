import React from "react"
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1 className="title">Home</h1>
            <div className="buttons">
                <Link to={'/counties'}><button onClick={''}>Counties</button></Link>
                <Link to={'/cities'}><button onClick={''}>Cities</button></Link>
                <Link to={'/caltrans'}><button onClick={''}>Caltrans</button></Link>                
            </div>
        </div>
    )
}