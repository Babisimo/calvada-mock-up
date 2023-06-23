import React from "react"
import { Link } from "react-router-dom"

export default function Utilities() {
    return (
        <div className="util-main">
            <h1 className="title">Utilities</h1>
            <div className="util-zones">
                <Link to={'/utilities/lautilities'}><button>Los Angeles</button></Link>
                
                <Link to={'/utilities/zonetwoutilities'}><button>Zone 2</button></Link>

                <Link to={'/utilities/zonethreeutilities'}><button>Zone 3 - Bay Area</button></Link>

                <Link to={'/utilities/zonefourutilities'}><button>Zone 4</button></Link>

            </div>
        </div>
    )
}