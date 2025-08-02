import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const patient = await User.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
