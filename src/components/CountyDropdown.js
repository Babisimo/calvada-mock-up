"use client"
import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** How long a type-ahead buffer stays open before the next letter starts a
 *  fresh search. Only the buffer expires — the selection it produced stays. */
const TYPEAHEAD_RESET_MS = 1500;

const EMPTY = [];

export default function CountyDropdown({ counties, stripCountyName = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const countyRefs = useRef({});
  const searchTimeout = useRef(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  const list = Array.isArray(counties) ? counties : EMPTY;

  /* Search and arrow navigation both walk this, so they agree with what is
     actually on screen. Searching the unsorted prop could land on a different
     county than the one the user sees first. */
  const sorted = useMemo(
    () => [...list].sort((a, b) => a.id.localeCompare(b.id)),
    [list]
  );

  /* `nearest` scrolls only when the target is outside the visible area, and
     scrolls the dropdown panel rather than the page. Arrowing through items
     already in view does not move anything; hitting either end scrolls by
     exactly one row. */
  const revealCounty = (countyId) => {
    countyRefs.current[countyId]?.scrollIntoView({ behavior: "auto", block: "nearest" });
  };

  const select = (countyId) => {
    if (!countyId) return;
    revealCounty(countyId);
    setSelectedId(countyId);
  };

  useEffect(() => {
    const isVisible = () => {
      const el = navRef.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    };

    const clearAll = () => {
      setSearchTerm("");
      setSelectedId(null);
      if (searchTimeout.current) clearTimeout(searchTimeout.current);
    };

    /* Step through the list by offset, stopping at the ends rather than
       wrapping. With nothing selected, ArrowDown starts at the top and
       ArrowUp starts at the bottom. */
    const step = (offset) => {
      if (sorted.length === 0) return;
      const currentIdx = sorted.findIndex((c) => c.id === selectedId);
      if (currentIdx === -1) {
        select(offset > 0 ? sorted[0].id : sorted[sorted.length - 1].id);
        return;
      }
      const nextIdx = Math.min(Math.max(currentIdx + offset, 0), sorted.length - 1);
      select(sorted[nextIdx].id);
    };

    const handleKeyDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable) return;
      if (!isVisible()) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          step(1);
          return;
        case "ArrowUp":
          e.preventDefault();
          step(-1);
          return;
        case "Home":
          e.preventDefault();
          if (sorted.length) select(sorted[0].id);
          return;
        case "End":
          e.preventDefault();
          if (sorted.length) select(sorted[sorted.length - 1].id);
          return;
        case "Enter":
          if (!selectedId) return;
          e.preventDefault();
          window.open(`/${selectedId.toLowerCase()}`, "_blank", "noopener,noreferrer");
          return;
        case "Escape":
          clearAll();
          return;
        default:
          break;
      }

      if (e.key.length !== 1 || !/^[a-zA-Z]$/.test(e.key)) return;

      const key = e.key.toLowerCase();
      const selected = sorted.find((c) => c.id === selectedId);

      /* Repeating a letter cycles through the counties starting with it.
         This keys off the current selection, not the buffer, so it keeps
         working after the buffer has expired. */
      const isCycling =
        (searchTerm === "" || searchTerm === key) &&
        selected?.id.toLowerCase().startsWith(key);

      if (isCycling) {
        const matches = sorted.filter((c) => c.id.toLowerCase().startsWith(key));
        const currentIdx = matches.findIndex((c) => c.id === selectedId);
        select(matches[(currentIdx + 1) % matches.length].id);
        setSearchTerm(key);
      } else {
        const next = searchTerm + key;
        setSearchTerm(next);
        const matched = sorted.find((c) => c.id.toLowerCase().startsWith(next));
        // No match: keep the previous selection rather than dropping it, so a
        // stray keystroke does not wipe out what the user already found.
        if (matched) select(matched.id);
      }

      if (searchTimeout.current) clearTimeout(searchTimeout.current);
      searchTimeout.current = setTimeout(() => setSearchTerm(""), TYPEAHEAD_RESET_MS);
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) clearAll();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchTerm, selectedId, sorted]);

  useEffect(() => () => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
  }, []);

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
