import React from "react";
import s1 from "../img/services/s1.png";
import s2 from "../img/services/s2.png";
import s3 from "../img/services/s3.png";
import s4 from "../img/services/s4.png";

const Services = () => (
  <section id="services" className="services-section">
    <div className="services-container">
      <h2 className="services-title" data-aos="fade-up">
        🚀 Our Services
      </h2>
      <p
        className="services-description"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        At Gumel-Innovation, we provide high-quality, tailored services to
        support your business growth with modern solutions, expertise, and
        innovation.
      </p>

      <div className="services-grid">
        <ServiceCard
          icon={s1}
          title="Web Development"
          description="Responsive, high-speed, and scalable websites tailored to your goals."
          delay={0}
        />
        <ServiceCard
          icon={s2}
          title="UI/UX Design"
          description="Seamless interfaces and interactive designs that delight users."
          delay={100}
        />
        <ServiceCard
          icon={s4}
          title="Canvas Design"
          description="Creative designs for print, digital, or presentation platforms."
          delay={200}
        />
        <ServiceCard
          icon={s3}
          title="SEO Optimization"
          description="Enhance your visibility with results-driven search engine strategies."
          delay={300}
        />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, description, delay }) => (
  <div className="service-card" data-aos="zoom-in" data-aos-delay={delay}>
    <img
      loading="lazy"
      src={icon}
      alt={`Icon representing ${title}`}
      className="service-icon"
    />
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

export default Services;
