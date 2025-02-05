import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function WaCountiesNavBar() {
    return (
        <nav className="counties">
            <ul>
                <CustomLink to="/franklin">Franklin</CustomLink>
                <CustomLink to="/king">King</CustomLink>
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