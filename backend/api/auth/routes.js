import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET = "supersecret";

router.post("/login", (req, res) => {
  const token = jwt.sign({ user: req.body.email }, SECRET, { expiresIn: "1d" });
  res.json({ token });
});

export function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default router;