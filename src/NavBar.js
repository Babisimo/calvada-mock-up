import React from "react"

export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                <img alt="logo" src={require("./imgs/logo.png")}></img>
            </a>
            <ul>
                <li className="active">
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/states">States</a>
                </li>
                
            </ul>
        </nav>
    )
}