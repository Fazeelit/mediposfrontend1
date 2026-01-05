"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const ExpenseCreateModal = ({ isOpen, onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    date: "",
    category: "Other",
    description: "",
    vendor: "",
    paymentMethod: "Cash",
    paymentStatus: "Pending",
    amount: "",    
    referenceNumber: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (editData) {
      setForm({
        date: editData.date || "",
        category: editData.category || "Other",
        description: editData.description || "",
        vendor: editData.vendor || "",
        paymentMethod: editData.paymentMethod || "Cash",
        paymentStatus: editData.paymentStatus || "Pending",
        amount: editData.amount ? String(editData.amount) : "",        
        referenceNumber: editData.referenceNumber || "",
        notes: editData.notes || "",
      });
    } else {
      setForm({
        date: "",
        category: "Other",
        description: "",
        vendor: "",
        paymentMethod: "Cash",
        paymentStatus: "Pending",
        amount: "",        
        referenceNumber: "",
        notes: "",
      });
    }
    setFormErrors({});
  }, [editData, isOpen]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFormErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!form.date) errors.date = "Date is required.";
    if (!form.category) errors.category = "Category is required.";
    if (!form.amount || Number(form.amount) <= 0)
      errors.amount = "Amount must be greater than 0.";
    if (!form.description) errors.description = "Description is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      date: form.date,
      category: form.category,
      description: form.description.trim(),
      vendor: form.vendor.trim(),
      paymentMethod: form.paymentMethod,
      paymentStatus: form.paymentStatus,
      amount: Number(form.amount),      
      referenceNumber: form.referenceNumber.trim(),
      notes: form.notes.trim(),
    };

    try {
      setLoading(true);

      const response = await apiRequest("/expenses/createExpense", {
        method: "POST",
        data: payload, // send JSON payload
      });

      if (response?.success) {
        setShowSuccess(true);
        onSave(response.data);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 1500);
      } else {
        throw new Error(response?.message || "Failed to add expense.");
      }
    } catch (error) {
      console.error("Expense create error:", error);
      setErrorMessage(error?.response?.data?.message || error.message || "Something went wrong while adding expense.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* -------- Success Modal -------- */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[10000]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-green-700">Success</h2>
            <p className="text-gray-600">Expense saved successfully</p>
          </div>
        </div>
      )}

      {/* -------- Error Modal -------- */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[10000]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <AlertTriangle className="text-red-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-red-700">Error</h2>
            <p className="text-gray-600">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* -------- Main Modal -------- */}
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
            <h2 className="text-2xl font-bold">{editData ? "Edit Expense" : "New Expense"}</h2>
            <button onClick={onClose} className="p-2 px-3 hover:bg-white/20 rounded-lg transition-colors">✕</button>
          </div>

          {/* Form */}
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["date", "Date *", "date"],
                ["category", "Category *", "select"],
                ["amount", "Amount *", "number"],
                ["paymentMethod", "Payment Method", "select"],
                ["paymentStatus", "Payment Status", "select"],
                ["vendor", "Vendor", "text"],
                ["referenceNumber", "Reference Number", "text"],                
                ["description", "Description *", "textarea"],
                ["notes", "Notes", "textarea"],
              ].map(([key, label, type]) => (
                <div key={key} className={key === "description" || key === "notes" ? "md:col-span-2 space-y-2" : "space-y-2"}>
                  <label className="text-sm font-medium">{label}</label>
                  {type === "textarea" ? (
                    <textarea
                      rows={key === "description" ? 3 : 2}
                      value={form[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      disabled={loading}
                      placeholder={key === "description" ? "Enter expense description" : "Additional notes"}
                      className="flex min-h-[60px] w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  ) : type === "select" ? (
                    <select
                      value={form[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      disabled={loading}
                      className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                      {key === "category" && ["Salary","Rent","Utilities","Equipment","Maintenance","Marketing","Supplies","Transportation","Professional Fees","Insurance","Taxes","Other"].map(opt => <option key={opt}>{opt}</option>)}
                      {key === "paymentMethod" && ["Cash","Card","Bank Transfer","Cheque"].map(opt => <option key={opt}>{opt}</option>)}
                      {key === "paymentStatus" && ["Pending","Completed","Failed"].map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                  ) : (
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                      disabled={loading}
                      placeholder={type === "number" ? "0.00" : ""}
                      className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                    />
                  )}
                  {formErrors[key] && <p className="text-xs text-red-600">{formErrors[key]}</p>}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="h-9 px-4 border border-input rounded-md hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`h-9 px-4 rounded-md text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"}`}
              >
                {editData ? "Update Expense" : "Add Expense"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExpenseCreateModal;
