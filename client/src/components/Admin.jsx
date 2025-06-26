import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  // Projects state
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: null,
    link: "",
  });

  // Team state
  const [team, setTeam] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch projects and team on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message));

    fetch("http://localhost:5000/api/team")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch team");
        return res.json();
      })
      .then((data) => setTeam(data))
      .catch((err) => setError(err.message));
  }, []);

  // === Projects handlers ===
  const handleProjectInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleProjectFileChange = (e) => {
    setNewProject({ ...newProject, image: e.target.files[0] });
  };

  const handleAddProject = (e) => {
    e.preventDefault();

    if (!newProject.image) {
      setError("Please select an image for project");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("description", newProject.description);
    formData.append("image", newProject.image);
    formData.append("link", newProject.link);

    fetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add project");
        return res.json();
      })
      .then((addedProject) => {
        setProjects((prev) => [...prev, addedProject]);
        setNewProject({ title: "", description: "", image: null, link: "" });
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleDeleteProject = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete project");
        return res.json();
      })
      .then(() => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  // === Team handlers ===
  const handleTeamInputChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleTeamFileChange = (e) => {
    setNewMember({ ...newMember, image: e.target.files[0] });
  };

  const handleAddTeamMember = (e) => {
    e.preventDefault();

    if (!newMember.image) {
      setError("Please select an image for team member");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", newMember.name);
    formData.append("role", newMember.role);
    formData.append("image", newMember.image);

    fetch("http://localhost:5000/api/team", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add team member");
        return res.json();
      })
      .then((addedMember) => {
        setTeam((prev) => [...prev, addedMember]);
        setNewMember({ name: "", role: "", image: null });
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const handleDeleteTeamMember = (id) => {
    setLoading(true);
    fetch(`http://localhost:5000/api/team/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete team member");
        return res.json();
      })
      .then(() => {
        setTeam((prev) => prev.filter((m) => m.id !== id));
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', sans-serif;
          margin: 0;
          padding: 0;
          background: #f4f7f9;
        }
        .admin-page {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .admin-page h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .back-button {
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          background-color: #007bff;
          color: #fff;
          font-size: 1rem;
        }
        .back-button:hover {
          background-color: #0056b3;
        }
        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .admin-form input[type="text"],
        .admin-form textarea {
          padding: 0.75rem 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          width: 100%;
        }
        .admin-form input[type="file"] {
          font-size: 1rem;
        }
        .admin-form button {
          padding: 0.75rem;
          font-size: 1rem;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .admin-form button:hover {
          background-color: #0056b3;
        }
        .admin-project-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .admin-project-item {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #fafafa;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          text-align: center;
        }
        .admin-project-item h3 {
          margin-bottom: 0.5rem;
        }
        .admin-project-item img {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          max-width: 100%;
          max-height: 150px;
          border-radius: 6px;
        }
        .admin-project-item a {
          display: inline-block;
          color: #007bff;
          text-decoration: none;
          margin-bottom: 0.5rem;
        }
        .admin-project-item button {
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .admin-project-item button:hover {
          background-color: #a71d2a;
        }
      `}</style>

      <section className="admin-page">
        <h2>Admin Dashboard – Projects</h2>

        <button className="back-button" onClick={() => navigate("/")}>
          &larr; Back
        </button>

        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {/* Projects Form */}
        <form onSubmit={handleAddProject} className="admin-form">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={newProject.title}
            onChange={handleProjectInputChange}
            required
            disabled={loading}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newProject.description}
            onChange={handleProjectInputChange}
            required
            disabled={loading}
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleProjectFileChange}
            required
            disabled={loading}
          />
          <input
            type="text"
            name="link"
            placeholder="Project Link"
            value={newProject.link}
            onChange={handleProjectInputChange}
            required
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Project"}
          </button>
        </form>

        {/* Projects List */}
        <div className="admin-project-list">
          {projects.map((project) => (
            <div key={project.id} className="admin-project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img
                src={`http://localhost:5000${project.image}`}
                alt={project.title}
              />
              <br />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Project Link
              </a>
              <br />
              <button
                onClick={() => handleDeleteProject(project.id)}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Team Management */}
        <h2>Admin Dashboard – Team Members</h2>

        {/* Team Form */}
        <form onSubmit={handleAddTeamMember} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Member Name"
            value={newMember.name}
            onChange={handleTeamInputChange}
            required
            disabled={loading}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={newMember.role}
            onChange={handleTeamInputChange}
            required
            disabled={loading}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleTeamFileChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Team Member"}
          </button>
        </form>

        {/* Team List */}
        <div className="admin-project-list">
          {team.map((member) => (
            <div key={member.id} className="admin-project-item">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <img
                src={`http://localhost:5000${member.image}`}
                alt={member.name}
              />
              <br />
              <button
                onClick={() => handleDeleteTeamMember(member.id)}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Admin;
