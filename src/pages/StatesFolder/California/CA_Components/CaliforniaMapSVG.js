import React, { useEffect, useRef, useCallback, useMemo } from "react";
import '../../../../styles/CaliforniaMapSVG.css';
import { ReactComponent as CaliforniaSVG } from "../../../../images/usa-ca (1).svg";

const CaliforniaMapSVG = () => {
    const zones = useMemo(() => ({
        1: ["Del_Norte", "Humboldt", "Siskiyou", "Trinity", "Shasta", "Tehama", "Modoc", "Lassen", "Plumas"],
        2: ["Mendocino", "Sonoma", "Lake", "Napa", "Glenn", "Colusa", "Yolo", "Solano", "Butte", "Sutter", "Yuba", "Sacramento", "Sierra", "Nevada", "Placer", "El_Dorado", "Amador", "Alpine"],
        3: ["Marin", "San_Francisco", "San_Mateo", "Santa_Cruz", "Contra_Costa", "Alameda", "Santa_Clara", "San_Joaquin", "Stanislaus", "Merced", "Calaveras", "Tuolumne", "Mariposa", "Madera", "Mono"],
        4: ["Monterey", "San_Benito", "Fresno", "Kings", "Tulare", "Inyo"],
        5: ["San_Luis_Obispo", "Santa_Barbara", "Ventura", "Kern", "San_Bernardino", "Los Angeles"],
        6: ["Orange", "Riverside", "San_Diego", "Imperial"],
    }), []);

    const tooltipRef = useRef(null);

    const handleMouseOver = useCallback((event) => {
        const zone = event.target.getAttribute("data-zone");
        if (zone) {
            const zoneNumber = zone.replace("zone", "");
            const zoneCounties = zones[zoneNumber]
                .map(county => county.replace(/_/g, ' '))
                .sort(); // Sort counties alphabetically
            tooltipRef.current.style.display = "block";
            tooltipRef.current.innerHTML = `
                <h3>Zone ${zoneNumber}</h3>
                <ul>
                    ${zoneCounties.map(county => `<li>${county}</li>`).join('')}
                </ul>
            `;
            highlightZone(zoneNumber, true);
        }
    }, [zones]);

    const handleMouseMove = useCallback((event) => {
        const tooltip = tooltipRef.current;
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const pageWidth = window.innerWidth;
        const pageHeight = window.innerHeight;
        let left = event.pageX + 10;
        let top = event.pageY + 10;

        if (left + tooltipWidth > pageWidth) {
            left = event.pageX - tooltipWidth - 10;
        }

        if (top + tooltipHeight > pageHeight) {
            top = event.pageY - tooltipHeight - 10;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }, []);

    const handleMouseOut = useCallback((event) => {
        const zone = event.target.getAttribute("data-zone");
        if (zone) {
            const zoneNumber = zone.replace("zone", "");
            tooltipRef.current.style.display = "none";
            highlightZone(zoneNumber, false);
        }
    }, []);

    const highlightZone = (zone, highlight) => {
        const counties = document.querySelectorAll(".county-path");
        counties.forEach(county => {
            if (county.getAttribute("data-zone") === `zone${zone}`) {
                if (highlight) {
                    county.style.fill = "blue"; // Color when hovered
                } else {
                    county.style.fill = ""; // Reset color
                }
            }
        });
    };

    useEffect(() => {
        const counties = document.querySelectorAll(".county-path");

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
    }, [handleMouseOver, handleMouseMove, handleMouseOut]);

    const renderCounties = (zone) => {
        return zones[zone].map((county) => (
            <path
                key={county}
                id={county}
                className="county-path"
                data-zone={`zone${zone}`} // Add data-zone attribute
            />
        ));
    };

    return (
        <div className="map-container">
            <svg width="100%" height="45rem" viewBox="-40 -10 170 160">
                <CaliforniaSVG />
                <g className="original-map">
                    {Object.keys(zones).map((zone) => (
                        <g key={zone}>
                            {renderCounties(zone)}
                        </g>
                    ))}
                </g>
            </svg>
            <div className="tooltip" ref={tooltipRef}></div>
        </div>
    );
};

export default CaliforniaMapSVG;
