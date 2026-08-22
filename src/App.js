import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <div className="container navbar-container">

          <a href="#home" className="logo">
            Harshad
          </a>

          <div className="nav-links">

            <a href="#home" className="active">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

            <a
              href="/Harshad-Sawant-CV.pdf"
              download
              className="cv-button"
            >
              ↓ &nbsp; Download CV
            </a>

          </div>

        </div>

      </nav>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section id="home" className="hero">

        <div className="container hero-container">

          {/* LEFT SIDE */}

          <div className="hero-content">

            <p className="hero-small-title">
              HELLO, I'M
            </p>

            <h1>
              Harshad <span>Sawant</span>
            </h1>

            <h2>
              Web Developer
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly
              websites that help businesses and individuals
              grow online. I love turning ideas into
              real-world solutions.
            </p>


            {/* BUTTONS */}

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="outline-button"
              >
                Contact Me
                <span>♙</span>
              </a>

            </div>


            {/* SOCIAL LINKS */}

            <div className="social-links">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>

              <a
                href="#"
              >
                X
              </a>

              <a
                href="mailto:harshad@example.com"
              >
                @
              </a>

            </div>

          </div>


          {/* RIGHT SIDE PHOTO */}

          <div className="hero-image">

            <div className="hero-circle"></div>

            <div className="dot-pattern"></div>

            <img
              src="/images/profile.jpg"
              alt="Harshad Sawant"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section id="about" className="about">

        <div className="container about-container">

          {/* PHOTO */}

          <div className="about-image">

            <div className="about-image-line"></div>

            <img
              src="/images/profile.jpg"
              alt="Harshad Sawant"
            />

            <a
              href="/Harshad-Sawant-CV.pdf"
              download
              className="about-cv-button"
            >
              Download CV
              <span>↓</span>
            </a>

          </div>


          {/* ABOUT CONTENT */}

          <div className="about-content">

            <p className="section-small-title">
              GET TO KNOW ME
            </p>

            <h2>
              About Me
            </h2>

            <div className="title-line"></div>


            <p>
              I'm Harshad Sawant, a passionate Web Developer
              and Computer Engineering student. I enjoy building
              websites and web applications that are fast,
              responsive and user-friendly.
            </p>

            <p>
              I have hands-on experience with HTML, CSS,
              JavaScript, React.js and other modern technologies.
              I love learning new things and working on
              challenging projects.
            </p>


            {/* INFORMATION */}

            <div className="about-info">

              <div className="info-item">

                <div className="info-icon">
                  👤
                </div>

                <div>
                  <h4>Name</h4>
                  <p>Harshad Sawant</p>
                </div>

              </div>


              <div className="info-item">

                <div className="info-icon">
                  ✉
                </div>

                <div>
                  <h4>Email</h4>
                  <p>harshad@example.com</p>
                </div>

              </div>


              <div className="info-item">

                <div className="info-icon">
                  📍
                </div>

                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>

              </div>


              <div className="info-item">

                <div className="info-icon">
                  ◷
                </div>

                <div>
                  <h4>Availability</h4>
                  <p>Open to Work</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS SECTION
      ===================================================== */}

      <section id="skills" className="skills">

        <div className="container">

          <div className="section-heading">

            <p className="section-small-title">
              MY EXPERTISE
            </p>

            <h2>
              My Skills
            </h2>

            <div className="title-line center-line"></div>

          </div>


          <div className="skills-container">


            {/* HTML */}

            <div className="skill-card">

              <div className="skill-icon html-icon">
                5
              </div>

              <h3>
                HTML
              </h3>

              <div className="skill-progress-container">

                <div className="skill-progress html-progress"></div>

              </div>

              <span>
                95%
              </span>

            </div>


            {/* CSS */}

            <div className="skill-card">

              <div className="skill-icon css-icon">
                #
              </div>

              <h3>
                CSS
              </h3>

              <div className="skill-progress-container">

                <div className="skill-progress css-progress"></div>

              </div>

              <span>
                90%
              </span>

            </div>


            {/* JAVASCRIPT */}

            <div className="skill-card">

              <div className="skill-icon js-icon">
                JS
              </div>

              <h3>
                JavaScript
              </h3>

              <div className="skill-progress-container">

                <div className="skill-progress js-progress"></div>

              </div>

              <span>
                85%
              </span>

            </div>


            {/* REACT */}

            <div className="skill-card">

              <div className="skill-icon react-icon">
                ⚛
              </div>

              <h3>
                React.js
              </h3>

              <div className="skill-progress-container">

                <div className="skill-progress react-progress"></div>

              </div>

              <span>
                80%
              </span>

            </div>


            {/* PYTHON */}

            <div className="skill-card">

              <div className="skill-icon python-icon">
                Py
              </div>

              <h3>
                Python
              </h3>

              <div className="skill-progress-container">

                <div className="skill-progress python-progress"></div>

              </div>

              <span>
                75%
              </span>

            </div>


            {/* GIT */}

            <div className="skill-card">

              <div className="skill-icon git-icon">
                Git
              </div>

              <h3>
                Git & GitHub
              </h3>

              <div className="skill-progress-container">

                <div className="skill-progress git-progress"></div>

              </div>

              <span>
                80%
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}

      <section id="projects" className="projects">

        <div className="container">

          <div className="section-heading">

            <p className="section-small-title">
              MY WORK
            </p>

            <h2>
              Projects
            </h2>

            <div className="title-line center-line"></div>

          </div>


          <div className="projects-container">


            {/* PROJECT 1 */}

            <div className="project-card">

              <div className="project-image">

                <img
                  src="/images/coffee.jpg"
                  alt="Coffee Shop Website"
                />

              </div>

              <div className="project-content">

                <h3>
                  Coffee Shop Website
                </h3>

                <p>
                  A responsive coffee shop website using
                  HTML, CSS and JavaScript with an attractive
                  user interface.
                </p>

                <div className="project-tags">

                  <span className="tag html-tag">
                    HTML
                  </span>

                  <span className="tag css-tag">
                    CSS
                  </span>

                  <span className="tag js-tag">
                    JavaScript
                  </span>

                </div>

                <a href="#contact" className="project-link">
                  View Project →
                </a>

              </div>

            </div>


            {/* PROJECT 2 */}

            <div className="project-card">

              <div className="project-image">

                <img
                  src="/images/ecommerce.jpg"
                  alt="Home Appliances E-Commerce"
                />

              </div>

              <div className="project-content">

                <h3>
                  E-Commerce Website
                </h3>

                <p>
                  An e-commerce web application for home
                  appliances built using Django with product
                  categories and product management.
                </p>

                <div className="project-tags">

                  <span className="tag python-tag">
                    Python
                  </span>

                  <span className="tag django-tag">
                    Django
                  </span>

                  <span className="tag html-tag">
                    HTML
                  </span>

                  <span className="tag css-tag">
                    CSS
                  </span>

                </div>

                <a href="#contact" className="project-link">
                  View Project →
                </a>

              </div>

            </div>


            {/* PROJECT 3 */}

            <div className="project-card">

              <div className="project-image">

                <img
                  src="/images/login.jpg"
                  alt="Login and Profile App"
                />

              </div>

              <div className="project-content">

                <h3>
                  Login & Profile App
                </h3>

                <p>
                  Android application with login and profile
                  pages. After successful login the user is
                  redirected to the profile screen.
                </p>

                <div className="project-tags">

                  <span className="tag android-tag">
                    Android
                  </span>

                  <span className="tag java-tag">
                    Java
                  </span>

                  <span className="tag xml-tag">
                    XML
                  </span>

                </div>

                <a href="#contact" className="project-link">
                  View Project →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section id="contact" className="contact">

        <div className="container">

          <div className="section-heading">

            <p className="section-small-title">
              GET IN TOUCH
            </p>

            <h2>
              Contact Me
            </h2>

            <div className="title-line center-line"></div>

          </div>


          <div className="contact-container">


            {/* CONTACT INFORMATION */}

            <div className="contact-info">

              <div className="contact-detail">

                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <h4>Email</h4>
                  <p>
                    harshad@example.com
                  </p>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <h4>Phone</h4>
                  <p>
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <h4>Location</h4>
                  <p>
                    India
                  </p>
                </div>

              </div>


              <div className="follow-me">

                <h4>
                  Follow Me
                </h4>

                <div className="contact-socials">

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    in
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git
                  </a>

                  <a href="#">
                    X
                  </a>

                  <a href="mailto:harshad@example.com">
                    @
                  </a>

                </div>

              </div>

            </div>


            {/* CONTACT FORM */}

            <div className="contact-form">

              <form>

                <div className="form-row">

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                  />

                </div>


                <input
                  type="text"
                  placeholder="Subject"
                  required
                />


                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>


                <button type="submit">
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container footer-container">

          <p>
            <strong>Harshad</strong> Sawant
          </p>

          <p>
            © 2026 Harshad Sawant. All Rights Reserved.
          </p>

          <p>
            Built with <span>♥</span> using React & CSS
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;