"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const PatientUpdateModal = ({ onClose, patient = null, onUpdated }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    _id: "",
    patientId: "",
    name: "",
    phone: "",
    address: "",
    age: "",
    gender: "",
    bloodgroup: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [modal, setModal] = useState({
    show: false,
    success: true,
    message: "",
  });

  /* Populate form when patient changes */
  useEffect(() => {
    if (patient) {
      setFormData({
        _id: patient._id || "",
        patientId: patient.patientId || "",
        name: patient.name || "",
        phone: patient.phone || "",
        address: patient.address || "",
        age: patient.age || "",
        gender: patient.gender || "",
        bloodgroup: patient.bloodgroup || "",
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Validation */
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone) errors.phone = "Phone is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.age) errors.age = "Age is required";
    if (!formData.gender) errors.gender = "Gender is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      age: Number(formData.age),
      gender: formData.gender,
      bloodgroup: formData.bloodgroup,
    };

    try {
      setLoading(true);

      const res = await apiRequest(`/patients/updatePatient/${formData.patientId}`,
        {
          method: "PUT",
          data: payload,
          successMessage: "Patient updated successfully",
        }
      );
      if (res?.success) {
        setModal({
          show: true,
          success: true,
          message: res.message || "Patient updated successfully",
        });
        onUpdated?.();
      } else {
        throw new Error(res?.message || "Update failed");
      }
    } catch (error) {
      setModal({
        show: true,
        success: false,
        message: error.message || "Something went wrong",
      });
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
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-teal-600 text-white p-6 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold">Edit Patient</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Patient ID</label>
                <input
                  name="patientId"
                  value={formData.patientId}
                  readOnly
                  className="w-full h-9 rounded-md border bg-gray-100 px-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.name && (
                  <p className="text-red-600 text-xs">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Phone *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
                {formErrors.phone && (
                  <p className="text-red-600 text-xs">{formErrors.phone}</p>
                )}
              </div>

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
                  <p className="text-red-600 text-xs">{formErrors.address}</p>
                )}
              </div>

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
                  <p className="text-red-600 text-xs">{formErrors.age}</p>
                )}
              </div>

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
                  <p className="text-red-600 text-xs">{formErrors.gender}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Blood Group</label>
                <input
                  name="bloodgroup"
                  value={formData.bloodgroup}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white ${loading
                    ? "bg-gray-400"
                    : "bg-teal-600 hover:bg-teal-700"
                  }`}
              >
                {loading ? "Updating..." : "Update Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success / Error Modal */}
      {modal.show && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
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

export default PatientUpdateModal;
