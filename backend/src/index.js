import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

import financeRoutes from "./routes/financeRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.resolve(__dirname, "../../frontend/dist");

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use(express.json());

app.use("/api/finance", financeRoutes);
app.use(express.static(frontendDist));

app.use((req, res, next) => {
  if (!req.path.startsWith("/api/")) {
    return res.sendFile(path.join(frontendDist, "index.html"));
  }
  next();
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Critical Server Startup Failure: ", error.message);
    process.exit(1);
  }
};

startServer();
