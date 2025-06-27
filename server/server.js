const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup (store files in uploads/, filename is timestamp + original)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// In-memory data storage
let projects = [];
let projectIdCounter = 1;

let team = [];
let teamIdCounter = 1;

// ----- AUTH ROUTE -----
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password123") {
    res.json({ success: true, token: "dummy_token" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ----- PROJECT ROUTES -----

// Get all projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Add a project
app.post("/api/projects", upload.single("image"), (req, res) => {
  try {
    const { title, description, link } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const newProject = {
      id: projectIdCounter++,
      title,
      description,
      image: imagePath, // consistent naming: 'image'
      link,
    };

    projects.push(newProject);
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Error adding project:", err);
    res.status(500).json({ error: "Failed to add project" });
  }
});

// Delete a project
app.delete("/api/projects/:id", (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  const index = projects.findIndex((p) => p.id === projectId);

  if (index === -1) {
    return res.status(404).json({ error: "Project not found" });
  }

  // Delete project image file from disk
  const imagePath = path.join(__dirname, projects[index].image);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  projects.splice(index, 1);
  res.json({ success: true });
});

// ----- TEAM ROUTES -----

// Get all team members
app.get("/api/team", (req, res) => {
  res.json(team);
});

// Add a team member
app.post("/api/team", upload.single("image"), (req, res) => {
  try {
    const { name, role } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const newMember = {
      id: teamIdCounter++,
      name,
      role,
      image: imagePath, // consistent naming: 'image'
    };

    team.push(newMember);
    res.status(201).json(newMember);
  } catch (err) {
    console.error("Error adding team member:", err);
    res.status(500).json({ error: "Failed to add team member" });
  }
});

// Delete a team member
app.delete("/api/team/:id", (req, res) => {
  const memberId = parseInt(req.params.id, 10);
  const index = team.findIndex((m) => m.id === memberId);

  if (index === -1) {
    return res.status(404).json({ error: "Team member not found" });
  }

  // Delete team member image file from disk
  const imagePath = path.join(__dirname, team[index].image);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  team.splice(index, 1);
  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
