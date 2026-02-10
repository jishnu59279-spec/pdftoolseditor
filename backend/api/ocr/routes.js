import express from "express";
import { spawn } from "child_process";
import path from "path";

const router = express.Router();

router.post("/extract", async (req, res) => {
  const file = req.body.file;

  const py = spawn("python", [
    "ai-engine/ocr/pipeline.py",
    file
  ]);

  let output = "";
  py.stdout.on("data", d => output += d.toString());

  py.on("close", () => {
    res.json(JSON.parse(output));
  });
});

export default router;