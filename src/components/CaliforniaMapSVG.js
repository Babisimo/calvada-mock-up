"use client"
import React, { useEffect, useRef } from "react";
import CaliforniaSVG from "./CaliforniaSVG";

const zones = {
    1: ["Del_Norte", "Humboldt", "Siskiyou", "Trinity", "Shasta", "Tehama", "Modoc", "Lassen", "Plumas"],
    2: ["Mendocino", "Sonoma", "Lake", "Napa", "Glenn", "Colusa", "Yolo", "Solano", "Butte", "Sutter", "Yuba", "Sacramento", "Sierra", "Nevada", "Placer", "El_Dorado", "Amador", "Alpine"],
    3: ["Marin", "San_Francisco", "San_Mateo", "Santa_Cruz", "Contra_Costa", "Alameda", "Santa_Clara", "San_Joaquin", "Stanislaus", "Merced", "Calaveras", "Tuolumne", "Mariposa", "Madera", "Mono"],
    4: ["Monterey", "San_Benito", "Fresno", "Kings", "Tulare", "Inyo"],
    5: ["San_Luis_Obispo", "Santa_Barbara", "Ventura", "Kern", "San_Bernardino", "Los_Angeles"],
    6: ["Orange", "Riverside", "San_Diego", "Imperial"],
};

const CaliforniaMapSVG = () => {
    const containerRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const tooltip = tooltipRef.current;
        if (!container || !tooltip) return;

        const counties = container.querySelectorAll(".county-path");
        if (counties.length === 0) return;

        function handleMouseOver(event) {
            const zone = event.target.getAttribute("data-zone");
            if (!zone) return;
            const zoneNumber = zone.replace("zone", "");
            const zoneCounties = zones[zoneNumber]
                .map(c => c.replace(/_/g, " "))
                .sort();

            tooltip.style.display = "block";
            tooltip.innerHTML =
                "<h3>Zone " + zoneNumber + "</h3><ul>" +
                zoneCounties.map(c => "<li>" + c + "</li>").join("") +
                "</ul>";

            container.querySelectorAll('.county-path[data-zone="' + zone + '"]').forEach(el => {
                el.style.fill = "blue";
            });
        }

        function handleMouseMove(event) {
            let left = event.clientX + 10;
            let top = event.clientY + 10;

            if (left + tooltip.offsetWidth > window.innerWidth) {
                left = event.clientX - tooltip.offsetWidth - 10;
            }
            if (top + tooltip.offsetHeight > window.innerHeight) {
                top = event.clientY - tooltip.offsetHeight - 10;
            }

            tooltip.style.left = left + "px";
            tooltip.style.top = top + "px";
        }

        function handleMouseOut(event) {
            const zone = event.target.getAttribute("data-zone");
            if (!zone) return;

            tooltip.style.display = "none";

            container.querySelectorAll('.county-path[data-zone="' + zone + '"]').forEach(el => {
                el.style.fill = "";
            });
        }

        counties.forEach(county => {
            county.addEventListener("mouseover", handleMouseOver);
            county.addEventListener("mousemove", handleMouseMove);
            county.addEventListener("mouseout", handleMouseOut);
        });

        return () => {
            counties.forEach(county => {
                county.removeEventListener("mouseover", handleMouseOver);
                county.removeEventListener("mousemove", handleMouseMove);
                county.removeEventListener("mouseout", handleMouseOut);
            });
        };
    }, []);

    return (
        <div ref={containerRef} style={{ position: "relative", display: "flex", justifyContent: "center", width: "100%" }}>
            <svg width="100%" height="45rem" viewBox="-40 -10 170 160">
                <style>{`
                    .county-path {
                        font-size: 12px;
                        fill: #d0d0d0;
                        fill-rule: nonzero;
                        stroke: #000000;
                        stroke-width: .7;
                        stroke-linecap: butt;
                        stroke-linejoin: bevel;
                        stroke-miterlimit: 4;
                        stroke-opacity: 1;
                        stroke-dasharray: none;
                        marker-start: none;
                        transform: rotate(-14deg);
                        cursor: pointer;
                    }
                    .zone-1 { fill: #ffcccc; }
                    .zone-2 { fill: #ccffcc; }
                    .zone-3 { fill: #ccccff; }
                    .zone-4 { fill: #ffcc99; }
                    .zone-5 { fill: #99ccff; }
                    .zone-6 { fill: #ffccff; }
                `}</style>
                <CaliforniaSVG />
            </svg>
            <div ref={tooltipRef} style={{
                position: "fixed",
                display: "none",
                padding: "10px",
                background: "rgba(0, 0, 0, 0.8)",
                color: "white",
                borderRadius: "5px",
                maxWidth: "200px",
                fontSize: "14px",
                lineHeight: "1.5",
                zIndex: 10,
                pointerEvents: "none",
            }} />
        </div>
    );
};

export default CaliforniaMapSVG;
