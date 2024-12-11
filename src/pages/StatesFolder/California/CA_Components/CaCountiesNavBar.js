import React, { useState, useEffect, useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import CACountiesArr from "../CA_Components/CACountiesArr";

export default function CaCountiesNavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const countyRefs = useRef([]);
  const searchTimeout = useRef(null);

  const scrollToCounty = (county) => {
    if (county && countyRefs.current[county]) {
      countyRefs.current[county].scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        setSearchTerm((prevSearchTerm) => prevSearchTerm + e.key.toLowerCase());

        const matchedCounty = CACountiesArr.find((county) =>
          county.toLowerCase().startsWith(searchTerm + e.key.toLowerCase())
        );

        if (matchedCounty) {
          scrollToCounty(matchedCounty);
        }

        if (searchTimeout.current) {
          clearTimeout(searchTimeout.current);
        }

        searchTimeout.current = setTimeout(() => {
          setSearchTerm("");
        }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchTerm]);

  const customLinkList = CACountiesArr.map((county) => {
    const countyName = county.replace(/([A-Z])/g, " $1").trim(); // Add space between camel case words
    return (
      <CustomLink
        key={county}
        to={`/${county}`}
        ref={(el) => (countyRefs.current[county] = el)}
      >
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

const CustomLink = React.forwardRef(({ to, children, ...props }, ref) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li ref={ref} className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
});
