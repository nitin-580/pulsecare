import React from "react";

const appointments = [
  {
    id: 1,
    name: "Amit Sharma",
    test: "Urine",
    time: "10:30 AM",
    status: "Confirmed",
    queueNumber: 5,
    billAmount: "₹1500",
    mobileNumber: "9876543210",
  },
  {
    id: 2,
    name: "Priya Patel",
    test: "Diabetes",
    time: "11:00 AM",
    status: "Pending",
    queueNumber: null,
    billAmount: "₹800",
    mobileNumber: "9865321470",
  },
  {
    id: 3,
    name: "Rahul Das",
    test: "Tuberculosis",
    time: "11:45 AM",
    status: "Confirmed",
    queueNumber: 12,
    billAmount: "₹2000",
    mobileNumber: "9745632108",
  },
  {
    id: 4,
    name: "Simran Kaur",
    test: "Ultrasound",
    time: "1:00 PM",
    status: "Canceled",
    queueNumber: null,
    billAmount: "₹0",
    mobileNumber: "9856231478",
  },
  {
    id: 5,
    name: "Vikram Sinha",
    doctor: "Dr. Aman Gupta",
    time: "2:30 PM",
    status: "Confirmed",
    queueNumber: 7,
    billAmount: "₹1800",
    mobileNumber: "9812345678",
  },
  {
    id: 6,
    name: "Meera Joshi",
    doctor: "Dr. Swati Rao",
    time: "3:00 PM",
    status: "Pending",
    queueNumber: null,
    billAmount: "₹1000",
    mobileNumber: "9856472130",
  },
];

const PatientLabData = () => {
  return (
    <div className="max-w-3xl w-full p-4 text-sm bg-white border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Patient Appointment List</h2>
      <div className="overflow-y-auto max-h-96 border rounded-lg">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-gray-200">
            <tr>
              <th className="p-2 text-left">Patient Name</th>
              <th className="p-2 text-left">Test</th>
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Queue No.</th>
              <th className="p-2 text-left">Bill Paid</th>
              <th className="p-2 text-left">Mobile No.</th>
              <th className="p-2 text-left">Report</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{appointment.name}</td>
                <td className="p-2">{appointment.test}</td>
                <td className="p-2">{appointment.time}</td>
                <td className="p-2">
                    <span className={`px-3 py-1 text-white rounded-lg text-xs ${appointment.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}`}>
                      {appointment.status}
                    </span>
                  </td>
                <td className="p-2">
                  {appointment.queueNumber ? (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                      {appointment.queueNumber}
                    </span>
                  ) : (
                    "--"
                  )}
                </td>
                <td className="p-2">{appointment.billAmount}</td>
                <td className="p-2">{appointment.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientLabData;
