import { journey, internship, education } from "../data.js";

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((i) => (
        <li key={i.title}>
          <p className="when">{i.when}</p>
          <div>
            <h4>{i.title}</h4>
            <p className="where">{i.where}</p>
            {i.text && <p>{i.text}</p>}
            {i.points && <ul className="points">{i.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Journey() {
  return (
    <section className="section wrap" id="journey" aria-labelledby="journey-title">
      <header className="sec-head" data-reveal>
        <span className="sec-num">04</span>
        <h2 id="journey-title">Beyond the <em>code</em></h2>
        <p className="sec-note">Internship, leadership and the classrooms in between.</p>
      </header>
      <div className="journey">
        <div className="journey-block" data-reveal style={{ "--i": 0 }}>
          <h3>Internship</h3>
          <Timeline items={internship} />
        </div>
        <div className="journey-block" data-reveal style={{ "--i": 1 }}>
          <h3>Leadership &amp; activities</h3>
          <Timeline items={journey} />
        </div>
        <div className="journey-block" data-reveal style={{ "--i": 2 }}>
          <h3>Education</h3>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
