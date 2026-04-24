"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import txCounties from "../data/texas_counties.json";

export default function TxCountiesNavBar() {
  const pathname = usePathname();

  return (
    <nav className="counties">
      <ul>
        {txCounties && Array.isArray(txCounties) && txCounties
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
