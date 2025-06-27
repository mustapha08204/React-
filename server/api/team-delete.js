import fs from "fs";
import path from "path";

const teamFile = path.join(process.cwd(), "api/data/team-members.json");

export default function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: "Missing member ID" });
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(teamFile, "utf-8"));

    const filtered = data.filter((member) => member.id !== id);

    if (filtered.length === data.length) {
      res.status(404).json({ message: "Member not found" });
      return;
    }

    fs.writeFileSync(teamFile, JSON.stringify(filtered, null, 2));

    res.status(200).json({ message: "Member deleted" });
  } catch (e) {
    res.status(500).json({ message: "Failed to delete team member" });
  }
}
