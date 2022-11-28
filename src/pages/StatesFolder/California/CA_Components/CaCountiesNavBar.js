import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function CaCountiesNavBar() {

    let customLinkList = [
                <CustomLink key={'alameda'} to="/alameda">Alameda</CustomLink>,
                <CustomLink key={'alpine'} to="/alpine">Alpine</CustomLink>,
                <CustomLink key={'amador'} to="/amador">Amador</CustomLink>,
                <CustomLink key={'butte'} to="/butte">Butte</CustomLink>,
                <CustomLink key={'contra costa'} to="/contracosta">Contra Costa</CustomLink>,
                <CustomLink key={'calaveras'} to="/calaveras">Calaveras</CustomLink>,
                <CustomLink key={'el dorado'} to="/eldorado">El Dorado</CustomLink>,
                <CustomLink key={'fresno'} to="/fresno">Fresno</CustomLink>,
                <CustomLink key={'kern'} to="/kern">Kern</CustomLink>,
                <CustomLink key={'kings'} to="/kings">Kings</CustomLink>,
                <CustomLink key={'lake'} to="/lake">Lake</CustomLink>,
                <CustomLink key={'lassen'} to="/lassen">Lassen</CustomLink>,
                <CustomLink key={'los angeles'} to="/losangeles">Los Angeles</CustomLink>,
                <CustomLink key={'marin'} to="/marin">Marin</CustomLink>,
                <CustomLink key={'modoc'} to="/modoc">Modoc</CustomLink>,
                <CustomLink key={'merced'} to="/merced">Merced</CustomLink>,
                <CustomLink key={'monterey'} to="/monterey">Monterey</CustomLink>,
                <CustomLink key={'mono'} to="/mono">Mono</CustomLink>,
                <CustomLink key={'nevada'} to="/nevada">Nevada</CustomLink>,
                <CustomLink key={'orange'} to="/orange">Orange</CustomLink>,
                <CustomLink key={'placer'} to="/placer">Placer</CustomLink>,
                <CustomLink key={'plumas'} to="/plumas">Plumas</CustomLink>,
                <CustomLink key={'riverside'} to="/riverside">Riverside</CustomLink>,
                <CustomLink key={'sacranento'} to="/sacramento">Sacramento</CustomLink>,
                <CustomLink key={'san bernardino'} to="/sanbernardino">San Bernardino</CustomLink>,
                <CustomLink key={'san diego'} to="/sandiego">San Diego</CustomLink>,
                <CustomLink key={'san fransisco'} to="/sanfransisco">San Francisco</CustomLink>,
                <CustomLink key={'san joaquin'} to="/sanjoaquin">San Joaquin</CustomLink>,
                <CustomLink key={'san luis obispo'} to="/sanluisobispo">San Luis Obispo</CustomLink>,
                <CustomLink key={'san mateo'} to="/sanmateo">San Mateo</CustomLink>,
                <CustomLink key={'santa barbara'} to="/santabarbara">Santa Barbara</CustomLink>,
                <CustomLink key={'santa clara'} to="/santaclara">Santa Clara</CustomLink>,
                <CustomLink key={'santa cruz'} to="/santacruz">Santa Cruz</CustomLink>,
                <CustomLink key={'shasta'} to="/shasta">Shasta</CustomLink>,
                <CustomLink key={'solano'} to="/solano">Solano</CustomLink>,
                <CustomLink key={'sonoma'} to="/sonoma">Sonoma</CustomLink>,
                <CustomLink key={'stanislaus'} to="/stanislaus">Stanislaus</CustomLink>,
                <CustomLink key={'siskiyou'} to="/siskiyou">Siskiyou</CustomLink>,
                <CustomLink key={'sierra'} to="/sierra">Sierra</CustomLink>,
                <CustomLink key={'sutter'} to="/sutter">Sutter</CustomLink>,
                <CustomLink key={'tulare'} to="/tulare">Tulare</CustomLink>,
                <CustomLink key={'tehama'} to="/tehama">Tehama</CustomLink>,
                <CustomLink key={'trinity'} to="/trinity">Trinity</CustomLink>,
                <CustomLink key={'ventura'} to="/ventura">Ventura</CustomLink>,
                <CustomLink key={'yolo'} to="/yolo">Yolo</CustomLink>,
                <CustomLink key={'yuba'} to="/yuba">Yuba</CustomLink>
            ]

    return (
        <nav className="counties">
            <ul>
                {customLinkList.sort((a, b) => {
                    return a.key.localeCompare(b.key)
                })}
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