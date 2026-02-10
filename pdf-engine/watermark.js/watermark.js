import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";

export async function watermarkPDF(req, res) {
  const { file, text } = req.body;
  const pdf = await PDFDocument.load(fs.readFileSync(file));

  pdf.getPages().forEach(page => {
    page.drawText(text, {
      x: 50,
      y: 400,
      size: 50,
      color: rgb(0.8, 0.8, 0.8),
      rotate: { degrees: 45 }
    });
  });

  fs.writeFileSync(file, await pdf.save());
  res.json({ success: true });
}