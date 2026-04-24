import React from "react"
import Link from "next/link"

export default function Utilities() {
    return (
        <div className="util-main">
            <h1 className="title">Utilities</h1>
            <div className="util-zones">
                <a href={'https://newtinb.digalert.org/direct/'} target="_blank" rel="noopener noreferrer"><button>DigAlert SoCal</button></a>
                <a href={'https://onecallcapd.undergroundservicealert.org/ngen.web//Account/Login?returnUrl=%2Fngen.web%2F'} target="_blank" rel="noopener noreferrer"><button>DigAlert North California</button></a>

                <Link href={'/utilities/lautilities'}><button>Los Angeles</button></Link>                
                <Link href={'/utilities/zonetwoutilities'}><button>Zone 2</button></Link>
                <Link href={'/utilities/zonethreeutilities'}><button>Zone 3 - Bay Area</button></Link>
                <Link href={'/utilities/zonefourutilities'}><button>Zone 4</button></Link>
                <Link href={'/utilities/zonefiveutilities'}><button>Zone 5</button></Link>
                <Link href={'/utilities/zonesixutilities'}><button>Zone 6</button></Link>
            </div>

        </div>
    )
}
