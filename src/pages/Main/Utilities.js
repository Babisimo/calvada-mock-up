import React from "react"
import { Link } from "react-router-dom"

export default function Utilities() {
    return (
        <div>
            <h1 className="title">Utilities</h1>
            <div className="buttons">
                <Link to={'/lautilities'}><button>LA Utilities</button></Link>
            </div>
        </div>
    )
}