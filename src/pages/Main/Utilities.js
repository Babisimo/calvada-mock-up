import React from "react"
import { Link } from "react-router-dom"

export default function Utilities() {
    return (
        <div className="util-main">
            <h1 className="title">Utilities</h1>
            <div className="util-zones">
                <Link to={'https://newtinb.digalert.org/direct/'} target="_blank" rel="noopener noreferrer"><button>DigAlert SoCal</button></Link>
                <Link to={'https://fs26.formsite.com/6jJPTG/form6/index.html'} target="_blank" rel="noopener noreferrer"><button>DigAlert North California</button></Link>

                <Link to={'/utilities/lautilities'}><button>Los Angeles</button></Link>                
                <Link to={'/utilities/zonetwoutilities'}><button>Zone 2</button></Link>
                <Link to={'/utilities/zonethreeutilities'}><button>Zone 3 - Bay Area</button></Link>
                <Link to={'/utilities/zonefourutilities'}><button>Zone 4</button></Link>
                <Link to={'/utilities/zonefiveutilities'}><button>Zone 5</button></Link>
                <Link to={'/utilities/zonesixutilities'}><button>Zone 6</button></Link>
            </div>

        </div>
    )
}