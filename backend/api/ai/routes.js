import express from "express";
import { spawn } from "child_process";

const router = express.Router();

router.post("/analyze", (req, res) => {
  const py = spawn("python", [
    "ai-engine/nlp/analyze.py",
    req.body.text
  ]);

  let data = "";
  py.stdout.on("data", d => data += d.toString());

  py.on("close", () => res.json(JSON.parse(data)));
});

export default router;