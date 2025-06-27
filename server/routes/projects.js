const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();

const filePath = path.join(__dirname, "../data/projects.json");

// Helper to read projects file async
async function readProjects() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// Helper to write projects file async
async function writeProjects(projects) {
  await fs.writeFile(filePath, JSON.stringify(projects, null, 2));
}

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await readProjects();
    res.json(projects);
  } catch (err) {
    console.error("Failed to read projects:", err);
    res.status(500).json({ message: "Failed to read projects" });
  }
});

// ADD a project
router.post("/", async (req, res) => {
  try {
    const newProject = req.body;

    // Basic validation example
    if (!newProject.title || !newProject.description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const projects = await readProjects();
    newProject.id = Date.now();
    projects.push(newProject);

    await writeProjects(projects);
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Failed to add project:", err);
    res.status(500).json({ message: "Failed to add project" });
  }
});

// DELETE a project
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const projects = await readProjects();

    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) {
      return res.status(404).json({ message: "Project not found" });
    }

    projects.splice(index, 1);
    await writeProjects(projects);

    res.json({ message: "Project deleted" });
  } catch (err) {
    console.error("Failed to delete project:", err);
    res.status(500).json({ message: "Failed to delete project" });
  }
});

module.exports = router;
