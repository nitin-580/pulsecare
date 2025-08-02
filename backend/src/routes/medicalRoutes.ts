import express from "express";
import { createMedicalRecord } from "../controllers/medicalRController";

const router = express.Router();

router.post("/medical-records", createMedicalRecord);

export default router;