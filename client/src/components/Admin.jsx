import React, { useEffect, useState } from "react";

export default function Admin({ user, onLogout }) {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    role: "",
    field: "",
    bio: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    avatar: "", // URL string
  });
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);

  // Fetch team members on load
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  async function fetchTeamMembers() {
    setLoading(true);
    try {
      const res = await fetch("/api/team-get");
      if (!res.ok) throw new Error("Failed to fetch team members");
      const data = await res.json();
      setTeamMembers(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this team member?")) return;
    try {
      const res = await fetch("/api/team-delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to delete team member");
      await fetchTeamMembers();
    } catch (e) {
      setError(e.message);
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    setAdding(true);
    setError("");
    try {
      const res = await fetch("/api/team-add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to add team member");
      }
      setForm({
        name: "",
        role: "",
        field: "",
        bio: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        avatar: "",
      });
      await fetchTeamMembers();
    } catch (e) {
      setError(e.message);
    }
    setAdding(false);
  }

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
      <h1>Admin Panel</h1>
      <p>
        Welcome, {user.username} (<b>{user.role}</b>)
      </p>
      <button onClick={onLogout} style={{ marginBottom: 20 }}>
        Logout
      </button>

      <section>
        <h2>Team Members</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {teamMembers.map((member) => (
                <li
                  key={member.id}
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong>{member.name}</strong> — {member.role} (
                    {member.field})
                  </div>
                  <button
                    onClick={() => handleDelete(member.id)}
                    style={{ color: "red" }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <hr style={{ margin: "20px 0" }} />
            <h3>Add New Team Member</h3>
            <form onSubmit={handleAdd} style={{ display: "grid", gap: 8 }}>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Field"
                value={form.field}
                onChange={(e) => setForm({ ...form, field: e.target.value })}
                required
              />
              <textarea
                placeholder="Bio"
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                rows={3}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <input
                type="url"
                placeholder="LinkedIn URL"
                value={form.linkedin}
                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
              />
              <input
                type="url"
                placeholder="GitHub URL"
                value={form.github}
                onChange={(e) => setForm({ ...form, github: e.target.value })}
              />
              <input
                type="url"
                placeholder="Avatar URL"
                value={form.avatar}
                onChange={(e) => setForm({ ...form, avatar: e.target.value })}
              />
              <button type="submit" disabled={adding}>
                {adding ? "Adding..." : "Add Member"}
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
