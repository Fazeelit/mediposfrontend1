"use client";

import React, { useState } from "react";
import { apiRequest } from "@/app/authservice/api"; // make sure this path is correct

const PatientDeleteModal = ({ patient, onClose, onDeleted }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await apiRequest(`/patients/deletePatient/${patient._id || patient.patientId}`, {
        method: "DELETE",
      });
      if (res?.success) {
        onDeleted?.(); // Notify parent to remove patient from state
        onClose?.();        
      } else {
        alert(res?.message || "Failed to delete patient.");
      }
    } catch (err) {
      console.error("Failed to delete patient:", err);
      alert(err?.message || "Failed to delete patient.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-96 p-6">
        <h2 className="text-lg font-semibold text-red-600 mb-4">Delete Patient</h2>
        <p className="text-sm text-gray-700 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-medium">{patient?.name || "this patient"}</span>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDeleteModal;
