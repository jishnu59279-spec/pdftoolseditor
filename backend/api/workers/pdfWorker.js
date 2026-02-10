import { mergePDFs } from "../../pdf-engine/merge.js";

export async function batchMerge(jobs) {
  for (const job of jobs) {
    await mergePDFs(job.files, job.output);
  }
}