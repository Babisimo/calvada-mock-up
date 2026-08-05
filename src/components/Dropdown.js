"use client";
import React, { useEffect, useId, useRef, useState } from "react";

/**
 * Disclosure dropdown.
 *
 * Opens on hover (pointer devices), on click, and on Enter/Space/ArrowDown.
 * Closes on Escape, on outside click, and on blur out of the group.
 *
 * The previous implementation was CSS `:hover` only, which left the Counties
 * and Cities navigation unreachable by keyboard and unreliable on touch.
 */
export default function Dropdown({
  label,
  children,
  className = "dropdown",
  buttonClassName = "dropbtn",
  contentClassName = "dropdown-content",
}) {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const contentId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleButtonKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      // Hand focus to the first link so arrow-key entry lands somewhere useful.
      requestAnimationFrame(() => {
        containerRef.current?.querySelector(`[id="${CSS.escape(contentId)}"] a`)?.focus();
      });
    }
  };

  /* Close once focus genuinely leaves the group, not when it merely moves
     between the button and its own menu items. */
  const handleBlur = (event) => {
    if (!containerRef.current?.contains(event.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`${className}${isOpen ? " open" : ""}`}
      onBlur={handleBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        className={buttonClassName}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setOpen((open) => !open)}
        onKeyDown={handleButtonKeyDown}
      >
        {label}
      </button>
      <div id={contentId} className={contentClassName}>
        {children}
      </div>
    </div>
  );
}
