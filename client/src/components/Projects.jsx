import { projects } from "../data.js";

export default function Projects() {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <header className="sec-head" data-reveal>
        <span className="sec-num">02</span>
        <h2 id="work-title">Selected <em>work</em></h2>
        <p className="sec-note">{projects.length} projects, from the web to Android to ML.</p>
      </header>
      <ol className="projects">
        {projects.map((p, i) => (
          <li className="project" key={p.title} data-reveal style={{ "--i": i }}>
            <span className="project-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div className="project-head">
              <h3>{p.title}</h3>
              <p className="project-sub">{p.subtitle}</p>
              {p.status && <p className="badge">{p.status}</p>}
            </div>
            <div className="project-body">
              <ul className="points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              <ul className="tags" aria-label="Technologies">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              {(p.github || p.demo) && (
                <p className="links">
                  {p.github && <a className="text-link" href={p.github} target="_blank" rel="noreferrer">Source ↗</a>}
                  {p.demo && <a className="text-link" href={p.demo} target="_blank" rel="noreferrer">Live demo ↗</a>}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
