import React from "react";

const doctorsData = [
  { name: "CT Scan", cases: 120 },
  { name: "MRI Scan", cases: 95 },
  { name: "Blood Test", cases: 110 },
  { name: "Microbiology", cases: 87 },
];

const TestCard = () => {
  return (
    <div className="border p-4 w-80 rounded-lg bg-white">
      <h2 className="text-lg font-semibold mb-3">Laboratory Case Statistics</h2>
      {doctorsData.map((doctor, index) => (
        <div key={index} className="flex justify-between items-center gap-x-4 p-2 border-b last:border-b-0">
          <span className="text-gray-800 text-sm">{doctor.name}</span>
          <span className="text-blue-600 text-sm font-bold">{doctor.cases} Cases</span>
        </div>
      ))}
    </div>
  );
};

export default TestCard;
