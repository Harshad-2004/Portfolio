import { useState } from "react";
import { profile, hireMe } from "../data.js";

const links = [
  ["about", "About"],
  ["work", "Work"],
  ["skills", "Skills"],
  ["journey", "Journey"],
  ["contact", "Contact"],
];

const current = () =>
  document.documentElement.dataset.theme ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(current);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  return (
    <header className="header">
      <div className="progress" aria-hidden="true" />
      <div className="wrap header-row">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">HS</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav id="nav" aria-label="Primary" className={open ? "nav open" : "nav"}>
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span className="nav-num">0{i + 1}</span>{label}
            </a>
          ))}
          <a className="nav-resume" href={profile.resume} download>Resume ↓</a>
        </nav>
        <div className="header-tools">
          <a className="btn small hire" href={hireMe}>Hire me</a>
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <button className="icon-btn menu-btn" aria-expanded={open} aria-controls="nav" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span className={open ? "burger x" : "burger"} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
