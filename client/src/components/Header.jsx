import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <img className="logo" src="/picture/logo_black.png" alt="logo" />

          <nav className="nav-desktop">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <HireButton />
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <i className={`ri-${isMenuOpen ? "close" : "menu"}-line ri-lg`}></i>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <a href={href} className="nav-link" onClick={onClick}>
    {children}
  </a>
);

const HireButton = () => (
  <a href="#contact" className="hire-button">
    Hire Me
  </a>
);

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
    <div className="mobile-menu-inner">
      <NavLink href="#home" onClick={toggleMenu}>
        Home
      </NavLink>
      <NavLink href="#about" onClick={toggleMenu}>
        About
      </NavLink>
      <NavLink href="#services" onClick={toggleMenu}>
        Services
      </NavLink>
      <NavLink href="#portfolio" onClick={toggleMenu}>
        Portfolio
      </NavLink>
      <NavLink href="#contact" onClick={toggleMenu}>
        Contact
      </NavLink>
      <div className="mobile-bottom">
        <ThemeToggle />
        <HireButton />
      </div>
    </div>
  </div>
);

const ThemeToggle = () => (
  <label className="theme-switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label>
);

export default Header;
