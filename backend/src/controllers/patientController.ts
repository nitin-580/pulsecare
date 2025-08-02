import { Request, Response } from "express";
import Patient from "../models/Patient";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
