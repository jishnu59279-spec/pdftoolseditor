import { PDFDocument } from "pdf-lib";
import fs from "fs";

export async function addSignatureField(file) {
  const pdf = await PDFDocument.load(fs.readFileSync(file));
  const form = pdf.getForm();

  form.createSignature("sign_here")
    .addToPage(pdf.getPages()[0], {
      x: 50, y: 600, width: 200, height: 50
    });

  fs.writeFileSync(file, await pdf.save());
}