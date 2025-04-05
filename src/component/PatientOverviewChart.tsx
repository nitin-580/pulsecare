"use client"
import { div } from "framer-motion/client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { date: "4 January", child: 90, adult: 40, elderly: 20 },
  { date: "5 January", child: 30, adult: 20, elderly: 10 },
  { date: "6 January", child: 85, adult: 50, elderly: 30 },
  { date: "7 January", child: 70, adult: 60, elderly: 50 },
  { date: "8 January", child: 60, adult: 50, elderly: 40 },
  { date: "9 January", child: 65, adult: 55, elderly: 35 },
  { date: "10 January", child: 70, adult: 40, elderly: 25 },
];

const PatientOverviewChart: React.FC = () => {
  return (
    <div>
        <div className="p-4 bg-white border rounded-xl w-screen max-w-lg mt-0">
      <h2 className="text-xl font-semibold">Patient Overview</h2>
      <p className="text-gray-500">According to age stages</p>
      <div className="mt-2 flex">
        <span className="px-2 py-1 text-sm bg-gray-200 rounded-md">Last 7 days ▼</span>
      </div>
      <div className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="child" fill="#6D28D9" name="Child" />
          <Bar dataKey="adult" fill="#8B5CF6" name="Adult" />
          <Bar dataKey="elderly" fill="#A78BFA" name="Elderly" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    
    </div>
  );
};

export default PatientOverviewChart;
