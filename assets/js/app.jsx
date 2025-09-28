const { useEffect } = React;

const Hero = () => (
  <section className="hero" aria-label="Introduction">
    <div className="container hero-grid">
      <div className="hero-left" data-aos="fade-up" data-aos-delay="100">
        <p className="eyebrow">Flutter Developer</p>
        <h1 className="headline">Hi, I’m <span className="grad-text">JUBAIR P</span></h1>
        <p className="subhead">
          I build fast, reliable, and delightful cross-platform mobile apps with Flutter, integrating
          Firebase, REST APIs, and modern state management (Provider / BLoC).
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary magnetic" href="#projects">View Projects</a>
          <a className="btn btn-ghost magnetic" href="mailto:jubijubairp@gmail.com?subject=Hello%20Jubair" rel="noopener">Email Me</a>
        </div>
        <div className="socials" aria-label="Social links">
          <a href="https://github.com/jubairp10" target="_blank" rel="noopener" aria-label="GitHub">
            <span className="iconify" data-icon="mdi:github"></span>
          </a>
          <a href="https://www.linkedin.com/in/jubair-p" target="_blank" rel="noopener" aria-label="LinkedIn">
            <span className="iconify" data-icon="mdi:linkedin"></span>
          </a>
          <a href="tel:+919072220239" aria-label="Phone">
            <span className="iconify" data-icon="mdi:phone"></span>
          </a>
          <a href="mailto:jubijubairp@gmail.com" aria-label="Email">
            <span className="iconify" data-icon="mdi:email"></span>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="avatar-wrap" aria-hidden="true" data-aos="zoom-in" data-aos-delay="200">
          <div className="avatar-blob"></div>
          <div className="avatar-ring"></div>
          <div className="avatar-initials">JP</div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section about">
    <div className="container split" data-aos="fade-up">
      <div>
        <h2>About</h2>
        <p>
          Based in Pattambi, Palakkad, Kerala — I craft cross-platform apps with a focus on performance,
          clean architecture, and thoughtful UX. Recent experience includes app store releases, Google
          Maps integrations, live tracking, and payment flows.
        </p>
        <ul className="key-facts">
          <li><span className="iconify" data-icon="mdi:email-outline"></span> jubijubairp@gmail.com</li>
          <li><span className="iconify" data-icon="mdi:map-marker"></span> Pattambi, Palakkad, Kerala</li>
          <li><span className="iconify" data-icon="mdi:phone"></span> +91 90722 20239</li>
        </ul>
      </div>
      <div className="about-cards">
        <article className="card" data-aos="fade-up" data-aos-delay="100">
          <h3>What I Do</h3>
          <p>Flutter app development, API integrations, Firebase, offline-first with Hive/Sqflite, and
          modern state management patterns.</p>
        </article>
        <article className="card" data-aos="fade-up" data-aos-delay="200">
          <h3>How I Work</h3>
          <p>Collaborate closely with design/backend, iterate quickly, and ship reliably with CI-friendly
          patterns and version control best practices.</p>
        </article>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section experience">
    <div className="container">
      <h2 data-aos="fade-up">Experience</h2>
      <div className="timeline">
        <article className="timeline-item" data-aos="fade-up">
          <div className="ti-head">
            <h3>Jr. Flutter Developer · Codeedex Technologies</h3>
            <span>Perinthalmanna · March/2025 – Present</span>
          </div>
          <ul className="ti-body">
            <li>Worked collaboratively with designers and backend engineers to develop comprehensive solutions aligned with business goals and user needs.</li>
            <li>Developed and deployed cross-platform mobile applications for both iOS and Android using Flutter.</li>
            <li>Implemented app publishing procedures via Google Play Console.</li>
          </ul>
        </article>
        <article className="timeline-item" data-aos="fade-up" data-aos-delay="100">
          <div className="ti-head">
            <h3>Flutter Developer · Adacode Solutions</h3>
            <span>Kozhikode · Jun 2024 – Sep 2024</span>
          </div>
          <ul className="ti-body">
            <li>Spearheaded the design and development of multiple cross-platform mobile apps using Flutter.</li>
            <li>Delivered end-to-end solutions with designers and backend developers to meet business needs.</li>
          </ul>
        </article>
        <article className="timeline-item" data-aos="fade-up" data-aos-delay="200">
          <div className="ti-head">
            <h3>Android Flutter Developer (Intern) · Luminar Technolab</h3>
            <span>Kozhikode · Oct 2023 – Apr 2024</span>
          </div>
          <ul className="ti-body">
            <li>Hands-on Flutter/Dart, state management, Sqflite/Hive, Firebase integration, and REST APIs.</li>
            <li>Used GitHub for version control and collaboration.</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        <article className="project-card" data-aos="zoom-in">
          <div className="pc-badges">
            <span>Flutter</span><span>Firebase</span><span>Provider</span>
          </div>
          <h3>KeyRoute</h3>
          <p>Vendor & User apps (Android) with Google Maps, live tracking, secure payment UI, group bookings, and trip creation.
             MVVM and REST APIs; published on Play Store.</p>
          <a className="btn btn-ghost" href="https://play.google.com/store/apps/details?id=com.keyroute.user&pcampaignid=web_share" target="_blank" rel="noopener">View on Play Store</a>
        </article>
        <article className="project-card" data-aos="zoom-in" data-aos-delay="100">
          <div className="pc-badges">
            <span>Flutter</span><span>Firebase</span><span>Provider</span>
          </div>
          <h3>Adacode Student App</h3>
          <p>Cross-platform learning app leveraging Firebase backend, Provider state, and embedded YouTube content for seamless delivery.</p>
        </article>
        <article className="project-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="pc-badges">
            <span>Flutter</span><span>Firebase</span><span>Provider</span>
          </div>
          <h3>Skill Free 2.0</h3>
          <p>Day-labor marketplace app offering job discovery and booking. Academic project reimagined in Flutter for better UX and performance.</p>
          <a className="btn btn-ghost" href="https://github.com/jubairp10/skillfree1.git" target="_blank" rel="noopener">Source on GitHub</a>
        </article>
        <article className="project-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="pc-badges"><span>Flutter</span></div>
          <h3>Simple Calculator App</h3>
          <p>Clean calculator with core arithmetic and simple state management; ideal for Flutter beginners.</p>
          <a className="btn btn-ghost" href="https://github.com/jubairp10/calculator.git" target="_blank" rel="noopener">Source on GitHub</a>
        </article>
        <article className="project-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="pc-badges"><span>Python</span><span>Flask</span><span>Android</span><span>MySQL</span></div>
          <h3>Skill Free (Web)</h3>
          <p>Web application for daily-wage jobs—no strict qualifications required. Focus on accessibility and flexible schedules.</p>
        </article>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skill-groups" data-aos="fade-up" data-aos-delay="100">
        <div className="skill-group">
          <h3>Programming</h3>
          <div className="chips">
            <span>Dart</span><span>HTML</span><span>SQL</span><span>Python</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>Databases</h3>
          <div className="chips">
            <span>Firebase</span><span>Sqflite</span><span>Hive</span><span>Airtable</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>Frameworks</h3>
          <div className="chips">
            <span>Flutter</span><span>Provider</span><span>API</span><span>BLoC</span>
          </div>
        </div>
        <div className="skill-group">
          <h3>Tools</h3>
          <div className="chips">
            <span>GitHub</span><span>VS Code</span><span>Android Studio</span><span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="section certifications">
    <div className="container">
      <h2 data-aos="fade-up">Certifications</h2>
      <div className="cert-grid">
        <article className="cert-card" data-aos="fade-up">
          <h3>Store Listing Certificate</h3>
          <p>Issued by Google Play Academy</p>
          <a className="btn btn-ghost" target="_blank" rel="noopener" href="https://www.credential.net/791fc0c2-5c75-4ca3-9911-00a55a4ff23d#gs.e53ta0">Verify</a>
        </article>
        <article className="cert-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Peer Educator 2016</h3>
          <p>Rashtriya Kishor Swasthya Karyakaram</p>
        </article>
        <article className="cert-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Junior Red Cross 2016–18</h3>
        </article>
        <article className="cert-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Bharath Scouts and Guides 2018–20</h3>
        </article>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="section education">
    <div className="container">
      <h2 data-aos="fade-up">Education</h2>
      <ul className="edu-list" data-aos="fade-up" data-aos-delay="100">
        <li>
          <h3>Bachelor of Computer Application</h3>
          <span>Majlis Arts and Science College, Puramannur, Kerala · 2020 – 2023</span>
        </li>
        <li>
          <h3>Plus Two (Biology Science)</h3>
          <span>GJHSS Naduvattam · 2018 – 2020</span>
        </li>
        <li>
          <h3>SSLC</h3>
          <span>GJHSS Naduvattam · 2017 – 2018</span>
        </li>
      </ul>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container split" data-aos="fade-up">
      <div>
        <h2>Contact</h2>
        <p>Let’s collaborate. I’m open to full-time roles, freelance work, and interesting Flutter projects.</p>
        <div className="contact-ways">
          <a className="contact-item" href="mailto:jubijubairp@gmail.com">
            <span className="iconify" data-icon="mdi:email-outline"></span>
            <span>jubijubairp@gmail.com</span>
          </a>
          <a className="contact-item" href="tel:+919072220239">
            <span className="iconify" data-icon="mdi:phone"></span>
            <span>+91 90722 20239</span>
          </a>
          <a className="contact-item" href="https://github.com/jubairp10" target="_blank" rel="noopener">
            <span className="iconify" data-icon="mdi:github"></span>
            <span>github.com/jubairp10</span>
          </a>
          <a className="contact-item" href="https://www.linkedin.com/in/jubair-p" target="_blank" rel="noopener">
            <span className="iconify" data-icon="mdi:linkedin"></span>
            <span>linkedin.com/in/jubair-p</span>
          </a>
        </div>
      </div>
      <form className="contact-form" action="mailto:jubijubairp@gmail.com" method="post" encType="text/plain">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="How can I help?" required />
        </div>
        <button type="submit" className="btn btn-primary magnetic">Send</button>
      </form>
    </div>
  </section>
);

const App = () => {
  useEffect(() => {
    // Refresh AOS after mount in case of timing
    if (window.AOS) AOS.refreshHard();

    // Header reveal on scroll
    const header = document.querySelector('.site-header');
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY || 0;
      header && (header.style.transform = y > last && y > 120 ? 'translateY(-100%)' : 'translateY(0)');
      last = y;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
