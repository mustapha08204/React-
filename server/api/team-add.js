import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const teamFile = path.join(process.cwd(), "api/data/team-members.json");

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const newMember = req.body;

  if (
    !newMember.name ||
    !newMember.role ||
    !newMember.field ||
    !newMember.bio ||
    !newMember.email ||
    !newMember.phone
  ) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(teamFile, "utf-8"));

    const memberWithId = { ...newMember, id: uuidv4() };

    data.push(memberWithId);

    fs.writeFileSync(teamFile, JSON.stringify(data, null, 2));

    res.status(201).json(memberWithId);
  } catch (e) {
    res.status(500).json({ message: "Failed to add team member" });
  }
}
