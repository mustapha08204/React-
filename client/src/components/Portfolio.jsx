import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = "http://localhost:5000";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then(setProjects)
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <>
      <style>{`
        /* Reset & base */
        * {
          box-sizing: border-box;
        }

        .portfolio-section {
          background: #f8fafc;
          padding: 4rem 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        .portfolio-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .portfolio-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #222;
        }

        .portfolio-underline {
          width: 60px;
          height: 4px;
          background: #4f46e5; /* Indigo-600 */
          margin: 0 auto 1.2rem;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .portfolio-description {
          font-size: 1.1rem;
          color: #555;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
          gap: 2rem;
        }

        .portfolio-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgb(0 0 0 / 0.1);
          cursor: pointer;
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolio-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgb(0 0 0 / 0.15);
        }

        .portfolio-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
          border-radius: 12px 12px 0 0;
          transition: scale 0.3s ease;
        }

        .portfolio-item:hover .portfolio-image {
          scale: 1.05;
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: rgba(79, 70, 229, 0.85); /* Indigo with opacity */
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          text-align: center;
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-item-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .portfolio-item-desc {
          font-size: 1rem;
          margin-bottom: 1.2rem;
          line-height: 1.4;
        }

        .portfolio-link {
          background: white;
          color: #4f46e5;
          font-weight: 600;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease;
          box-shadow: 0 3px 10px rgb(79 70 229 / 0.3);
        }

        .portfolio-link:hover {
          background: #4338ca; /* Darker Indigo */
          color: white;
        }

        .portfolio-button-wrapper {
          margin-top: 3rem;
          text-align: center;
        }

        .portfolio-button {
          background: #4f46e5;
          color: white;
          padding: 0.85rem 2rem;
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgb(79 70 229 / 0.4);
          transition: background 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .portfolio-button:hover {
          background: #4338ca;
          box-shadow: 0 8px 28px rgb(67 56 202 / 0.6);
        }

        /* Responsive tweaks */
        @media (max-width: 500px) {
          .portfolio-image {
            height: 160px;
          }
        }
      `}</style>

      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <SectionHeader
            title="My Portfolio"
            description="Check out some of my recent projects that showcase my skills and expertise in web development."
          />

          <div className="portfolio-grid">
            {projects.slice(0, 3).map((project) => (
              <PortfolioItem key={project.id} {...project} />
            ))}
          </div>

          <div className="portfolio-button-wrapper">
            <Link to="/all-projects" className="portfolio-button">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const SectionHeader = ({ title, description }) => (
  <div className="portfolio-header">
    <h2 className="portfolio-title">{title}</h2>
    <div className="portfolio-underline"></div>
    <p className="portfolio-description">{description}</p>
  </div>
);

const PortfolioItem = ({ image, title, description, link }) => (
  <div className="portfolio-item">
    <img
      loading="lazy"
      src={`${BACKEND_URL}${image}`}
      alt={`Screenshot of project: ${title}`}
      className="portfolio-image"
    />
    <div className="portfolio-overlay">
      <h3 className="portfolio-item-title">{title}</h3>
      <p className="portfolio-item-desc">{description}</p>
      <a
        href={link}
        className="portfolio-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  </div>
);

export default Portfolio;
