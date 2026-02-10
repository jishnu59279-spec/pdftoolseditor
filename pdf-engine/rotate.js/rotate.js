import { PDFDocument, degrees } from "pdf-lib";
import fs from "fs";

export async function rotatePDF(req, res) {
  const { file } = req.body;
  const pdf = await PDFDocument.load(fs.readFileSync(file));
  pdf.getPages().forEach(p =>
    p.setRotation(degrees(90))
  );
  const out = await pdf.save();
  fs.writeFileSync(file, out);
  res.json({ success: true });
}