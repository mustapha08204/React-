import React from "react";

const SectionHeader = ({ title, description }) => (
  <div className="section-header">
    <h2 className="section-title">{title}</h2>
    <div className="section-underline"></div>
    <p className="section-description">{description}</p>
  </div>
);

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <SectionHeader
        title="Get In Touch"
        description="Have a project in mind or want to discuss how I can help your business? Feel free to reach out!"
      />
      <div className="contact-content">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <div className="contact-form">
    <h3 className="form-title">Send Me a Message</h3>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      {/* Netlify Hidden Inputs */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <input name="bot-field" />
      </div>

      <div className="form-grid">
        <FormField
          label="Your Name"
          type="text"
          name="name"
          placeholder="Mustapha Ali"
        />
        <FormField
          label="Your Email"
          type="email"
          name="email"
          placeholder="gumel@example.com"
        />
      </div>

      <FormField
        label="Subject"
        type="text"
        name="subject"
        placeholder="Project Inquiry"
      />

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="form-textarea"
          placeholder="Tell me about your project..."
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  </div>
);

const FormField = ({ label, type, name, placeholder }) => (
  <div>
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="form-input"
      placeholder={placeholder}
      required
    />
  </div>
);

const ContactInfo = () => (
  <div className="contact-info">
    <div className="info-card">
      <h3 className="info-title">Contact Information</h3>
      <ContactDetail
        icon="map-pin-line"
        title="Location"
        value="Online-Based / Remote"
      />
      <ContactDetail
        icon="mail-line"
        title="Email"
        value="gumel.innovation@gmail.com"
        isLink
      />
      <ContactDetail
        icon="phone-line"
        title="Phone"
        value="+234 9060034043"
        isLink
      />
    </div>
    <SocialLinks />
  </div>
);

const ContactDetail = ({ icon, title, value, isLink = false }) => (
  <div className="contact-detail">
    <div className="detail-icon">
      <i className={`ri-${icon}`}></i>
    </div>
    <div>
      <h4 className="detail-title">{title}</h4>
      {isLink ? (
        <a
          href={title === "Email" ? `mailto:${value}` : `tel:${value}`}
          className="detail-link"
        >
          {value}
        </a>
      ) : (
        <p className="detail-text">{value}</p>
      )}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="social-card">
    <h3 className="info-title">Follow Me</h3>
    <div className="social-icons">
      <SocialIcon href="https://github.com/mustapha08204" icon="github-fill" />
      <SocialIcon
        href="https://www.linkedin.com/in/mustapha-ali-bb15681a9/"
        icon="linkedin-fill"
      />
      <SocialIcon
        href="https://x.com/jay_jay060804?t=l45YBocAU2nSpmmcTvvGgA&s=09"
        icon="twitter-fill"
      />
      <SocialIcon
        href="https://www.tiktok.com/@gumel_innovation?_t=ZS-8vmAdFAXBl1&_r=1"
        icon="tiktok-fill"
      />
      <SocialIcon href="https://wa.me/2349060034043" icon="whatsapp-fill" />
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

export default Contact;
