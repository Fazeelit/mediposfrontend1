"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const AppointmentModal = ({ onClose, onUpdate, appointment = null }) => {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [fee, setFee] = useState("");
  const [status, setStatus] = useState("Scheduled");
  const [reason, setReason] = useState("");  
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Success/Error modal state
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (appointment) {
      setPatient(appointment.patient || "");
      setDoctor(appointment.doctor || "");
      setDate(appointment.date || new Date().toISOString().split("T")[0]);
      setTime(appointment.time || "");
      setFee(appointment.fee || "");
      setStatus(appointment.status || "Scheduled");
      setReason(appointment.reason || "");      
    }
  }, [appointment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let errors = {};
    if (!patient) errors.patient = "Patient is required.";
    if (!doctor) errors.doctor = "Doctor is required.";
    if (!date) errors.date = "Date is required.";
    if (!time) errors.time = "Time is required.";
    if (!fee) errors.fee = "Fee is required.";
    if (!fee) errors.reason = "Fee is required.";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    const newAppointment = { patient, doctor, date, time, fee, status, reason };

    try {
      setLoading(true);

      if (appointment && onUpdate) {
        await onUpdate({ ...appointment, ...newAppointment });
      } else {
        await apiRequest("/appointments/createAppointment", {
          method: "POST",
          data: newAppointment,
        });
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Error creating/updating appointment:", error);
      setErrorMessage(error?.response?.data?.message || "Failed to save appointment.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center animate-fadeIn scale-110">
            <CheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-green-700">Success!</h2>
            <p className="text-gray-600 mt-2">Appointment saved successfully.</p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center animate-fadeIn scale-110">
            <AlertTriangle className="text-red-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-red-700">Error</h2>
            <p className="text-gray-600 mt-2">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9998] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
            <h2 className="text-2xl font-bold">{appointment ? "Edit Appointment" : "New Appointment"}</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Patient */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Patient *</label>
                <select
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
                >
                  <option value="">Select patient</option>
                  <option value="Absara">Absara - 3234534</option>
                  <option value="John Williams">John Williams - +1-555-1001</option>
                  <option value="Maria Garcia">Maria Garcia - +1-555-1003</option>
                </select>
                {formErrors.patient && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.patient}</p>
                )}
              </div>

              {/* Doctor */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Doctor *</label>
                <select
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                >
                  <option value="">Select doctor</option>
                  <option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                  <option value="Dr. Michael Chen">Dr. Michael Chen</option>
                  <option value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</option>
                </select>
                {formErrors.doctor && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.doctor}</p>
                )}
              </div>

              {/* Date */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Date *</label>
                <input
                  type="date"
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {formErrors.date && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.date}</p>
                )}
              </div>

              {/* Time */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Time *</label>
                <input
                  type="time"
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
                {formErrors.time && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.time}</p>
                )}
              </div>

              {/* Fee */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Consultation Fee *</label>
                <input
                  type="number"
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={fee}
                  onChange={(e) => setFee(e.target.value)}
                  step="0.01"
                />
                {formErrors.fee && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.fee}</p>
                )}
              </div>

              {/* Status */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Status *</label>
                <select
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Reason */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Reason for Visit *</label>
              <textarea
                className="flex min-h-[60px] w-full rounded-md border border-gray-200 bg-transparent px-3 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter reason for visit"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
              {formErrors.reason && (
                  <p className="text-red-600 text-xs mt-1">{formErrors.reason}</p>
                )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow hover:from-teal-600 hover:to-teal-700 disabled:opacity-50"
              >
                {loading ? (appointment ? "Updating..." : "Creating...") : appointment ? "Update Appointment" : "Create Appointment"}
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
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default AppointmentModal;
