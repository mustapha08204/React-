require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN_USER = {
  email: "admin@example.com",
  password: bcrypt.hashSync("admin123", 10), // hashed version of 'admin123'
};

// POST /api/auth/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_USER.email) {
    return res.status(401).json({ message: "Invalid email" });
  }

  const isMatch = bcrypt.compareSync(password, ADMIN_USER.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET || "mysecret", {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = router;
