"use client";
import { useState } from "react";

const employees = [
  { id: 1, name: "Dr. A Sharma", empCode: "EMP1001", position: "Surgeon", salary: 120000, status: "Credited" },
  { id: 2, name: "Nurse B Patel", empCode: "EMP1002", position: "Nurse", salary: 45000, status: "Pending" },
  { id: 3, name: "Admin C Mehta", empCode: "EMP1003", position: "Administrator", salary: 60000, status: "Credited" },
  { id: 4, name: "Technician D Rao", empCode: "EMP1004", position: "Lab Technician", salary: 50000, status: "Pending" },
  { id: 5, name: "Dr. E Verma", empCode: "EMP1005", position: "Physician", salary: 110000, status: "Credited" },
];

export default function SalaryDetailsCard() {
  return (
    <div className="bg-white p-4 rounded-xl border w-screen max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">Salary Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Emp Code</th>
              <th className="p-2 text-left">Position</th>
              <th className="p-2 text-left">Salary</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="p-2">{employee.id}</td>
                <td className="p-2">{employee.name}</td>
                <td className="p-2">{employee.empCode}</td>
                <td className="p-2">{employee.position}</td>
                <td className="p-2">₹{employee.salary}</td>
                <td className="p-2">
                    <span className={`px-3 py-1 text-white rounded-lg text-xs ${employee.status === "Credited"
                      ? "bg-green-500"
                      : employee.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"}`}>
                      {employee.status}
                    </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}