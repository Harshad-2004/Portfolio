import { useState } from "react";
import { profile, hireMe } from "../data.js";

const empty = { name: "", email: "", message: "", website: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [state, setState] = useState({ phase: "idle", text: "" });
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { location.href = hireMe; } // clipboard blocked (e.g. http): fall back to the mail app
  }

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ phase: "sending", text: "Sending your message..." });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Could not send your message.");
      setForm(empty);
      setState({ phase: "ok", text: data.message || "Message sent." });
    } catch (err) {
      setState({ phase: "error", text: err.message });
    }
  }

  return (
    <section className="section wrap" id="contact" aria-labelledby="contact-title">
      <header className="sec-head" data-reveal>
        <span className="sec-num">05</span>
        <h2 id="contact-title">Let&rsquo;s build <em>something</em></h2>
        <p className="sec-note">Open to internships, entry-level roles and good collaborations.</p>
      </header>
      <div className="contact">
        <div className="contact-info" data-reveal>
          <p className="contact-lede">Have a role, an internship or a project in mind? Send a note here or write to me directly. I read every message.</p>
          <a className="big-link" href={hireMe}>{profile.email}</a>
          <button type="button" className="btn ghost small copy" onClick={copyEmail} aria-live="polite">
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <dl className="contact-list">
            <div><dt>Phone</dt><dd><a href={`tel:+91${profile.phone}`}>+91 {profile.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}</a></dd></div>
            {profile.github && <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace("https://", "")} ↗</a></dd></div>}
            {profile.linkedin && <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></dd></div>}
            <div><dt>Résumé</dt><dd><a href={profile.resume} download>Download PDF ↓</a></dd></div>
          </dl>
        </div>
        <form className="contact-form" onSubmit={onSubmit} data-reveal style={{ "--i": 1 }}>
          <p className="form-title">Send a message</p>
          <div className="field-row">
            <label>Name
              <input name="name" value={form.name} onChange={onChange} maxLength={80} required autoComplete="name" placeholder="Your name" />
            </label>
            <label>Email
              <input type="email" name="email" value={form.email} onChange={onChange} maxLength={120} required autoComplete="email" placeholder="you@company.com" />
            </label>
          </div>
          <label>Message
            <textarea name="message" rows="6" value={form.message} onChange={onChange} minLength={10} maxLength={2000} required placeholder="Tell me about the role or project" />
            <span className="count" aria-hidden="true">{form.message.length} / 2000</span>
          </label>
          <label className="hp" aria-hidden="true">Website
            <input name="website" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off" />
          </label>
          <button className="btn send" type="submit" disabled={state.phase === "sending"}>
            {state.phase === "sending" ? "Sending…" : <>Send message <span aria-hidden="true">→</span></>}
          </button>
          <p role="status" aria-live="polite" className={`status ${state.phase}`}>{state.text}</p>
        </form>
      </div>
    </section>
  );
}
