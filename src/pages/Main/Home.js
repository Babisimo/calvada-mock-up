import React from "react"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1 className="title">Home</h1>
            <div className="buttons">
                <Link to={'/counties'}><button>Counties</button></Link>
                <Link to={'/cities'}><button>Cities</button></Link>
            </div>
        </div>
    )
}