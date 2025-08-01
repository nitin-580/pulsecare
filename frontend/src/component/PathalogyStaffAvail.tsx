"use client";
import { useState } from "react";

interface StaffMember {
  name: string;
  role: string;
  availableFrom: string;
  availableUntil: string;
  status: "Available" | "Unavailable" | "Limited Availability";
  notes: string;
}

const staffData: StaffMember[] = [
  { name: "Dr. A. Sharma", role: "Cardiologist",  availableFrom: "10:00 AM", availableUntil: "4:00 PM", status: "Available", notes: "On-call after 4 PM" },
  { name: "Dr. B. Patel", role: "Surgeon", availableFrom: "9:00 AM", availableUntil: "2:00 PM", status: "Unavailable", notes: "Emergency cases only" },
  { name: "Nurse C. Mehta", role: "Nurse", availableFrom: "8:00 AM", availableUntil: "8:00 PM", status: "Available", notes: "Shift change at 8 PM" },
];

export default function StaffAvailability() {
  const [search, setSearch] = useState("");

  const filteredStaff = staffData.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 rounded-lg border max-w-3xl mb-5 w-screen">
      <h1 className="text-lg font-bold mb-4">Staff Availability</h1>
      <input
        type="text"
        placeholder="Search by name, role, or department..."
        className="p-2 border rounded w-full mb-4 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="text-sm bg-white border w-full rounded max-w-3xl ">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Available From</th>
            <th className="p-2 text-left">Available Until</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((member, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{member.name}</td>
              <td className="p-2">{member.role}</td>
              <td className="p-2">{member.availableFrom}</td>
              <td className="p-2">{member.availableUntil}</td>
              <td className={`p-2 ${
                member.status === "Available"
                  ? "text-green-600"
                  : member.status === "Unavailable"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}>{member.status}</td>
              <td className="p-2">{member.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
