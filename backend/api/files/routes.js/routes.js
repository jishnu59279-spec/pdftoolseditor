import express from "express";
import multer from "multer";
import { v4 as uuid } from "uuid";

const router = express.Router();
const storage = multer.diskStorage({
  destination: "storage/uploads/",
  filename: (_, file, cb) =>
    cb(null, `${uuid()}-${file.originalname}`)
});

const upload = multer({ storage });

router.post("/upload", upload.array("files"), (req, res) => {
  res.json({ files: req.files });
});

export default router;