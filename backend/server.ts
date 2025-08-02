import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/config/db";
import patientRoutes from "./src/routes/patientRoutes";
import userRoutes from "./src/routes/authRoutes"
import loginRoutes from "./src/routes/loginRoutes"
import medicalRoutes from "./src/routes/medicalRoutes";
import fetchMedicalRoutes from "./src/routes/fetchMedicalRoutes";
import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 20;


const app = express();
const PORT = 5001;


// Middleware
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use("/api", patientRoutes);
app.use("/api", userRoutes);
app.use("/api", loginRoutes);
app.use("/api", medicalRoutes);
app.use("/api", fetchMedicalRoutes);

app.get("/", (_req, res) => {
  res.send("You Got it")
});

// Connect DB and Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});