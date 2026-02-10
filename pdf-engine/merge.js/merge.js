import { PDFDocument } from "pdf-lib";
import fs from "fs";

export async function mergePDFs(files, output) {
  const merged = await PDFDocument.create();
  for (const file of files) {
    const pdf = await PDFDocument.load(fs.readFileSync(file));
    const pages = await merged.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(p => merged.addPage(p));
  }
  fs.writeFileSync(output, await merged.save());
}