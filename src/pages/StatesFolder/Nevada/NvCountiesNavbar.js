import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NvCountiesNavBar() {
    return (
        <nav className="counties">
            <ul>
                <CustomLink to="/clark">Clark</CustomLink>
                <CustomLink to="/washoe">Washoe</CustomLink>
                                
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}