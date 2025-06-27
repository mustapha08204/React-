import fs from "fs";
import path from "path";

const usersFile = path.join(process.cwd(), "api/data/users.json");

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Missing username or password" });
    return;
  }

  // Read users.json
  const usersData = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

  const user = usersData.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  // Don't send password back
  const { password: pwd, ...userWithoutPassword } = user;

  res.status(200).json(userWithoutPassword);
}
