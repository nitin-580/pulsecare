"use client";

import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    uhid: "",
    fullName: "",
    age: "",
    gender: "",
    aadharNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    appointmentDate: "",
    appointmentTime: "",
    department: "",
    doctor: "",
    reason: "",
    mode: "In-Person",
    medicalHistory: "",
    emergencyContact: "",
    insuranceProvider: "",
    insuranceNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert("Appointment Request Submitted Successfully!");
    } catch (err) {
      console.error("Error submitting appointment:", err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl w-screen p-8 bg-white rounded-xl border border-gray-200 mt-10 flex flex-wrap gap-6 mt-20 ml-5">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 w-full">
        Book an Appointment
      </h2>
      <div className="flex w-full">
        <div className="w-1/2 space-y-4 pr-4">
          <h3 className="text-base text-gray-600">Personal Details</h3>
          <input
            type="text"
            name="uhid"
            placeholder="UHID"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <select
            name="gender"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="aadharNumber"
            placeholder="Aadhar Number"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <h3 className="text-base font-medium text-gray-600">
            Contact Information
          </h3>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact (Name & Number)"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 space-y-4">
          <h3 className="text-base font-medium text-gray-600">
            Appointment Details
          </h3>
          <input
            type="date"
            name="appointmentDate"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <input
            type="time"
            name="appointmentTime"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <select
            name="department"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
          </select>
          <input
            type="text"
            name="doctor"
            placeholder="Preferred Doctor (Optional)"
            className="border p-2 rounded-md w-full text-sm"
            onChange={handleChange}
          />
          <textarea
            name="reason"
            placeholder="Reason for Visit"
            className="border p-2 rounded-md w-full text-sm"
            required
            onChange={handleChange}
          />
          <h3 className="text-base font-medium text-gray-600">
            Medical History (If Relevant)
          </h3>
          <textarea
            name="medicalHistory"
            placeholder="Medical History (Optional)"
            className="border p-2 rounded-md w-full text-sm"
            onChange={handleChange}
          />
          <h3 className="text-base font-medium text-gray-600">
            Insurance Details
          </h3>
          <input
            type="text"
            name="insuranceProvider"
            placeholder="Insurance Provider (Optional)"
            className="border p-2 rounded-md w-full text-sm"
            onChange={handleChange}
          />
          <input
            type="text"
            name="insuranceNumber"
            placeholder="Insurance Policy Number (Optional)"
            className="border p-2 rounded-md w-full text-sm"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full flex gap-4 mt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 w-1/2"
          onClick={handleSubmit}
        >
          Submit Appointment
        </button>
        <button
          type="button"
          className="bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-700 w-1/2"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
