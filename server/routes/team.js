const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const router = express.Router();

// Multer setup (for photo uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// In-memory team data
let team = [];
let memberIdCounter = 1;

// Get all team members
router.get("/", (req, res) => {
  res.json(team);
});

// Add a team member
router.post("/", upload.single("photo"), (req, res) => {
  const { name, role } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Photo is required" });
  }

  const photoPath = `/uploads/${req.file.filename}`;

  const newMember = {
    id: memberIdCounter++,
    name,
    role,
    photo: photoPath,
  };

  team.push(newMember);
  res.status(201).json(newMember);
});

// Delete a team member
router.delete("/:id", (req, res) => {
  const memberId = parseInt(req.params.id, 10);
  const index = team.findIndex((m) => m.id === memberId);

  if (index === -1) {
    return res.status(404).json({ error: "Member not found" });
  }

  const imagePath = path.join(__dirname, "..", team[index].photo);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }

  team.splice(index, 1);
  res.json({ success: true });
});

module.exports = router;
