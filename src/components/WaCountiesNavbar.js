"use client"
import React from "react";
import CountyDropdown from "./CountyDropdown";
import waCounties from "../data/washington_counties.json";

export default function WaCountiesNavBar() {
  return <CountyDropdown counties={waCounties} />;
}
