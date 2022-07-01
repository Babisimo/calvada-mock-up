import React from "react"
import {Link, useMatch, useResolvedPath} from "react-router-dom"

// let states = []

export default function StatesNavBar() {
    return (
        <nav className="navigator">
            <ul>
                <CustomLink to="/arizona">Arizona</CustomLink>             
                <CustomLink to="/california">California</CustomLink>
                <CustomLink to="/nevada">Nevada</CustomLink>
                <CustomLink to="/texas">Texas</CustomLink>   
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}