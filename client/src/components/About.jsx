import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiVite, SiExpress } from "react-icons/si";

const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="about-content">
        <div className="about-image" data-aos="fade-right">
          <div className="image-wrapper">
            <img
              src="/picture/_DSC9058.JPG"
              alt="About Me"
              className="about-img"
            />
          </div>
        </div>

        <div className="about-text" data-aos="fade-left" data-aos-delay="100">
          <h2 className="about-title">👋 About Me</h2>
          <AboutContent />
          <AboutButtons />
        </div>
      </div>
    </div>
  </section>
);

const AboutContent = () => (
  <>
    <p className="about-paragraph">
      I'm <span className="highlight-blue">Gumel</span>, a full-stack web
      developer and UI/UX designer with over 2 years of experience building
      modern digital solutions.
    </p>
    <p className="about-paragraph">
      I specialize in creating fast, accessible, and responsive web apps using{" "}
      <span className="highlight">React</span>,{" "}
      <span className="highlight">HTML</span>,{" "}
      <span className="highlight">CSS</span>,{" "}
      <span className="highlight">JavaScript</span>, and{" "}
      <span className="highlight">Vite</span> on the frontend.
    </p>
    <p className="about-paragraph">
      On the backend, I build scalable APIs and logic with{" "}
      <span className="highlight">Node.js</span> and{" "}
      <span className="highlight">Express</span>, making sure every project runs
      smoothly from end to end.
    </p>
    <p className="about-paragraph last">
      I'm also skilled in using <span className="highlight">Figma</span> to
      design high-fidelity mockups and bring ideas to life through engaging user
      experiences.
    </p>

    <TechStack />
  </>
);

const TechStack = () => (
  <div className="tech-stack">
    <h3 className="tech-stack-title">🛠️ Tech Stack</h3>
    <div className="tech-icons">
      <FaHtml5 className="tech-icon" title="HTML5" />
      <FaCss3Alt className="tech-icon" title="CSS3" />
      <FaJs className="tech-icon" title="JavaScript" />
      <FaReact className="tech-icon" title="React" />
      <SiNextdotjs className="tech-icon" title="Next.js" />
      <SiVite className="tech-icon" title="Vite" />
      <FaNodeJs className="tech-icon" title="Node.js" />
      <SiExpress className="tech-icon" title="Express" />
      <FaFigma className="tech-icon" title="Figma" />
    </div>
  </div>
);
const AboutButtons = () => (
  <div className="about-buttons">
    <a href="#contact" className="btn-primary">
      📬 Contact Me
    </a>
    <a href="/CV.pdf" className="btn-secondary">
      <i className="ri-download-line"></i> Download CV
    </a>
  </div>
);

export default About;
