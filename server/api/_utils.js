import jwt from "jsonwebtoken";

export function verifyToken(req) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No token provided");
  }
  const token = authHeader.split(" ")[1];
  return jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
}

export function isAdmin(user) {
  if (user.role !== "admin") {
    throw new Error("Admin only");
  }
}
