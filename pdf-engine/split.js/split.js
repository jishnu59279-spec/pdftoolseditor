import { PDFDocument } from "pdf-lib";
import fs from "fs";

export async function splitPDF(file) {
  const pdf = await PDFDocument.load(fs.readFileSync(file));
  return Promise.all(pdf.getPages().map(async (_, i) => {
    const doc = await PDFDocument.create();
    const [page] = await doc.copyPages(pdf, [i]);
    doc.addPage(page);
    fs.writeFileSync(`page-${i}.pdf`, await doc.save());
  }));
}