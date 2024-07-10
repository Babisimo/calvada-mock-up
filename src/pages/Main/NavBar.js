import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../styles/navbar.css";
import calvadaLogo from "../../images/calvada_logo.png"

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img
          alt="calvada-logo"
          src={calvadaLogo}
        ></img>
      </Link>
      <button className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/counties">Counties</CustomLink>
        <CustomLink to="/cities">Cities</CustomLink>
        <CustomLink to="/links">Links</CustomLink>
        <CustomLink to="/utilities">Utilities</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
