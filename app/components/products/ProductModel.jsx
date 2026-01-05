"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const ProductModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceProducts, setInvoiceProducts] = useState([]); // All products in invoice

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    category: "",
    unit: "Piece",
    cost: "",
    price: "",
    stock: "",
    manufacturer: "",
    bno: "",
    mfg: "",
    exp: "",
    status: "Active",
    description: "",
    date: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Auto-generate product code
  const generateCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const timestamp = Date.now().toString().slice(-4);
    return `PRD-${timestamp}${randomNum}`;
  };

  // Initialize date and code
  useEffect(() => {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
      today.getMonth() + 1
    ).padStart(2, "0")}/${today.getFullYear()}`;

    setFormData((prev) => ({
      ...prev,
      code: generateCode(),
      date: formattedDate,
    }));
  }, []);

  const parseDMYToISO = (dmy) => {
    if (!dmy) return null;
    const [day, month, year] = dmy.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Fill form data from a product
  const fillFormWithProduct = (prod) => {
    setFormData((prev) => ({
      ...prev,
      name: prod.name || "",
      code: prod.code || generateCode(), // ✅ Update code from product
      cost: prod.price || "",
      price: prod.price || "",
      stock: prod.quantity || "",
      manufacturer: prod.manufacturer || "",
      bno: prod.bno || "",
      mfg: prod.mfg ? new Date(prod.mfg).toLocaleDateString("en-GB") : "",
      exp: prod.exp ? new Date(prod.exp).toLocaleDateString("en-GB") : "",
    }));
  };

  // Fetch purchase products by invoice
  const handleInvoiceKeyPress = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!invoiceNumber) return;

      try {
        const response = await apiRequest("/purchases", { method: "GET" });
        const purchases = response?.data || [];
        const purchase = purchases.find(
          (p) => String(p.invoiceNumber) === String(invoiceNumber)
        );

        if (!purchase || !purchase.products || purchase.products.length === 0) {
          setShowError(true);
          setErrorMessage("Invoice not found or has no products.");
          return;
        }

        setInvoiceProducts(purchase.products);

        // Auto-fill first product if single
        if (purchase.products.length === 1) {
          fillFormWithProduct(purchase.products[0]);
        }
      } catch (error) {
        setShowError(true);
        setErrorMessage(error?.response?.data?.message || "Failed to fetch purchase.");
      }
    }
  };

  const handleProductSelect = (e) => {
    const prodName = e.target.value;
    const selectedProd = invoiceProducts.find((p) => p.name === prodName);
    if (selectedProd) fillFormWithProduct(selectedProd);
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

    const payload = {
      name: formData.name.trim(),
      code: formData.code.trim().toUpperCase(),
      category: formData.category,
      unit: formData.unit,
      cost: Number(formData.cost),
      price: Number(formData.price),
      stock: Number(formData.stock),
      manufacturer: formData.manufacturer.trim(),
      bno: formData.bno.trim(),
      mfg: parseDMYToISO(formData.mfg),
      exp: parseDMYToISO(formData.exp),
      status: formData.status,
      description: formData.description.trim(),
      date: parseDMYToISO(formData.date),
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
        <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex justify-between">
            <h2 className="text-2xl font-bold">New Product</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            {/* Invoice Number Input */}
            <div>
              <label className="text-sm font-medium">Invoice No.</label>
              <input
                type="text"
                name="invoiceNumber"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                onKeyPress={handleInvoiceKeyPress}
                placeholder="Enter Invoice Number of New Supply and press Enter"
                className="w-full h-9 rounded-md border px-3 mb-2"
              />
            </div>

            {/* Product Name Input or Select if multiple products */}
            <div>
              <label className="text-sm font-medium">Product Name *</label>
              {invoiceProducts.length > 1 ? (
                <select
                  value={formData.name}
                  onChange={handleProductSelect}
                  className="w-full h-9 rounded-md border px-3"
                >
                  <option value="">Select product</option>
                  {invoiceProducts.map((p, idx) => (
                    <option key={idx} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name="name"
                  value={formData.name}
                  placeholder="Enter product name"
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                />
              )}
              {formErrors.name && (
                <p className="text-xs text-red-600">{formErrors.name}</p>
              )}
            </div>

            {/* Remaining fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                ["code", "Product Code", "Auto-generated"],
                ["cost", "Cost Price *", "0"],
                ["price", "Selling Price *", "0"],
                ["stock", "Stock *", "0"],
                ["manufacturer", "Manufacturer *", "Company name"],
                ["bno", "B.No.", ""],
                ["mfg", "MFG", "dd/mm/yyyy"],
                ["exp", "EXP", "dd/mm/yyyy"],
              ].map(([key, label, placeholder]) => (
                <div key={key}>
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    name={key}
                    value={formData[key]}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="w-full h-9 rounded-md border px-3"
                    readOnly={key === "code"}
                  />
                  {formErrors[key] && (
                    <p className="text-xs text-red-600">{formErrors[key]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="text-sm font-medium">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                >
                  <option value="">Select category</option>
                  <option value="Medicines">Medicines</option>
                  <option value="Surgical Equipment">Surgical Equipment</option>
                  <option value="Medical Consumables">Medical Consumables</option>
                  <option value="Lab Equipment">Lab Equipment</option>
                  <option value="Diagnostics">Diagnostics</option>
                  <option value="PPE">Personal Protective Equipment</option>
                  <option value="Orthopedic Supplies">Orthopedic Supplies</option>
                  <option value="First Aid">First Aid</option>
                  <option value="Pharmaceutical Ingredients">Pharmaceutical Ingredients</option>
                  <option value="Hospital Furniture">Hospital Furniture</option>
                  <option value="Rehabilitation Equipment">Rehabilitation Equipment</option>
                  <option value="Medical Devices">Medical Devices</option>
                  <option value="Imaging Equipment">Imaging Equipment</option>
                  <option value="Injections & Vaccines">Injections & Vaccines</option>
                  <option value="Disposables">Disposables</option>
                  <option value="Home Healthcare">Home Healthcare</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Unit *</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full h-9 rounded-md border px-3"
                >
                  <option value="Piece">Piece</option>
                  <option value="Strip">Strip</option>
                  <option value="Box">Box</option>
                  <option value="Bottle">Bottle</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Capsule">Capsule</option>
                  <option value="Sachet">Sachet</option>
                  <option value="Tube">Tube</option>
                  <option value="Vial">Vial</option>
                  <option value="Ampoule">Ampoule</option>
                  <option value="Pack">Pack</option>
                  <option value="Ointment">Ointment</option>
                  <option value="Syrup">Syrup</option>
                  <option value="Inhaler">Inhaler</option>
                  <option value="Drop">Drop</option>
                </select>
              </div>

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

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="border px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white ${
                  loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
                }`}
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
