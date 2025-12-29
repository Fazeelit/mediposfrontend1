"use client";

import React, { useState, useEffect } from "react";

const ExpenseModal = ({ isOpen, onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    date: "",
    category: "Other",
    description: "",
    vendor: "",
    paymentMethod: "Cash",
    paymentStatus: "Pending",
    amount: "",
    status: "Pending",
    referenceNumber: "",
    notes: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, amount: Number(form.amount) });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold">{editData ? "Edit Expense" : "New Expense"}</h2>
          <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg transition-colors">
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date *</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
                className="flex h-9  px-3 py-1 w-full rounded-md border border-gray-200 border-input bg-transparent text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category *</label>
              <select
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              >
                <option>Salary</option>
                <option>Rent</option>
                <option>Utilities</option>
                <option>Equipment</option>
                <option>Maintenance</option>
                <option>Marketing</option>
                <option>Supplies</option>
                <option>Transportation</option>
                <option>Professional Fees</option>
                <option>Insurance</option>
                <option>Taxes</option>
                <option>Other</option>
              </select>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount *</label>
              <input
                type="number"
                step="0.01"
                value={form.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                placeholder="0.00"
                required
                className="flex h-9 w-full rounded-md border border-gray-200 border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Method</label>
              <select
                value={form.paymentMethod}
                onChange={(e) => handleChange("paymentMethod", e.target.value)}
                className="flex h-9 w-full rounded-md border border-gray-200 text-sm border-input bg-transparent px-3 py-1  shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              >
                <option>Cash</option>
                <option>Card</option>
                <option>Bank Transfer</option>
                <option>Cheque</option>
              </select>
            </div>

            {/* Vendor */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Vendor</label>
              <input
                type="text"
                value={form.vendor}
                onChange={(e) => handleChange("vendor", e.target.value)}
                placeholder="Vendor name"
                className="flex h-9 w-full rounded-md border border-gray-200 text-sm border-input bg-transparent px-3 py-1  shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Reference Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Reference Number</label>
              <input
                type="text"
                value={form.referenceNumber}
                onChange={(e) => handleChange("referenceNumber", e.target.value)}
                placeholder="Receipt/invoice #"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description *</label>
            <textarea
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={3}
              placeholder="Enter expense description"
              required
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              rows={2}
              placeholder="Additional notes"
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring focus:ring-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="h-9 px-4 border border-input rounded-md hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-9 px-4 rounded-md text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            >
              {editData ? "Update Expense" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
