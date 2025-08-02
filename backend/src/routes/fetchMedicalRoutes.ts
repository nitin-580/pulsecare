import {Request,Response} from "express";
const express = require("express");
import Patient from "../models/Patient"; // ✅ Adjust path as needed
import MedicalRecord from "../models/MedicalRecord"; // ✅ Replace with your actual model path

const router = express.Router();

router.get("/patient-records/:uhid", async (req:Request, res:Response) => {
  try {
    const uhid = req.params.uhid;

    // Fetch patient by UHID
    const patient = await Patient.findOne({ uhid });
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    return res.status(200).json({patient})
    // Fetch medical records for the same UHID
     const medicalRecord = await MedicalRecord.findOne({ uhid });

    if (!medicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }

    return res.status(200).json({
      medicalRecord,
    });
  } catch (error) {
    console.error("Error fetching medical record:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
