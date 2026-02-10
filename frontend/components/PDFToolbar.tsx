export default function PDFToolbar({ onAction }: any) {
  return (
    <div className="flex gap-2">
      <button onClick={() => onAction("rotate")}>Rotate</button>
      <button onClick={() => onAction("crop")}>Crop</button>
      <button onClick={() => onAction("watermark")}>Watermark</button>
      <button onClick={() => onAction("redact")}>Redact</button>
      <button onClick={() => onAction("save")}>Save</button>
    </div>
  );
}