const express = require("express");
const cors = require("cors");
const authRoutes = require("./api/auth-login");
const teamRoutes = require("./api/team-get");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/team", teamRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
