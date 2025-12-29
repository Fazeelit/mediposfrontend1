"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const ProductEditModal = ({ productId, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    category: "",
    unit: "Piece",
    cost: "",
    price: "",
    stock: "",
    manufacturer: "",
    status: "Active",
    description: "",
    date: "",
  });

  const [formErrors, setFormErrors] = useState({});

  /* ---------------- FETCH PRODUCT ---------------- */
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setFetching(true);

        // ✅ apiRequest returns response.data directly
        const product = await apiRequest(`/products/getProductById/${productId}`, { method: "GET" });

        if (!product || !product._id) {
          throw new Error("Invalid product response");
        }

        const d = product.date ? new Date(product.date) : null;
        const formattedDate = d
          ? `${String(d.getDate()).padStart(2, "0")}/${String(
              d.getMonth() + 1
            ).padStart(2, "0")}/${d.getFullYear()}`
          : "";

        setFormData({
          name: product.name || "",
          code: product.code || "",
          category: product.category || "",
          unit: product.unit || "Piece",
          cost: product.cost ?? "",
          price: product.price ?? "",
          stock: product.stock ?? "",
          manufacturer: product.manufacturer || "",
          status: product.status || "Active",
          description: product.description || "",
          date: formattedDate,
        });
      } catch (err) {
        console.error("FETCH PRODUCT ERROR:", err);
        setErrorMessage(err.message || "Failed to fetch product details");
        setShowError(true);
      } finally {
        setFetching(false);
      }
    };

    fetchProduct();
  }, [productId]);

  /* ---------------- HANDLERS ---------------- */
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
    if (!formData.manufacturer)
      errors.manufacturer = "Manufacturer is required.";
    if (!formData.date) errors.date = "Date is required.";

    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    const [day, month, year] = formData.date.split("/");
    const isoDate = new Date(`${year}-${month}-${day}`);

    const payload = {
      name: formData.name.trim(),
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

      await apiRequest(`/products/updateProduct/${productId}`, {
        method: "PUT",
        data: payload,
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1200);
    } catch (error) {
      setErrorMessage(
        error?.message || "Failed to update product"
      );
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return null;

  return (
    <>
      {/* SUCCESS */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl text-center">
            <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold">Updated</h2>
            <p className="text-gray-600">Product updated successfully</p>
          </div>
        </div>
      )}

      {/* ERROR */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl text-center">
            <AlertTriangle className="text-red-600 w-12 h-12 mx-auto mb-2" />
            <p className="text-gray-600">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      <div className="fixed inset-0 bg-black/50 z-[9998] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full">
          <div className="bg-teal-600 text-white p-6 flex justify-between rounded-t-2xl">
            <h2 className="text-xl font-bold">Edit Product</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["name", "Product Name *"],
                ["code", "Product Code"],
                ["cost", "Cost Price *"],
                ["price", "Selling Price *"],
                ["stock", "Stock *"],
                ["manufacturer", "Manufacturer *"],
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    readOnly={key === "code"}
                    className="w-full h-9 border rounded-md px-3"
                  />
                </div>
              ))}

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="h-9 border rounded-md px-3"
              >
                <option value="">Select Category</option>
                <option value="Medicines">Medicines</option>
                <option value="Surgical Equipment">Surgical Equipment</option>
                <option value="Medical Consumables">Medical Consumables</option>
                <option value="Lab Equipment">Lab Equipment</option>
              </select>

              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="h-9 border rounded-md px-3"
              >
                <option value="Piece">Piece</option>
                <option value="Strip">Strip</option>
                <option value="Box">Box</option>
                <option value="Bottle">Bottle</option>
              </select>

              <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
                className="h-9 border rounded-md px-3"
              />
            </div>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-md px-3 py-2"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="border px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                disabled={loading}
                className="bg-teal-600 text-white px-4 py-2 rounded-md"
              >
                {loading ? "Updating..." : "Update Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductEditModal;
