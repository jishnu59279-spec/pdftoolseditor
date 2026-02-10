import { PDFDocument } from "pdf-lib";
import fs from "fs";

export async function createForm(file) {
  const pdf = await PDFDocument.load(fs.readFileSync(file));
  const form = pdf.getForm();

  form.createTextField("name").addToPage(pdf.getPages()[0], {
    x: 50, y: 700, width: 200, height: 20
  });

  form.createCheckBox("agree").addToPage(pdf.getPages()[0], {
    x: 50, y: 650, width: 20, height: 20
  });

  fs.writeFileSync(file, await pdf.save());
}