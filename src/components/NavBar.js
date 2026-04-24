"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";
import calvadaLogo from "../images/calvada_logo.png"

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        <img
          alt="calvada-logo"
          src={calvadaLogo.src || calvadaLogo}
        ></img>
      </Link>
      <button className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <CustomLink href="/" active={pathname === "/"}>Home</CustomLink>
        <CustomLink href="/counties" active={pathname === "/counties"}>Counties</CustomLink>
        <CustomLink href="/cities" active={pathname === "/cities"}>Cities</CustomLink>
        <CustomLink href="/links" active={pathname === "/links"}>Links</CustomLink>
        <CustomLink href="/utilities" active={pathname === "/utilities"}>Utilities</CustomLink>
        <CustomLink href="/contact" active={pathname === "/contact"}>Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, active }) {
  return (
    <li className={active ? "active" : ""}>
      <Link href={href}>
        {children}
      </Link>
    </li>
  );
}
