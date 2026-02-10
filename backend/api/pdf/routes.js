import express from "express";
import { rotatePDF } from "../../../pdf-engine/rotate.js";
import { watermarkPDF } from "../../../pdf-engine/watermark.js";
import { redactPDF } from "../../../pdf-engine/redact.js";

const router = express.Router();

router.post("/rotate", rotatePDF);
router.post("/watermark", watermarkPDF);
router.post("/redact", redactPDF);

export default router;