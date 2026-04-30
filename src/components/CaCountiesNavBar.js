"use client"
import React from "react";
import CountyDropdown from "./CountyDropdown";
import caCounties from "../data/california_counties.json";

export default function CaCountiesNavBar() {
  return <CountyDropdown counties={caCounties} stripCountyName />;
}
