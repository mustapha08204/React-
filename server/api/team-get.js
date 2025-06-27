import fs from "fs";
import path from "path";

const teamFile = path.join(process.cwd(), "api/data/team-members.json");

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(teamFile, "utf-8"));
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Failed to load team members" });
  }
}
