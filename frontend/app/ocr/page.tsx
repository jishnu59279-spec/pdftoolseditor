"use client";
import { useState } from "react";

export default function OCR() {
  const [text, setText] = useState("");

  const upload = async (file: File) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/ocr", { method: "POST", body: fd });
    setText((await res.json()).text);
  };

  return <input type="file" onChange={e => upload(e.target.files![0])} />;
}