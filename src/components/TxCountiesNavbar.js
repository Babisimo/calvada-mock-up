"use client"
import React from "react";
import CountyDropdown from "./CountyDropdown";
import txCounties from "../data/texas_counties.json";

export default function TxCountiesNavBar() {
  return <CountyDropdown counties={txCounties} />;
}
