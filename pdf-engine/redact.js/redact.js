import { exec } from "child_process";

export function redactPDF(req, res) {
  const { input, output } = req.body;
  exec(`qpdf --flatten-annotations ${input} ${output}`, () =>
    res.json({ success: true })
  );
}