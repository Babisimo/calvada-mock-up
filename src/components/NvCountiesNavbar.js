"use client"
import React from "react";
import CountyDropdown from "./CountyDropdown";
import nvCounties from "../data/nevada_counties.json";

export default function NvCountiesNavBar() {
  return <CountyDropdown counties={nvCounties} />;
}
