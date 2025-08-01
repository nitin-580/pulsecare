"use client";
import { useState } from "react";

const patients = [
  { id: 1, name: "John Doe", uhid: "UH12345", age: 45, bill: 5894, status: "Paid" },
  { id: 2, name: "Jane Smith", uhid: "UH67890", age: 32, bill: 7038, status: "Pending" },
  { id: 3, name: "Robert Brown", uhid: "UH11223", age: 54, bill: 100038, status: "Overdue" },
  { id: 4, name: "Alice Johnson", uhid: "UH44556", age: 29, bill: 6000, status: "Paid" },
  { id: 5, name: "Michael Lee", uhid: "UH77889", age: 41, bill: 4000, status: "Pending" },
];
const totalReceived = patients
  .filter(patient => patient.status === "Paid")
  .reduce((sum, patient) => sum + patient.bill, 0);

export default function PatientRevenueChart() {
  return (
    <div className="bg-white p-4 rounded-xl border w-screen max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">Patient List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">UHID</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Bill Amount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b text-sm">
                <td className="p-2">{patient.id}</td>
                <td className="p-2">{patient.name}</td>
                <td className="p-2">{patient.uhid}</td>
                <td className="p-2">{patient.age}</td>
                <td className="p-2">₹{patient.bill}</td>
                <td className="p-2">
                    <span className={`px-3 py-1 text-white rounded-lg text-xs ${patient.status === "Paid"
                      ? "bg-green-500"
                      : patient.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"}`}>
                      {patient.status}
                    </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-lg font-semibold text-gray-700 text-sm">
          Total Received:  <span className="font-normal"> ₹{totalReceived}</span>
        </div>
      </div>
    </div>
  );
}