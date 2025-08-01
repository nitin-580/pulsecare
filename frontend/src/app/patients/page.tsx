"use client";
import React, { useState } from "react";

interface Appointment {
  id: string;
  serial: number;
  patientName: string;
  age: number;
  date: string;
  doctor: string;
  department: string;
  status: string;
  mobno: string;
  billdetails :string;
}

// Sample Appointment Data
const appointments: Appointment[] = [
  { id: "APT001", serial: 1, patientName: "Rohan Sharma", age: 28, date: "2025-02-25", mobno: "9984673097", doctor: "Dr. Nitin Kumar", department: "Cardiology", status: "Confirmed",billdetails: "Paid" },
  { id: "APT002", serial: 2, patientName: "Meera Verma", age: 35, date: "2025-02-25", mobno: "7355260443", doctor: "Dr. Aditya Agarwal", department: "Orthopedics", status: "Confirmed",billdetails: "Unpaid" },
  { id: "APT003", serial: 3, patientName: "Amit Joshi", age: 42, date: "2025-02-26", mobno: "8429454552", doctor: "Dr. Ritik Sharma", department: "Neurology", status: "Waiting",billdetails: "Paid"},
  { id: "APT004", serial: 4, patientName: "Pooja Sinha", age: 50, date: "2025-02-26", mobno: "7007520841", doctor: "Dr. Dheeraj Kochar", department: "Dermatology", status: "Confirmed",billdetails: "Paid" },
  { id: "APT005", serial: 5, patientName: "Vikram Patel", age: 30, date: "2025-02-27", mobno: "8052659603",doctor: "Dr. Anjali Mehta", department: "General Medicine", status: "Waiting",billdetails: "Paid" },
];

const PatientAppointmentList: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [searchPatient, setSearchPatient] = useState("");

  // Filter Logic
  const filteredAppointments = appointments.filter((appointment) => {
    return (
      (selectedDate ? appointment.date === selectedDate : true) &&
      (selectedTime ? appointment.mobno === selectedTime : true) &&
      (selectedDoctor ? appointment.doctor === selectedDoctor : true) &&
      (selectedDepartment ? appointment.department === selectedDepartment : true) &&
      (searchPatient ? appointment.patientName.toLowerCase().includes(searchPatient.toLowerCase()) : true)
    );
  });

  return (
    <div className="p-6 ml-4 bg-white border rounded-xl w-screen max-w-5xl h-screen flex flex-col mt-20">
      <h2 className="text-lg font-semibold">Patient List</h2>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
        <input type="date" className="border p-2 rounded-lg text-sm" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        <select className="border p-2 rounded-lg text-sm" onChange={(e) => setSelectedTime(e.target.value)}>
          <option value="">Dates</option>
        </select>
        <select className="border p-2 rounded-lg text-sm" onChange={(e) => setSelectedDoctor(e.target.value)}>
          <option value="">All Doctors</option>
          {Array.from(new Set(appointments.map((a) => a.doctor))).map((doctor, index) => (
            <option key={index} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
        <select className="border p-2 rounded-lg text-sm" onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">All Departments</option>
          {Array.from(new Set(appointments.map((a) => a.department))).map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Search Patient" className="border p-2 rounded-lg text-sm" value={searchPatient} onChange={(e) => setSearchPatient(e.target.value)} />
      </div>

      {/* Scrollable Table */}
      <div className="overflow-y-auto flex-1 mt-4 border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">UHID</th>
              <th className="p-2 text-left">Patient</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Mobile No.</th>
              <th className="p-2 text-left">Doctor</th>
              <th className="p-2 text-left">Dept</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Bill Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-t hover:bg-gray-100">
                  <td className="p-2">{appointment.serial}</td>
                  <td className="p-2">{appointment.id}</td>
                  <td className="p-2">{appointment.patientName}</td>
                  <td className="p-2">{appointment.age}</td>
                  <td className="p-2">{appointment.date}</td>
                  <td className="p-2">{appointment.mobno}</td>
                  <td className="p-2">{appointment.doctor}</td>
                  <td className="p-2">{appointment.department}</td>
                  <td className="p-2">
                    <span className={`px-3 py-1 text-white rounded-lg text-xs ${appointment.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="p-2"><span className={`px-3 py-1 text-white rounded-lg text-xs ${appointment.billdetails === "Paid" ? "bg-green-500" : "bg-yellow-500"}`}>
                      {appointment.billdetails}
                    </span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="p-4 text-center text-gray-500">
                  No Appointments Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAppointmentList;
