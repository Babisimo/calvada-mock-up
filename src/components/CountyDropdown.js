"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CountyDropdown({ counties, stripCountyName = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const countyRefs = useRef({});
  const searchTimeout = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  const list = Array.isArray(counties) ? counties : [];

  const scrollToCounty = (countyId) => {
    if (countyId && countyRefs.current[countyId]) {
      countyRefs.current[countyId].scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  useEffect(() => {
    const isVisible = () => {
      const el = navRef.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };

    const handleKeyDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;
      if (!isVisible()) return;

      if (e.key === "Enter" && selectedId) {
        e.preventDefault();
        window.open(`/${selectedId.toLowerCase()}`, "_blank", "noopener,noreferrer");
        return;
      }

      if (e.key === "Escape") {
        setSearchTerm("");
        setSelectedId(null);
        return;
      }

      if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) {
        const key = e.key.toLowerCase();
        const isCycling = searchTerm.length === 1 && searchTerm === key;

        if (isCycling) {
          const matches = list.filter((c) => c.id.toLowerCase().startsWith(key));
          if (matches.length > 0) {
            const currentIdx = matches.findIndex((c) => c.id === selectedId);
            const nextIdx = (currentIdx + 1) % matches.length;
            const nextCounty = matches[nextIdx];
            scrollToCounty(nextCounty.id);
            setSelectedId(nextCounty.id);
          }
        } else {
          const next = searchTerm + key;
          setSearchTerm(next);
          const matched = list.find((c) => c.id.toLowerCase().startsWith(next));
          if (matched) {
            scrollToCounty(matched.id);
            setSelectedId(matched.id);
          } else {
            setSelectedId(null);
          }
        }

        if (searchTimeout.current) clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => {
          setSearchTerm("");
          setSelectedId(null);
        }, 1500);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setSearchTerm("");
        setSelectedId(null);
        if (searchTimeout.current) clearTimeout(searchTimeout.current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchTerm, selectedId, list]);

  const sorted = [...list].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <nav className="counties" ref={navRef}>
      <ul>
        {sorted.map((county) => {
          const href = `/${county.id.toLowerCase()}`;
          const isActive = pathname === href;
          const isSelected = county.id === selectedId;
          const className = [isActive ? "active" : "", isSelected ? "search-selected" : ""]
            .filter(Boolean)
            .join(" ");
          const display = stripCountyName ? county.name.replace(" County", "") : county.name;
          return (
            <li
              key={county.id}
              ref={(el) => (countyRefs.current[county.id] = el)}
              className={className}
            >
              <Link href={href}>{display}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
