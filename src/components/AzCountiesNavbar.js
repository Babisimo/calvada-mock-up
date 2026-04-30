"use client"
import React from "react";
import CountyDropdown from "./CountyDropdown";
import azCounties from "../data/arizona_counties.json";

export default function AzCountiesNavBar() {
  return <CountyDropdown counties={azCounties} />;
}
