"use client";
import { s } from "framer-motion/client";
import { useState } from "react";

const staff = [
  { id: 1, name: "John Doe", staffid: "SI12345", age: 45, bill: 5894, designation: "Doctor" },
  { id: 2, name: "Jane Smith", staffid: "SI67890", age: 32, bill: 7038, designation: "Surgeon" },
  { id: 3, name: "Robert Brown", staffid: "SI11223", age: 54, bill: 100038, designation: "Cleaning Staff" },
  { id: 4, name: "Alice Johnson", staffid: "SI44556", age: 29, bill: 6000, designation: "Receptionist" },
  { id: 5, name: "Michael Lee", staffid: "SI77889", age: 41, bill: 4000, designation: "Surgeon" },
];

export default function DoctorDetailsChart() {
  return (
    <div className="bg-white p-4 rounded-xl border w-screen max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">Doctor List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Staff ID</th>
              <th className="p-2 text-left">Shift</th>
              <th className="p-2 text-left">Cases</th>
              <th className="p-2 text-left">Designation</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((staff) => (
              <tr key={staff.id} className="border-b text-sm">
                <td className="p-2">{staff.id}</td>
                <td className="p-2">Dr. {staff.name}</td>
                <td className="p-2">{staff.staffid}</td>
                <td className="p-2">{staff.age}</td>
                <td className="p-2">₹{staff.bill}</td>
                <td className="p-2"> {staff.designation}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}