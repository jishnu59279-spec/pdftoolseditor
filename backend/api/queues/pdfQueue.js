import Queue from "bull";

export const pdfQueue = new Queue("pdf-tasks");

pdfQueue.process(async job => {
  return job.data();
});