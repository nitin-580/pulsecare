"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sunday", income: 900, expenses: 800 },
  { day: "Monday", income: 400, expenses: 300 },
  { day: "Tuesday", income: 1000, expenses: 900 },
  { day: "Wednesday", income: 900, expenses: 850 },
  { day: "Thursday", income: 800, expenses: 700 },
  { day: "Friday", income: 1000, expenses: 750 },
  { day: "Saturday", income: 1400, expenses: 950 },
];

export default function RevenueChart() {
  const [activeTab, setActiveTab] = useState("Day");

  return (
    <div className="bg-white p-2 rounded-xl border w-full max-w-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Revenues</h2>
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {["Day", "Month", "Year"].map((tab) => (
            <button
            key={tab}
            className={`px-4 py-1 text-sm rounded-md transition ${
              activeTab === tab ? "bg-indigo-500 text-white" : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="expenses" stroke="#A5B4FC" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>

        {/* Revenue Label */}
        <div className="absolute top-10 right-4 bg-indigo-500 text-white px-4 py-1 rounded-lg text-sm font-semibold">
          2500 ₹
        </div>
      </div>
    </div>
  );
}
