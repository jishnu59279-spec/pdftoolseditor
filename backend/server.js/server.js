import express from "express";
import cors from "cors";
import fileRoutes from "./api/files/routes.js";
import pdfRoutes from "./api/pdf/routes.js";
import ocrRoutes from "./api/ocr/routes.js";
import aiRoutes from "./api/ai/routes.js";
import billingRoutes from "./api/billing/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/files", fileRoutes);
app.use("/api/pdf", pdfRoutes);
app.use("/api/ocr", ocrRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/billing", billingRoutes);

app.listen(5000, () => console.log("Backend running on 5000"));