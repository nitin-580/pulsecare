"use client";
import React, { useState } from "react";

type Item = {
  description: string;
  rate: number;
  qty: number;
};

type FormData = {
  invoiceNumber: string;
  companyDetails: string;
  billTo: string;
  issueDate: string;
  dueDate: string;
  notes: string;
  tax: number;
  discount: number;
  shipping: number;
};

const InvoiceForm = () => {
  const [items, setItems] = useState<Item[]>([{ description: "", rate: 0, qty: 1 }]);
  const [formData, setFormData] = useState<FormData>({
    invoiceNumber: "",
    companyDetails: "",
    billTo: "",
    issueDate: "",
    dueDate: "",
    notes: "",
    tax: 0,
    discount: 0,
    shipping: 0,
  });

  const handleItemChange = (index: number, field: keyof Item, value: string) => {
    const newItems = [...items];
  
    switch (field) {
      case "rate":
      case "qty":
        newItems[index][field] = parseFloat(value);
        break;
      case "description":
        newItems[index][field] = value;
        break;
    }
  
    setItems(newItems);
  };
  

  const addItem = () => setItems([...items, { description: "", rate: 0, qty: 1 }]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));

  const total = items.reduce((sum, item) => sum + item.rate * item.qty, 0);
  const grandTotal = total + formData.tax + formData.shipping - formData.discount;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white border ml-2 rounded-lg mt-20 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Upload Logo</label>
          <input type="file" accept="image/*" className="w-full border p-2 rounded mt-1" />
        </div>
        <div>
          <label className="text-sm font-medium">Invoice Number</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={formData.invoiceNumber}
            onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Your Company Details</label>
          <textarea
            className="w-full border p-2 rounded mt-1"
            value={formData.companyDetails}
            onChange={(e) => setFormData({ ...formData, companyDetails: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Bill To</label>
          <textarea
            className="w-full border p-2 rounded mt-1"
            value={formData.billTo}
            onChange={(e) => setFormData({ ...formData, billTo: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Issue Date</label>
          <input
            type="date"
            className="w-full border p-2 rounded mt-1"
            value={formData.issueDate}
            onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Due Date</label>
          <input
            type="date"
            className="w-full border p-2 rounded mt-1"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 items-center">
            <input
              type="text"
              placeholder="Item"
              className="border p-2 rounded"
              value={item.description}
              onChange={(e) => handleItemChange(index, "description", e.target.value)}
            />
            <input
              type="number"
              placeholder="Rate"
              className="border p-2 rounded"
              value={item.rate}
              onChange={(e) => handleItemChange(index, "rate", e.target.value)}
            />
            <input
              type="number"
              placeholder="Qty"
              className="border p-2 rounded"
              value={item.qty}
              onChange={(e) => handleItemChange(index, "qty", e.target.value)}
            />
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold">₹{(item.rate * item.qty).toFixed(2)}</span>
              <button
                onClick={() => removeItem(index)}
                className="text-red-500 text-lg ml-2"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
        <button onClick={addItem} className="text-blue-600 text-sm font-semibold">
          + Add Item
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium">Notes</label>
          <textarea
            className="w-full border p-2 rounded mt-1"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>
        <div className="space-y-3 text-right">
          <div>Subtotal: <span className="font-bold">₹{total.toFixed(2)}</span></div>
          <div>
            Tax: ₹<input
              type="number"
              className="border p-1 w-24 text-right"
              value={formData.tax}
              onChange={(e) => setFormData({ ...formData, tax: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <div>
            Discount: ₹<input
              type="number"
              className="border p-1 w-24 text-right"
              value={formData.discount}
              onChange={(e) => setFormData({ ...formData, discount: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <div>
            Shipping: ₹<input
              type="number"
              className="border p-1 w-24 text-right"
              value={formData.shipping}
              onChange={(e) => setFormData({ ...formData, shipping: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <div className="text-xl font-bold pt-2">Total: ₹{grandTotal.toFixed(2)}</div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Generate PDF
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
