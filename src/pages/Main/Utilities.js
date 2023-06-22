import React from "react"
import { Link } from "react-router-dom"

export default function Utilities() {
    return (
        <div>
            <h1 className="title">Utilities</h1>
            <div className="buttons">
                <Link to={'/lautilities'}><button>Los Angeles</button></Link>
                
                <Link to={'/zonetwoutilities'}><button>Zone 2</button></Link>

                <Link to={'/zonethreeutilities'}><button>Zone 3 - Bay Area</button></Link>

            </div>
        </div>
    )
}