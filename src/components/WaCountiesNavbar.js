"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import waCounties from "../data/washington_counties.json";

export default function WaCountiesNavBar() {
  const pathname = usePathname();

  return (
    <nav className="counties">
      <ul>
        {waCounties && Array.isArray(waCounties) && waCounties
          .sort((a, b) => a.id.localeCompare(b.id))
          .map((county) => {
            const href = `/${county.id.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <li key={county.id} className={isActive ? "active" : ""}>
                <Link href={href}>{county.name}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
