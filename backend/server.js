import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config({ path: "./.env" }); // Load .env

// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is started on http://localhost:${port}`);
});

// mongodb+srv://mohsinsignin:2gKlR3X8PdfTZwKG@cluster0.lqsg9co.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
