import React from "react";
import { execSync } from "node:child_process";
import "../styles/footer.css";

const lastCommitDate = (() => {
  try {
    return execSync("git log -1 --format=%cI HEAD").toString().trim();
  } catch {
    return new Date().toISOString();
  }
})();

const lastCommitSubject = (() => {
  try {
    return execSync("git log -1 --format=%s HEAD").toString().trim();
  } catch {
    return "";
  }
})();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZoneName: "short",
}).format(new Date(lastCommitDate));

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Last updated:{" "}
        <span className="footer-update" tabIndex={0}>
          {formattedDate}
          {lastCommitSubject && (
            <span className="footer-tooltip" role="tooltip">
              {lastCommitSubject}
            </span>
          )}
        </span>
      </p>
    </footer>
  );
}
