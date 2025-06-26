import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-top">
        <FooterLogo />
        <FooterLinks />
      </div>

      <hr className="footer-divider" />

      <FooterBottom />
    </div>
  </footer>
);

const FooterLogo = () => (
  <div className="footer-logo">
    <img src="/picture/logo_white.png" alt="logo" width="200" />
    <p className="footer-description">
      Creating beautiful, functional, and user-centered digital experiences that
      help businesses grow and thrive online.
    </p>
  </div>
);

const FooterLinks = () => (
  <div className="footer-links">
    <LinkSection
      title="Quick Links"
      links={[
        { href: "#home", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#services", text: "Services" },
        { href: "#portfolio", text: "Portfolio" },
        { href: "#contact", text: "Contact" },
        { href: "/admin-login", text: "LOGIN", internal: true },
      ]}
    />
    <LinkSection
      title="Services"
      links={[
        { href: "#", text: "Web Development" },
        { href: "#", text: "UI/UX Design" },
        { href: "#", text: "E-Commerce" },
        { href: "#", text: "SEO Integration" },
        { href: "#", text: "Performance Optimization" },
      ]}
    />
  </div>
);

const LinkSection = ({ title, links }) => (
  <div className="link-section">
    <h4 className="link-title">{title}</h4>
    <ul className="link-list">
      {links.map((link, index) => (
        <li key={index}>
          {link.internal ? (
            <Link to={link.href} className="footer-link">
              {link.text}
            </Link>
          ) : (
            <a href={link.href} className="footer-link">
              {link.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    <p className="footer-copy">
      &copy; 2025 Gumel-Innovation. All rights reserved.
    </p>
    <div className="footer-socials">
      <SocialIcon href="https://github.com/mustapha08204" icon="github-fill" />
      <SocialIcon
        href="https://www.linkedin.com/in/mustapha-ali-bb15681a9/"
        icon="linkedin-fill"
      />
      <SocialIcon
        href="https://x.com/jay_jay060804?t=l45YBocAU2nSpmmcTvvGgA&s=09"
        icon="twitter-fill"
      />
      <SocialIcon href="#" icon="dribbble-fill" />
    </div>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={`ri-${icon}`}></i>
  </a>
);

export default Footer;
