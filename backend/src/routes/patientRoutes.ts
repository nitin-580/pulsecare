import express from "express";
import { createPatient } from "../controllers/patientController";

const router = express.Router();

router.post("/patients", createPatient);

export default router;
