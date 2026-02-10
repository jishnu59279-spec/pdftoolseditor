import { exec } from "child_process";

export function encryptPDF(input, output, password) {
  exec(`qpdf --encrypt ${password} ${password} 256 -- ${input} ${output}`);
}