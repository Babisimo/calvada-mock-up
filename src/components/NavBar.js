"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";
import calvadaLogo from "../images/calvada-logo.png"

/* next.config.mjs sets `trailingSlash: true`, so usePathname() returns
   "/counties/" — strip it before comparing or nothing but "/" ever matches. */
const normalize = (path) => {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

/* A section is active on its own page and on anything nested beneath it,
   so /cities/CACities still highlights "Cities". */
const isActiveSection = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/counties", label: "Counties" },
  { href: "/cities", label: "Cities" },
  { href: "/links", label: "Links" },
  { href: "/utilities", label: "Utilities" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = normalize(usePathname());

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        <Image
          src={calvadaLogo}
          alt="Calvada Surveying, Inc."
          width={500}
          height={135}
          priority
        />
      </Link>
      <button
        type="button"
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <ul id="primary-navigation" className={`menu ${isMenuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <CustomLink key={href} href={href} active={isActiveSection(pathname, href)}>
            {label}
          </CustomLink>
        ))}
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, active }) {
  return (
    <li className={active ? "active" : ""}>
      <Link href={href} aria-current={active ? "page" : undefined}>
        {children}
      </Link>
    </li>
  );
}
