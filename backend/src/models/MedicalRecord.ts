import mongoose, { Schema, Document, Types } from "mongoose";

// Define the interface for a medical record
export interface IMedicalRecord extends Document {
  uhid: string;  
  user: Types.ObjectId; // Reference to User (UHID)
  diagnosis: string;
  prescriptionUrl: string;
  scanUrls: {
    xray?: string;
    ultrasound?: string;
    ctscan?: string;
  };
  labReportUrl?: string;
  doctorAdvice?: string;
  prohibitedItems?: string[]; // e.g. ["Alcohol", "Fried Food"]
  chronicConditions?: string[]; // e.g. ["Diabetes", "Hypertension"]
  allergies?: string[]; // e.g. ["Penicillin", "Peanuts"]
  bloodGroup?: string; // e.g. "A+", "O-"
  emergencyContact?: {
        name: string;
        relationship: string;
        phoneNumber: string;
    };
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const medicalRecordSchema: Schema<IMedicalRecord> = new Schema(
  {
    uhid: { type: String, required: true, unique: true }, // Unique Health ID
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }, // UHID reference
    diagnosis: { type: String, required: true },
    prescriptionUrl: { type: String, required: true },
    scanUrls: {
      xray: { type: String },
      ultrasound: { type: String },
      ctscan: { type: String },
    },
    labReportUrl: { type: String },
    doctorAdvice: { type: String },
    prohibitedItems: [{ type: String }],
    chronicConditions: [{ type: String }],
    allergies: [{ type: String }],
    bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] }, 
    emergencyContact: {
      name: { type: String, required: true },
      relationship: { type: String, required: true },
      phoneNumber: { type: String, required: true },
    },
  },
  { timestamps: true }
);

// Export model
const MedicalRecord = mongoose.model<IMedicalRecord>("MedicalRecord", medicalRecordSchema);
export default MedicalRecord;
