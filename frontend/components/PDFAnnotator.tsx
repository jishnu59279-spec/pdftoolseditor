import { fabric } from "fabric";
import { useEffect, useRef } from "react";

export default function PDFAnnotator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current!);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "red";
  }, []);

  return <canvas ref={canvasRef} width={800} height={1000} />;
}