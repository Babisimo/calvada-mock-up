"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import azCounties from "../data/arizona_counties.json";

export default function AzCountiesNavBar() {
  const pathname = usePathname();

  return (
    <nav className="counties">
      <ul>
        {azCounties && Array.isArray(azCounties) && azCounties
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
