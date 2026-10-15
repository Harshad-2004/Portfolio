import { skills } from "../data.js";

const logo = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-original.svg`;

export default function Skills() {
  return (
    <section className="section wrap" id="skills" aria-labelledby="skills-title">
      <header className="sec-head" data-reveal>
        <span className="sec-num">03</span>
        <h2 id="skills-title">Tools of the <em>trade</em></h2>
        <p className="sec-note">What I reach for, grouped the way I use it.</p>
      </header>
      <table className="skills-table">
        <thead>
          <tr><th scope="col">No.</th><th scope="col">Category</th><th scope="col">Technologies</th></tr>
        </thead>
        <tbody>
          {skills.map((g, i) => (
            <tr key={g.group} data-reveal style={{ "--i": i }}>
              <td className="skill-no">{String(i + 1).padStart(2, "0")}</td>
              <th scope="row" className="skill-cat">
                {g.group}
                <span className="skill-count">{g.items.length} items</span>
              </th>
              <td>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li className="chip" key={s.name}>
                      {s.icon
                        ? <img className={s.mono ? "mono" : undefined} src={logo(s.icon)} alt="" width="22" height="22" loading="lazy" />
                        : <span className="chip-abbr" aria-hidden="true">{s.abbr}</span>}
                      {s.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
