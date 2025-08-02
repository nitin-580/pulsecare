import mongoose, { Schema, Document } from "mongoose";

// Define the Patient Interface
  interface IPatient extends Document {
    uhid: string;
    fullName: string;
    age: number;
    gender: "Male" | "Female" | "Other";
    aadharNumber?: string;
    phoneNumber: string;
    email?: string;
    address: string;
    appointmentDate: Date;
    appointmentTime?: string;
    department?: string;
    doctor: string;
    reason?: string;
    mode?: string;
    medicalHistory?: string;
    emergencyContact?: string;
    insuranceProvider?: string;
    insuranceNumber?: string;
    status: "Confirmed" | "Pending" | "Cancelled" | "Completed";
    billAmount: number;
    paymentStatus: "Paid" | "Unpaid" | "Partially Paid";
    isAdmin?: boolean;
  }
  
  const PatientSchema = new mongoose.Schema(
    {
      uhid: { type: String, required: true, unique: true },
      fullName: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
      aadharNumber: { type: String },
      phoneNumber: { type: String, required: true },
      email: { type: String },
      address: { type: String, required: true },
      appointmentDate: { type: Date, required: true },
      appointmentTime: { type: String },
      department: { type: String },
      doctor: { type: String, required: true },
      reason: { type: String },
      mode: { type: String },
      medicalHistory: { type: String },
      emergencyContact: { type: String },
      insuranceProvider: { type: String },
      insuranceNumber: { type: String },
      status: {
        type: String,
        enum: ["Confirmed", "Pending", "Cancelled", "Completed"],
        default: "Pending",
      },
      billAmount: { type: Number, default: 0 },
      paymentStatus: {
        type: String,
        enum: ["Paid", "Unpaid", "Partially Paid"],
        default: "Unpaid",
      },
      isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
  );  

// Export the Patient Model
const Patient = mongoose.model<IPatient>("Patient", PatientSchema);
export default Patient;
