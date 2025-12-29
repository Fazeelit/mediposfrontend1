"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const PatientModal = ({ onClose, patient = null }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    patientId: "",
    name: "",
    phone: "",    
    address: "",
    age: "",
    gender: "",
    temperature: "",
    bloodpressure: "",
  });

  const [formErrors, setFormErrors] = useState({});

  /* ---------------- Initialize Form ---------------- */
  useEffect(() => {
    if (patient) {
      setFormData({
        patientId: patient.patientId || "",
        name: patient.name || "",
        phone: patient.phone || "",       
        address: patient.address || "",
        age: patient.age || "",
        gender: patient.gender || "",
        temperature: patient.temperature || "",
        bloodpressure: patient.bloodpressure || "",
      });
    } else {
      setFormData({
        patientId: `PAT-${Date.now()}`,
        name: "",
        phone: "",   
        address: "",
        age: "",      
        gender: "",
         temperature: "",
        bloodpressure: "",
      });
    }
  }, [patient]);

  /* ---------------- Handle Change ---------------- */
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "age") value = Number(value);
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ---------------- Handle Submit ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.age) errors.age = "Age is required.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.temperature) errors.temperature = "Temperature is required.";
    if (!formData.bloodpressure) errors.bloodpressure = "Blood pressure is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      patientId: formData.patientId,
      name: formData.name,
      phone: formData.phone,
      emergency: formData.emergency || "",
      email: formData.email?.trim() || undefined,
      address: formData.address || "",
      age: Number(formData.age) || 0,
      gender: formData.gender || "",
      bloodpressure: formData.bloodpressure || undefined,
    };

    try {
      setLoading(true);

      if (patient) {
        await apiRequest(`/patients/updatePatient/${patient._id}`, {
          method: "PUT",
          data: payload,
        });
      } else {
        await apiRequest("/patients/createPatient", {
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
      console.error("Patient save error:", error);
      setErrorMessage(
        error?.response?.data?.message || "Failed to save patient."
      );
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ---------------- Success Modal ---------------- */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center animate-fadeIn scale-110">
            <CheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-green-700">Success!</h2>
            <p className="text-gray-600 mt-2">
              {patient
                ? "Patient updated successfully."
                : "Patient created successfully."}
            </p>
          </div>
        </div>
      )}

      {/* ---------------- Error Modal ---------------- */}
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

      {/* ---------------- Main Modal ---------------- */}
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9998] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              {patient ? "Edit Patient" : "New Patient"}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Patient ID */}
              <div>
                <label className="text-sm font-medium">Patient ID *</label>
                <input
                  type="text"
                  value={formData.patientId}
                  readOnly
                  className="w-full h-9 rounded-md border bg-gray-100 px-3"
                />
              </div>

              {/* Name */}
              <div>
                <label className="text-sm font-medium">Full Name *</label>
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

              {/* Age */}
              <div>
                <label className="text-sm font-medium">Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.age && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.age}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="text-sm font-medium">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {formErrors.gender && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.gender}</p>
                )}
              </div>
              {/* Temperature */}
              <div>
                <label className="text-sm font-medium">Temperature *</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.temperature && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.temperature}</p>
                )}
              </div>

              {/* Blood Pressure */}
              <div>
                <label className="text-sm font-medium">Blood Pressure *</label>
                <input
                  type="text"
                  name="bloodpressure"
                  value={formData.bloodpressure}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.bloodpressure && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.bloodpressure}</p>
                )}
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
                  ? patient ? "Updating..." : "Creating..."
                  : patient ? "Update Patient" : "Create Patient"}
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

export default PatientModal;
