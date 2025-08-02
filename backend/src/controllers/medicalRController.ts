import { Request, Response } from "express";
import MedicalRecord from "../models/MedicalRecord";

export const createMedicalRecord = async (req: Request, res: Response) => {
  try {
    const {
      uhid,  
      user, // UHID
      diagnosis,
      prescriptionUrl,
      scanUrls,
      labReportUrl,
      doctorAdvice,
      prohibitedItems,
      chronicConditions,
      allergies,
      bloodGroup,
      emergencyContact
    } = req.body;

    const newRecord = new MedicalRecord({
      uhid,  
      user,
      diagnosis,
      prescriptionUrl,
      scanUrls,
      labReportUrl,
      doctorAdvice,
      prohibitedItems,
      chronicConditions,
      allergies,
      bloodGroup,
      emergencyContact
    });

    await newRecord.save();

    res.status(201).json({
      message: "Medical record created successfully",
      record: newRecord,
    });
  } catch (error) {
    console.error("Error creating medical record:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
