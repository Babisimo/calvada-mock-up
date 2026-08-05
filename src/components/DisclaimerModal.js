"use client";
import React, { useEffect, useRef } from "react";
import "./DisclaimerModal.css";

/**
 * Blocking disclaimer. The user must acknowledge it, so there is deliberately
 * no dismiss-on-backdrop and no Escape-to-close — Escape only re-traps focus.
 * Focus is held inside the dialog and restored to wherever it came from.
 */
export default function DisclaimerModal({ onAccept }) {
  const dialogRef = useRef(null);
  const acceptRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    acceptRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, []);

  return (
    <div className="disclaimer-backdrop">
      <div
        ref={dialogRef}
        className="disclaimer-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        aria-describedby="disclaimer-body"
      >
        <h2 id="disclaimer-title">Important Notice</h2>

        <div id="disclaimer-body">
          <p>
            This website is provided as a research aid only. <strong>Calvada Surveying, Inc.</strong> does <strong>not</strong> guarantee that the documents, maps,
            links, or information available here are the most current or complete.
          </p>

          <p>
            Users are strongly encouraged to verify all information by conducting
            independent searches and consulting official county, state, or agency
            sources.
          </p>
        </div>

        <button ref={acceptRef} type="button" onClick={onAccept}>
          I Understand
        </button>
      </div>
    </div>
  );
}
