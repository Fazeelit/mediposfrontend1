"use client";

import React, { useState } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const DoctorModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    qualification: "",
    fee: "",
    phone: "",
    status: "Active",
    availableHours: "",
  });

  const [formErrors, setFormErrors] = useState({});

  /* ---------------- Handle Change ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ---------------- Handle Submit (CREATE ONLY) ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.specialization)
      errors.specialization = "Specialization is required.";
    if (!formData.phone) errors.phone = "Phone is required.";
    if (!formData.fee) errors.fee = "Fee is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      name: formData.name.trim(),
      specialization: formData.specialization.trim(),
      qualification: formData.qualification.trim(),
      phone: formData.phone.trim(),
      fee: Number(formData.fee),
      status: formData.status,
      availableHours: formData.availableHours.trim(),
    };

    try {
      setLoading(true);

      await apiRequest("/doctors/createDoctor", {
        method: "POST",
        data: payload,
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Doctor create error:", error);
      setErrorMessage(
        error?.response?.data?.message || "Failed to create doctor."
      );
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* -------- Success Modal -------- */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-green-700">Success</h2>
            <p className="text-gray-600">Doctor created successfully</p>
          </div>
        </div>
      )}

      {/* -------- Error Modal -------- */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
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
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9998] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between">
            <h2 className="text-xl font-bold">New Doctor</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["name", "Full Name *", "Enter full name", "text"],
                ["specialization", "Specialization *", "e.g. Cardiology", "text"],
                ["qualification", "Qualification", "e.g. MBBS, MD", "text"],
                ["phone", "Phone *", "03XXXXXXXXX", "text"],
                ["fee", "Consultation Fee *", "0", "number"],
                ["availableHours", "Available Hours", "Mon-Fri 9AM-5PM", "text"],
              ].map(([key, label, placeholder, type]) => (
                <div key={key}>
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    type={type}
                    name={key}
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full h-9 rounded-md border px-3"
                  />
                  {formErrors[key] && (
                    <p className="text-xs text-red-600">{formErrors[key]}</p>
                  )}
                </div>
              ))}

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
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="border px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white ${loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
                  }`}
              >
                {loading ? "Creating..." : "Create Doctor"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default DoctorModal;
