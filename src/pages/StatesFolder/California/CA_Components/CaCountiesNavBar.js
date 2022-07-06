import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function CaCountiesNavBar() {
    return (
        <nav className="counties">
            <ul>
                <CustomLink to="/alameda">Alameda</CustomLink>
                <CustomLink to="/alpine">Alpine</CustomLink>
                <CustomLink to="/amador">Amador</CustomLink>
                <CustomLink to="/butte">Butte</CustomLink>
                <CustomLink to="/contracosta">Contra Costa</CustomLink>
                <CustomLink to="/fresno">Fresno</CustomLink>
                <CustomLink to="/kern">Kern</CustomLink>
                <CustomLink to="/kings">Kings</CustomLink>
                <CustomLink to="/lake">Lake</CustomLink>
                <CustomLink to="/losangeles">Los Angeles</CustomLink>
                <CustomLink to="/marin">Marin</CustomLink>
                <CustomLink to="/merced">Merced</CustomLink>
                <CustomLink to="/monterey">Monterey</CustomLink>
                <CustomLink to="/orange">Orange</CustomLink>
                <CustomLink to="/placer">Placer</CustomLink>
                <CustomLink to="/riverside">Riverside</CustomLink>
                <CustomLink to="/sacramento">Sacramento</CustomLink>
                <CustomLink to="/sanbernardino">San Bernardino</CustomLink>
                <CustomLink to="/sandiego">San Diego</CustomLink>
                <CustomLink to="/sanfransisco">San Fransisco</CustomLink>
                <CustomLink to="/sanjoaquin">San Joaquin</CustomLink>
                <CustomLink to="/sanluisobispo">San Luis Obispo</CustomLink>
                <CustomLink to="/sanmateo">San Mateo</CustomLink>
                <CustomLink to="/santabarbara">Santa Barabara</CustomLink>
                <CustomLink to="/santaclara">Santa Clara</CustomLink>
                <CustomLink to="/santacruz">Santa Cruz</CustomLink>
                <CustomLink to="/shasta">Shasta</CustomLink>
                <CustomLink to="/solano">Solano</CustomLink>
                <CustomLink to="/sonoma">Sonoma</CustomLink>
                <CustomLink to="/stanislaus">Stanislaus</CustomLink>
                <CustomLink to="/tulare">Tulare</CustomLink>
                <CustomLink to="/ventura">Ventura</CustomLink>
                <CustomLink to="/yolo">Yolo</CustomLink>

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