import React from "react";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">
        We Craft{" "}
        <span className="highlight">Exceptional Digital Experiences</span>
      </h1>
      <p className="hero-description">
        At Gumel Innovation, we design seamless, functional, and human-centered
        digital solutions that help your business thrive in today's fast-paced
        tech world.
      </p>

      <a href="#contact" className="hero-button">
        Let's Build Something Great
      </a>
    </div>

    <div className="coffee-button">
      <a
        href="https://www.buymeacoffee.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: "45px", width: "162px" }}
        />
      </a>
    </div>
  </section>
);

export default Hero;
