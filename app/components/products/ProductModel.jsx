"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const ProductModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    code: "", // auto-generated
    category: "",
    unit: "Piece", // default unit   
    cost: "",
    price: "",
    stock: "",
    manufacturer: "",
    status: "Active",
    description: "",
    date: "", // dd/mm/yyyy
  });

  const [formErrors, setFormErrors] = useState({});

  // Auto-generate product code and today's date
  useEffect(() => {
    const generateCode = () => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const timestamp = Date.now().toString().slice(-4);
      return `PRD-${timestamp}${randomNum}`;
    };

    const today = new Date();
    const formatDate = `${String(today.getDate()).padStart(2, "0")}/${String(
      today.getMonth() + 1
    ).padStart(2, "0")}/${today.getFullYear()}`;

    setFormData((prev) => ({ ...prev, code: generateCode(), date: formatDate }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name) errors.name = "Product name is required.";
    if (!formData.category) errors.category = "Category is required.";    
    if (!formData.cost) errors.cost = "Cost is required.";
    if (!formData.price) errors.price = "Selling price is required.";
    if (!formData.stock) errors.stock = "Stock is required.";
    if (!formData.manufacturer) errors.manufacturer = "Manufacturer is required.";
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.description) errors.description = "Description is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Convert dd/mm/yyyy to ISO Date for MongoDB
    const [day, month, year] = formData.date.split("/");
    const isoDate = new Date(`${year}-${month}-${day}`);

    const payload = {
      name: formData.name.trim(),
      code: formData.code.trim().toUpperCase(),
      category: formData.category,
      unit: formData.unit,
      cost: Number(formData.cost),
      price: Number(formData.price),
      stock: Number(formData.stock),
      manufacturer: formData.manufacturer.trim(),
      status: formData.status,
      description: formData.description.trim(),
      date: isoDate,
    };

    try {
      setLoading(true);
      await apiRequest("/products/createProduct", {
        method: "POST",
        data: payload,
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error("Product create error:", error);
      setErrorMessage(error?.response?.data?.message || "Failed to create product.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center">
            <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-green-700">Success</h2>
            <p className="text-gray-600">Product created successfully</p>
          </div>
        </div>
      )}

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

      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[9998] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between">
            <h2 className="text-2xl font-bold">New Product</h2>
            <button onClick={onClose}><X /></button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["name", "Product Name *", "Enter product name"],
                ["code", "Product Code", "Auto-generated"],
                ["cost", "Cost Price *", "0"],
                ["price", "Selling Price *", "0"],                
                ["stock", "Stock *", "0"],
                ["manufacturer", "Manufacturer *", "Company name"],
              ].map(([key, label, placeholder]) => (
                <div key={key}>
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    name={key}
                    value={formData[key]}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="w-full h-9 rounded-md border px-3"
                    required={key !== "code"}
                    readOnly={key === "code"}
                  />
                  {formErrors[key] && <p className="text-xs text-red-600">{formErrors[key]}</p>}
                </div>
              ))}

              <div>
                <label className="text-sm font-medium">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Medicines">Medicines</option>
                  <option value="Surgical Equipment">Surgical Equipment</option>
                  <option value="Medical Consumables">Medical Consumables</option>
                  <option value="Lab Equipment">Lab Equipment</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Unit *</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                  required
                >
                  <option value="Piece">Piece</option>
                  <option value="Strip">Strip</option>
                  <option value="Box">Box</option>
                  <option value="Bottle">Bottle</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Status *</label>
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

              <div>
                <label className="text-sm font-medium">Date *</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="dd/mm/yyyy"
                  className="w-full h-9 rounded-md border px-3"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button type="button" onClick={onClose} className="border px-4 py-2 rounded-md">Cancel</button>
              <button
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white ${loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"}`}
              >
                {loading ? "Creating..." : "Create Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
