"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const financialData = [
  { name: "Total Revenue", value: 500000, color: "#4CAF50" },
  { name: "Salaries", value: 200000, color: "#FF9800" },
  { name: "Patient Bills", value: 100000, color: "#2196F3" },
  { name: "Utility Bills", value: 50000, color: "#9C27B0" },
  { name: "Net Profit", value: 150000, color: "#F44336" },
];

export default function FinancePieChart() {
  return (
    <div className="bg-white p-2 rounded-xl border w-screen max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={financialData}
            cx="45%"
            cy="45%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name }) => name}
          >
            {financialData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
