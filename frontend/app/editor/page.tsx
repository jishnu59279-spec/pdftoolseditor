"use client";
import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js";

export default function PDFEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [page, setPage] = useState(1);

  async function loadPDF(file: File) {
    const array = await file.arrayBuffer();
    const pdfDoc = await pdfjs.getDocument(array).promise;
    setPdf(pdfDoc);
  }

  async function renderPage(num: number) {
    if (!pdf) return;
    const pageObj = await pdf.getPage(num);
    const viewport = pageObj.getViewport({ scale: 1.4 });
    const canvas = canvasRef.current!;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await pageObj.render({
      canvasContext: canvas.getContext("2d")!,
      viewport
    }).promise;
  }

  useEffect(() => { renderPage(page); }, [pdf, page]);

  return (
    <div className="p-4">
      <input type="file" accept="application/pdf"
        onChange={e => loadPDF(e.target.files![0])} />

      <div className="flex gap-2 my-2">
        <button onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>

      <canvas ref={canvasRef} className="border shadow" />
    </div>
  );
}