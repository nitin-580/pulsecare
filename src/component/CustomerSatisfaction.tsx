"use client";
import { useState } from "react";

const SatisfactionMeter = ({ percentage }: { percentage: number }) => {
  const radius = 40; // Radius of the arc
  const circumference = Math.PI * radius; // Half-circle circumference
  const arcLength = (percentage / 100) * circumference; // Length of filled arc

  return (
    <div className="flex flex-col items-center">
      <svg width="150" height="80" viewBox="0 0 100 50">
        {/* Background Arc (Gray) */}
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="8"
        />
        {/* Filled Arc (Dynamic) */}
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="8"
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage Label */}
      <div className="text-xl font-bold text-gray-800 mt-2">{percentage}%</div>
    </div>
  );
};

const CustomerSatisfactionCard = () => {
  const [satisfaction, setSatisfaction] = useState(67); // Example satisfaction percentage

  return (
    <div className="bg-white rounded-lg p-6 w-72 text-center border mt-5">
      <h2 className="text-md font-semibold mb-4">Customer Satisfaction</h2>
      <SatisfactionMeter percentage={satisfaction}/>
    </div>
  );
};

export default CustomerSatisfactionCard;
