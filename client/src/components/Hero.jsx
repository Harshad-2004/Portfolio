import { useRef } from "react";
import Socials from "./Socials.jsx";
import { profile, projects, hireMe } from "../data.js";

const building = projects.find((p) => p.status);

// Splits a word into letters that rise in one after another.
const Letters = ({ text, start }) =>
  [...text].map((ch, i) => <span className="ch" key={i} style={{ "--i": start + i }}>{ch}</span>);

function Portrait() {
  const ref = useRef(null);
  function tilt(e) {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--rx", `${(-y * 12).toFixed(2)}deg`);
    ref.current.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
  }
  const reset = () => { ref.current.style.setProperty("--rx", "0deg"); ref.current.style.setProperty("--ry", "0deg"); };

  return (
    <figure className="portrait" ref={ref} onPointerMove={tilt} onPointerLeave={reset}>
      <div className="portrait-card">
        <img src={profile.photo} fetchpriority="high" decoding="async" alt={`Portrait of ${profile.name}`} width="1254" height="1254" />
        <figcaption className="portrait-tag"><span className="dot" aria-hidden="true" />Available for internships</figcaption>
      </div>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-main">
        <p className="eyebrow">
          <span className="dot" aria-hidden="true" />
          Open to internships · Class of 2027
        </p>
        <h1 id="hero-title" className="hero-name" aria-label={profile.name}>
          <span className="line" aria-hidden="true"><Letters text="Harshad" start={0} /></span>
          <span className="line" aria-hidden="true"><em><Letters text="Sawant" start={7} /></em></span>
        </h1>
        <p className="hero-line">{profile.headline}</p>
        <div className="actions">
          <a className="btn" href={hireMe}>Hire me <span aria-hidden="true">→</span></a>
          <a className="btn ghost" href="#work">See the work</a>
          <a className="text-link" href={profile.resume} download>Résumé ↓</a>
        </div>
        <Socials />
      </div>
      <div className="hero-side">
        <Portrait />
        <dl className="hero-facts">
          <div><dt>Focus</dt><dd>Full-stack MERN · Applied ML</dd></div>
          <div><dt>Studying</dt><dd>B.E. Computer Science, 2023–27</dd></div>
          {building && <div><dt>Building</dt><dd>{building.title}, {building.subtitle}</dd></div>}
        </dl>
      </div>
    </section>
  );
}
