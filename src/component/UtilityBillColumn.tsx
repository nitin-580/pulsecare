"use client";
import { useState } from "react";

const utilities = [
  { name: "Electricity", amount: 12000 },
  { name: "Water", amount: 3000 },
  { name: "Internet", amount: 2500 },
  { name: "Maintenance", amount: 5000 },
];

const totalUtilityCost = utilities.reduce((sum, utility) => sum + utility.amount, 0);

export default function UtilityBillsSection() {
  return (
    <div className="bg-white p-3 rounded-xl border w-screen max-w-xs">
      <h2 className="text-lg font-semibold mb-4">Utility Bills</h2>
      <div className="space-y-2 text-sm">
        {utilities.map((utility, index) => (
          <div key={index} className="flex justify-between border-b pb-1">
            <span className="text-gray-600">{utility.name}</span>
            <span className="font-medium">₹{utility.amount}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-semibold mt-3 text-sm">
        <span>Total</span>
        <span>₹{totalUtilityCost}</span>
      </div>
    </div>
  );
}
