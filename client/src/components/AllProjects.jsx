import React, { useEffect, useState } from "react";

const BACKEND_URL = "http://localhost:5000";

const AllProjects = () => {
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
    <section className="all-projects-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title">All Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img
                src={`${BACKEND_URL}${project.image}`}
                alt={`Project: ${project.title}`}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-item-title">{project.title}</h3>
                <p className="portfolio-item-desc">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
