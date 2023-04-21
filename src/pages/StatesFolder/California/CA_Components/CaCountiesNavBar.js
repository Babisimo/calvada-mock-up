import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import CACountiesArr from "../CA_Components/CACountiesArr"

export default function CaCountiesNavBar() {
  const customLinkList = CACountiesArr.map(county => {
    const countyName = county.replace(/([A-Z])/g, ' $1').trim(); // Add space between camel case words
    return (
      <CustomLink key={county} to={`/${county}`}>
        {countyName}
      </CustomLink>
    );
  });

  return (
    <nav className="counties">
      <ul>
        {customLinkList.sort((a, b) => {
          return a.key.localeCompare(b.key);
        })}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}



