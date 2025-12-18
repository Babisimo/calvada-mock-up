import React from "react";
import "./DisclaimerModal.css";

export default function DisclaimerModal({ onAccept }) {
  return (
    <div className="disclaimer-backdrop">
      <div className="disclaimer-modal">
        <h2>Important Notice</h2>

        <p>
          This website is provided as a research aid only. <strong>Calvada Surveying. Inc.</strong> does <strong>not</strong> guarantee that the documents, maps,
          links, or information available here are the most current or complete.
        </p>

        <p>
          Users are strongly encouraged to verify all information by conducting
          independent searches and consulting official county, state, or agency
          sources.
        </p>

        <button onClick={onAccept}>
          I Understand
        </button>
      </div>
    </div>
  );
}