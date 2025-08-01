"use client"
import React from 'react'

const datas = [
  {
    id: 1, transno: "TRXN123456", datetime: "09/04/2025-8:15", amount: "4638",
    method: "UPI", paidby: "9984673097@paytm", status: "Success", receiver: "Clinic A", remarks: "Consultation"
  },
  {
    id: 2, transno: "TRXN123457", datetime: "09/04/2025-9:42", amount: "43638",
    method: "CASH", paidby: "9984673097@paytm", status: "Success", receiver: "Lab Dept", remarks: "Health Package"
  },
  {
    id: 3, transno: "TRXN123458", datetime: "09/04/2025-10:45", amount: "208394",
    method: "CARD", paidby: "9984673097@paytm", status: "Success", receiver: "Surgery Unit", remarks: "Advance payment"
  },
  {
    id: 4, transno: "TRXN123459", datetime: "09/04/2025-8:34", amount: "894",
    method: "CASH", paidby: "9984673097@paytm", status: "Pending", receiver: "Pharmacy", remarks: "Medicine bill"
  },
  {
    id: 5, transno: "TRXN123460", datetime: "09/04/2025-9:56", amount: "5004",
    method: "UPI", paidby: "9984673097@paytm", status: "Failed", receiver: "Lab Dept", remarks: "Test booking"
  },
  {
    id: 6, transno: "TRXN123461", datetime: "09/04/2025-3:19", amount: "4638",
    method: "UPI", paidby: "9984673097@paytm", status: "Success", receiver: "Clinic A", remarks: "Follow-up"
  }
]

const Transcations = () => {
  return (
    <div className="overflow-x-auto mt-20 mb-2 ml-2 max-w-7xl">
      <table className="min-w-full divide-y divide-gray-300 border rounded-lg shadow-sm">
        <thead className="bg-gray-200 text-gray-700 text-sm">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Transaction No</th>
            <th className="px-4 py-2 text-left">Date & Time</th>
            <th className="px-4 py-2 text-left">Method</th>
            <th className="px-4 py-2 text-left">Paid By</th>
            <th className="px-4 py-2 text-left">Receiver</th>
            <th className="px-4 py-2 text-left">Amount (₹)</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm">
          {datas.map((data) => (
            <tr key={data.id} className="hover:bg-blue-50">
              <td className="px-4 py-2">{data.id}</td>
              <td className="px-4 py-2 font-medium text-blue-500">{data.transno}</td>
              <td className="px-4 py-2">{data.datetime}</td>
              <td className="px-4 py-2">{data.method}</td>
              <td className="px-4 py-2">{data.paidby}</td>
              <td className="px-4 py-2">{data.receiver}</td>
              <td className="px-4 py-2">{data.amount}</td>
              <td className={`px-4 py-2 font-semibold ${
                data.status === "Success" ? "text-green-600" : data.status === "Failed" ? "text-red-600" : "text-yellow-600"
              }`}>{data.status}</td>
              <td className="px-4 py-2">{data.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transcations;
