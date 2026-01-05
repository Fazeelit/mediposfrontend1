"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const SupplierCreateModal = ({ onClose, supplier = null }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    supplierId: "",
    name: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    companyName: "",
    productsSupplied: "",
    paymentTerms: "Cash",    
    status: "Active",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({});

  /* ---------------- Initialize Form ---------------- */
  useEffect(() => {
    if (supplier) {
      setFormData({
        supplierId: supplier.supplierId || "",
        name: supplier.name || "",
        contactPerson: supplier.contactPerson || "",
        phone: supplier.phone || "",
        email: supplier.email || "",
        address: supplier.address || "",
        companyName: supplier.companyName || "",
        productsSupplied: supplier.productsSupplied?.join(", ") || "",
        paymentTerms: supplier.paymentTerms || "Cash",        
        status: supplier.status || "Active",
        notes: supplier.notes || "",
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        supplierId: `SUP-${Date.now()}`,
      }));
    }
  }, [supplier]);

  /* ---------------- Handle Change ---------------- */
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "openingBalance") value = Number(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ---------------- Handle Submit ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone is required.";
    if (!formData.address) errors.address = "Address is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      ...formData,
      productsSupplied: formData.productsSupplied
        ? formData.productsSupplied.split(",").map((p) => p.trim())
        : [],
    };

    try {
      setLoading(true);

      if (supplier) {
        await apiRequest(`/suppliers/updateSupplier/${supplier._id}`, {
          method: "PUT",
          data: payload,
        });
      } else {
        await apiRequest("/suppliers/createSupplier", {
          method: "POST",
          data: payload,
        });
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Supplier save error:", error);
      setErrorMessage(
        error?.response?.data?.message || "Failed to save supplier."
      );
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center animate-fadeIn scale-110">
            <CheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-green-700">Success!</h2>
            <p className="text-gray-600 mt-2">
              {supplier
                ? "Supplier updated successfully."
                : "Supplier created successfully."}
            </p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center animate-fadeIn scale-110">
            <AlertTriangle className="text-red-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-red-700">Error</h2>
            <p className="text-gray-600 mt-2">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9998] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {supplier ? "Edit Supplier" : "New Supplier"}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Supplier ID */}
              <div>
                <label className="text-sm font-medium">Supplier ID *</label>
                <input
                  type="text"
                  value={formData.supplierId}
                  readOnly
                  className="w-full h-9 rounded-md border bg-gray-100 px-3"
                />
              </div>

              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.name && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              {/* Contact Person */}
              <div>
                <label className="text-sm font-medium">Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.phone && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
              </div>

              {/* Address */}
              <div>
                <label className="text-sm font-medium">Address *</label>
                <textarea
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-2"
                />
                {formErrors.address && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.address}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
              </div>

              {/* Products Supplied */}
              <div>
                <label className="text-sm font-medium">Products Supplied</label>
                <input
                  type="text"
                  name="productsSupplied"
                  value={formData.productsSupplied}
                  onChange={handleChange}
                  placeholder="Comma separated"
                  className="w-full h-9 rounded-md border px-3"
                />
              </div>

              {/* Payment Terms */}
              <div>
                <label className="text-sm font-medium">Payment Terms</label>
                <select
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                >
                  <option value="Cash">Cash</option>
                  <option value="15 Days">15 Days</option>
                  <option value="30 Days">30 Days</option>
                </select>
              </div>

              
              {/* Status */}
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium">Notes</label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md w-full md:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white w-full md:w-auto ${
                  loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
                }`}
              >
                {loading
                  ? supplier
                    ? "Updating..."
                    : "Creating..."
                  : supplier
                  ? "Update Supplier"
                  : "Create Supplier"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default SupplierCreateModal;
