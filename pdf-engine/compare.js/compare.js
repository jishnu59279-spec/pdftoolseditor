import { exec } from "child_process";

export function comparePDF(a, b, out) {
  exec(`diff-pdf ${a} ${b} --output-diff=${out}`);
}