"use client";

import React, { useState } from "react";
import { apiRequest } from "@/app/authservice/api"; // make sure this path is correct

const SupplierDeleteModal = ({ supplier, onClose, onDeleted }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await apiRequest(`/suppliers/deleteSupplier/${supplier._id}`, {
        method: "DELETE",
      });

      // Assuming API returns { message, success }
      if (res?.success !== false) {
        onDeleted?.(); // Notify parent to remove supplier from state
        onClose?.();
      } else {
        alert(res?.message || "Failed to delete supplier.");
      }
    } catch (err) {
      console.error("Failed to delete supplier:", err);
      alert(err?.message || "Failed to delete supplier.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-lg w-96 p-6">
        <h2 className="text-lg font-semibold text-red-600 mb-4">Delete Supplier</h2>
        <p className="text-sm text-gray-700 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-medium">{supplier?.name || "this supplier"}</span>? This action cannot be undone.
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

export default SupplierDeleteModal;
