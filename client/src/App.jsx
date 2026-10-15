import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Socials from "./components/Socials.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import { profile } from "./data.js";

export default function App() {
  // Fade sections in as they scroll into view.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <Socials className="socials small" />
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
