const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const filePath = path.join(__dirname, "../data/projects.json");

// GET all projects
router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(data);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to read projects" });
  }
});

// ADD a project
router.post("/", (req, res) => {
  try {
    const newProject = req.body;
    const data = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(data);

    newProject.id = Date.now();
    projects.push(newProject);
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: "Failed to add project" });
  }
});

// DELETE a project
router.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(data);

    const updatedProjects = projects.filter((p) => p.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updatedProjects, null, 2));
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete project" });
  }
});

module.exports = router;
