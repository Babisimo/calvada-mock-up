"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CACountiesArr from "../data/california_counties.json";

export default function CaCountiesNavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const countyRefs = useRef({});
  const searchTimeout = useRef(null);
  const pathname = usePathname();

  const scrollToCounty = (countyId) => {
    if (countyId && countyRefs.current[countyId]) {
      countyRefs.current[countyId].scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        setSearchTerm((prev) => prev + e.key.toLowerCase());

        const matched = CACountiesArr && Array.isArray(CACountiesArr) && CACountiesArr.find((c) =>
          c.id.toLowerCase().startsWith(searchTerm + e.key.toLowerCase())
        );

        if (matched) {
          scrollToCounty(matched.id);
        }

        if (searchTimeout.current) clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => setSearchTerm(""), 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchTerm]);

  const sortedCounties = CACountiesArr && Array.isArray(CACountiesArr) 
    ? [...CACountiesArr].sort((a, b) => a.id.localeCompare(b.id))
    : [];

  return (
    <nav className="counties">
      <ul>
        {sortedCounties.map((county) => {
          const href = `/${county.id.toLowerCase()}`;
          const isActive = pathname === href;
          return (
            <li 
              key={county.id} 
              ref={(el) => (countyRefs.current[county.id] = el)}
              className={isActive ? "active" : ""}
            >
              <Link href={href}>
                {county.name.replace(" County", "")}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
