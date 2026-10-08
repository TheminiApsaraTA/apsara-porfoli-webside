import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#home" className="logo">
          Apsara<span>.</span>
        </a>

        <div className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>


      {/* ================= HOME ================= */}

      <section className="home" id="home">

        <div className="home-content">

          <p className="welcome">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Apsara</span>
          </h1>

          <h2>
            Software Engineer & Web Developer
          </h2>

          <p className="home-description">
            I am a Computing student passionate about software
            engineering, web development and modern technologies.
            I also enjoy learning Machine Learning and Cloud Computing.
          </p>

          <div className="home-buttons">

            <a
              href="#projects"
              className="purple-button"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="outline-button"
            >
              Contact Me
            </a>

            <a
              href="/Apsara-CV.pdf"
              download
              className="cv-button"
            >
              Download CV
            </a>

          </div>

        </div>


        {/* ================= PROFILE PHOTO ================= */}

        <div className="photo-area">

          <div className="photo-circle">

            <img
              src="/Apsara-Profile.jpg"
              alt="Apsara Profile"
            />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section" id="about">

        <p className="label">
          ABOUT ME
        </p>

        <h2 className="title">
          Who I am
        </h2>

        <div className="about-wrapper">

          <div className="about-text">

            <p>
              I am a BSc Computing student with an interest in
              software engineering and web development.
            </p>

            <p>
              I enjoy creating practical digital solutions and
              continuously improving my programming and technical skills.
            </p>

            <p>
              My current learning areas include Machine Learning,
              Cloud Computing and Cyber Security.
            </p>

          </div>


          <div className="about-boxes">

            <div className="about-box">

              <span>01</span>

              <div>

                <h3>
                  Web Development
                </h3>

                <p>
                  Building modern and responsive web applications.
                </p>

              </div>

            </div>


            <div className="about-box">

              <span>02</span>

              <div>

                <h3>
                  Machine Learning
                </h3>

                <p>
                  Learning intelligent and data-driven systems.
                </p>

              </div>

            </div>


            <div className="about-box">

              <span>03</span>

              <div>

                <h3>
                  Cloud Computing
                </h3>

                <p>
                  Exploring scalable cloud technologies and services.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="section" id="skills">

        <p className="label">
          MY SKILLS
        </p>

        <h2 className="title">
          Technologies I use
        </h2>

        <div className="skills-list">

          <div>Python</div>
          <div>Java</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>HTML & CSS</div>
          <div>SQL</div>
          <div>MySQL</div>
          <div>Node.js</div>
          <div>Git & GitHub</div>
          <div>Machine Learning</div>
          <div>Cloud Computing</div>
          <div>Cyber Security</div>
          <div>PHP</div>
          <div>Pandas</div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="section" id="projects">

        <p className="label">
          MY WORK
        </p>

        <h2 className="title">
          Featured Projects
        </h2>

        <div className="project-grid">


          {/* PROJECT 01 */}

          <div className="project">

            <span className="project-number">
              01
            </span>

            <h3>
              AI TripMate
            </h3>

            <p>
              An AI-based travel planning application that helps
              users plan trips according to their budget, interests
              and travel preferences.
            </p>

            <div className="project-tags">

              <span>React</span>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>Python</span>
              <span>ML</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/TheminiApsaraTA"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

              <a
                href="#"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>

          </div>


          {/* PROJECT 02 */}

          <div className="project">

            <span className="project-number">
              02
            </span>

            <h3>
              Solo Travel
            </h3>

            <p>
              A travel planning and community platform designed
              for independent travellers to explore destinations,
              plan trips and connect with other travellers.
            </p>

            <div className="project-tags">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/TheminiApsaraTA"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

              <a
                href="#"
                className="project-link"
              >
                Live Demo →
              </a>

            </div>

          </div>


          {/* PROJECT 03 */}

          <div className="project">

            <span className="project-number">
              03
            </span>

            <h3>
              Python & ML Projects
            </h3>

            <p>
              A collection of Python projects focused on programming,
              data processing and machine learning fundamentals.
            </p>

            <div className="project-tags">

              <span>Python</span>
              <span>Pandas</span>
              <span>Data</span>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/TheminiApsaraTA"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section className="section" id="education">

        <p className="label">
          EDUCATION
        </p>

        <h2 className="title">
          My Education
        </h2>

        <div className="education-list">


          {/* EDUCATION 01 */}

          <div className="education-item">

            <div className="education-number">
              01
            </div>

            <div>

              <h3>
                BSc Computing
              </h3>

              <h4>
                University of Bolton
              </h4>

              <p>
                Studying computing with a focus on software development,
                programming, databases, Machine Learning and modern
                computing technologies.
              </p>

            </div>

          </div>


          {/* EDUCATION 02 */}

          <div className="education-item">

            <div className="education-number">
              02
            </div>

            <div>

              <h3>
                Cyber Security & Ethical Hacking HND
              </h3>

              <h4>
                Winsys City Campus
              </h4>

              <p>
                Learning cybersecurity concepts, ethical hacking,
                network security and security fundamentals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="contact" id="contact">

        <div className="contact-heading">

          <p className="label">
            CONTACT ME
          </p>

          <h2>
            Let's create something
            <span> amazing.</span>
          </h2>

          <p>
            Have an opportunity, project idea or simply want to
            connect? Feel free to send me a message.
          </p>

        </div>


        <div className="contact-content">


          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <div className="contact-detail">

              <small>
                EMAIL
              </small>

              <a
                href="mailto:apsarathemini0@mail.com"
                className="contact-email"
              >
                apsarathemini0@mail.com
              </a>

            </div>


            <div className="contact-detail">

              <small>
                LOCATION
              </small>

              <p>
                United Arab Emirates
              </p>

            </div>


            <div className="contact-detail">

              <small>
                OPEN TO
              </small>

              <p>
                Internships & Opportunities
              </p>

            </div>


            {/* SOCIAL LINKS */}

            <div className="contact-social">

              <a
                href="https://github.com/TheminiApsaraTA"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/themini-apsara"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* CONTACT FORM */}

          <form
            className="contact-form"
            action="mailto:apsarathemini0@mail.com"
            method="post"
            encType="text/plain"
          >

            <div className="input-row">

              <div>

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  required
                />

              </div>


              <div>

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="Email"
                  placeholder="Your email"
                  required
                />

              </div>

            </div>


            <div>

              <label>
                Subject
              </label>

              <input
                type="text"
                name="Subject"
                placeholder="What is this about?"
                required
              />

            </div>


            <div>

              <label>
                Message
              </label>

              <textarea
                name="Message"
                rows={6}
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          Apsara<span>.</span>
        </div>

        <p>
          © 2026 Apsara. All rights reserved.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/TheminiApsaraTA"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/themini-apsara"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;