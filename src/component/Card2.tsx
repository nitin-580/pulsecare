"use client";
import React, { useState } from "react";

interface DoctorCardProps {
  date: string;
}

// Doctor availability data
const doctors = [
  { name: "Dr. Nitin Kumar (Opthalmologist)", availability: ["09:00 - 10:00", "11:00 - 12:00", "15:00 - 16:00"] },
  { name: "Dr. Aditya Agarwal (Cardiologist)", availability: ["10:00 - 11:00", "13:00 - 14:00", "16:00 - 17:00"] },
  { name: "Dr. Ritik Sharma (Dermatologist)", availability: ["08:00 - 09:00", "12:00 - 13:00", "14:00 - 15:00"] },
  { name: "Dr. Dheeraj Kochar (Neurologist)", availability: ["07:00 - 08:00", "09:00 - 10:00", "17:00 - 18:00"] },
  { name: "Dr. Anjali Mehta (Gynacologist)", availability: ["06:00 - 07:00", "12:00 - 13:00", "18:00 - 19:00"] },
  { name: "Dr. Rajesh Verma (Cardiologist)", availability: ["10:00 - 11:00", "14:00 - 15:00", "19:00 - 20:00"] },
];

const DoctorAvailabilityList: React.FC<DoctorCardProps> = ({ date }) => {
  const [selectedTime, setSelectedTime] = useState(""); // Time filter
  const [selectedDate, setSelectedDate] = useState(date); // Date filter

  // Filter doctors based on selected time
  const filteredDoctors = selectedTime
    ? doctors.filter((doctor) => doctor.availability.includes(selectedTime))
    : doctors;

  return (
    <div className="p-4 bg-white border rounded-xl w-full max-w-lg h-80 flex flex-col">
      <h2 className="text-lg font-semibold">Doctor Availability</h2>

      {/* Date & Time Filter */}
      <div className="mt-2 flex gap-2">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded-lg w-1/2 text-sm"
        />
        <select
          className="border p-2 rounded-lg w-1/2 text-sm"
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">All Time Slots</option>
          {Array.from(new Set(doctors.flatMap((d) => d.availability))).map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Scrollable Doctor List */}
      <div className="mt-4 space-y-2 overflow-y-auto flex-1">
        {filteredDoctors.map((doctor, index) => (
          <div key={index} className="p-2 border rounded-lg bg-white flex flex-col">
            <h3 className="text-sm font-medium">{doctor.name}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {doctor.availability.map((time, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    selectedTime && selectedTime !== time
                      ? "bg-red-200 text-red-700"
                      : "bg-green-200 text-green-700"
                  }`}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAvailabilityList;
