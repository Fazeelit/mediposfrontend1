"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const SupplierUpdateModal = ({ onClose, supplier = null, onUpdated }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
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
  const [modal, setModal] = useState({ show: false, success: true, message: "" });

  // Populate form when supplier changes
  useEffect(() => {
    if (supplier) {
      setFormData({
        _id: supplier._id || "",
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
    }
  }, [supplier]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone is required.";
    if (!formData.address) errors.address = "Address is required.";
    if (!formData.supplierId) errors.supplierId = "Supplier ID is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Prepare payload
    const payload = {
      ...formData,
      productsSupplied: formData.productsSupplied
        ? formData.productsSupplied.split(",").map((p) => p.trim())
        : [],
      openingBalance: Number(formData.openingBalance) || 0,
    };

    try {
      setLoading(true);
      const res = await apiRequest(`/suppliers/updateSupplier/${formData._id}`, {
        method: "PUT",
        data: payload,
      });

      if (res?.success !== false) {
        setModal({ show: true, success: true, message: res.message || "Supplier updated successfully" });
        onUpdated?.();
      } else {
        setModal({ show: true, success: false, message: res?.message || "Failed to update supplier" });
      }
    } catch (error) {
      console.error("Save supplier error:", error);
      setModal({ show: true, success: false, message: error.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    if (modal.success) onClose?.();
    setModal({ show: false, success: true, message: "" });
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-teal-600 text-white p-6 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold">Edit Supplier</h2>
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
                  name="supplierId"
                  value={formData.supplierId}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                  readOnly
                />
                {formErrors.supplierId && <p className="text-red-600 text-xs mt-1">{formErrors.supplierId}</p>}
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
                {formErrors.name && <p className="text-red-600 text-xs mt-1">{formErrors.name}</p>}
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
                {formErrors.phone && <p className="text-red-600 text-xs mt-1">{formErrors.phone}</p>}
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
                {formErrors.address && <p className="text-red-600 text-xs mt-1">{formErrors.address}</p>}
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
            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md">
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white ${loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"}`}
              >
                {loading ? "Updating..." : "Update Supplier"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success / Error Modal */}
      {modal.show && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            {modal.success ? (
              <CheckCircle className="mx-auto w-12 h-12 text-green-500" />
            ) : (
              <AlertTriangle className="mx-auto w-12 h-12 text-red-500" />
            )}
            <p className="mt-4 text-gray-700">{modal.message}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SupplierUpdateModal;
