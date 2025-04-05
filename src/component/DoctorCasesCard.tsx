import React from "react";

const doctorsData = [
  { name: "Dr. Nitin Kumar", cases: 120 },
  { name: "Dr. Divyansh Patel", cases: 95 },
  { name: "Dr. Ayesha Sharma", cases: 110 },
  { name: "Dr. Rohan Mehta", cases: 87 },
];

const DoctorCasesCard = () => {
  return (
    <div className="border max-w-xl p-4 rounded-lg bg-white">
      <h2 className="text-lg font-semibold mb-3">Doctor Case Statistics</h2>
      {doctorsData.map((doctor, index) => (
        <div key={index} className="flex justify-between items-center gap-x-4 p-2 border-b last:border-b-0">
          <span className="text-gray-800 text-sm">{doctor.name}</span>
          <span className="text-blue-600 text-sm font-bold">{doctor.cases} Cases</span>
        </div>
      ))}
    </div>
  );
};

export default DoctorCasesCard;
