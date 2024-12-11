import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function AzCountiesNavBar() {
    return (
        <nav className="counties">
            <ul>
                <CustomLink to="/santacruzaz">Santa Cruz</CustomLink>
                <CustomLink to="/maricopa">Maricopa</CustomLink>
                <CustomLink to="/pima">Pima</CustomLink>
                <CustomLink to="/yuma">Yuma</CustomLink>
                <CustomLink to="/cochise">Cochise</CustomLink>
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