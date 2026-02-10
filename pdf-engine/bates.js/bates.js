import { PDFDocument } from "pdf-lib";
import fs from "fs";

export async function bates(file) {
  const pdf = await PDFDocument.load(fs.readFileSync(file));
  pdf.getPages().forEach((p, i) => {
    p.drawText(`BATES-${i + 1}`, { x: 450, y: 20, size: 10 });
  });
  fs.writeFileSync(file, await pdf.save());
}