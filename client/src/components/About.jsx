import { profile } from "../data.js";

export default function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <header className="sec-head" data-reveal>
        <span className="sec-num">01</span>
        <h2 id="about-title">About <em>me</em></h2>
        <p className="sec-note">Student, builder, team coordinator.</p>
      </header>
      <div className="about" data-reveal>
        <p className="about-lede">{profile.summary}</p>
        <p className="actions">
          <a className="btn ghost" href={profile.resume} download>Download résumé ↓</a>
          {profile.linkedin && <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
        </p>
      </div>
    </section>
  );
}
