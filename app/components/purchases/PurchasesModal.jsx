"use client";

import React, { useState, useMemo, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const PurchaseModal = ({ onClose }) => {
  const [supplier, setSupplier] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [items, setItems] = useState([]);
  const [purchaseStatus, setPurchaseStatus] = useState("Draft");
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [partialAmount, setPartialAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  // Fetch product list
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiRequest("/products/ProductName", { method: "GET" });
        const products = res?.data || res;
        if (!Array.isArray(products)) throw new Error("Invalid product response");
        setProductsList(products.map((p) => ({ id: p._id, name: p.name })));
      } catch (err) {
        console.error(err);
        setErrorModal({ show: true, message: "Failed to fetch product list" });
      }
    };
    fetchProducts();
  }, []);

  // Add new item row
  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        productId: "",
        name: "",
        quantity: 1,
        price: 0,
        manufacturer: "",
      },
    ]);
  };

  const handleRemoveItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id !== id
          ? it
          : {
              ...it,
              [field]: ["quantity", "price"].includes(field) ? Number(value || 0) : value,
            }
      )
    );
    setErrors((prev) => ({ ...prev, [`${id}-${field}`]: "" }));
  };

  const rowTotal = (it) => Number(it.quantity || 0) * Number(it.price || 0);
  const subtotal = useMemo(() => items.reduce((acc, it) => acc + rowTotal(it), 0), [items]);
  const totalAmount = subtotal + Number(taxAmount || 0);

  const balance = useMemo(() => {
    if (paymentStatus === "Paid") return 0;
    if (paymentStatus === "Partial") return Math.max(totalAmount - partialAmount, 0);
    return totalAmount;
  }, [paymentStatus, totalAmount, partialAmount]);

  const validateForm = () => {
    let temp = {};
    if (!supplier) temp.supplier = "Supplier is required";
    if (!purchaseDate) temp.purchaseDate = "Purchase date is required";
    if (!invoiceNumber) temp.invoiceNumber = "Invoice number is required";
    if (items.length === 0) temp.items = "Add at least one product";

    items.forEach((it) => {
      if (!it.productId) temp[`${it.id}-productId`] = "Product is required";
      if (!it.quantity || it.quantity <= 0)
        temp[`${it.id}-quantity`] = "Quantity must be greater than 0";
      if (!it.price || it.price < 0) temp[`${it.id}-price`] = "Price must be ≥ 0";
      if (!it.manufacturer) temp[`${it.id}-manufacturer`] = "Manufacturer is required";
    });

    if (paymentStatus === "Partial" && (partialAmount <= 0 || partialAmount > totalAmount)) {
      temp.partialAmount = "Partial amount must be >0 and < total";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const payload = {
        supplier,
        purchaseDate,
        invoiceNumber: Number(invoiceNumber),
        totalAmount,
        paidAmount:
          paymentStatus === "Paid"
            ? totalAmount
            : paymentStatus === "Partial"
            ? partialAmount
            : 0,
        paymentStatus,
        purchaseStatus,
        balance,
        taxAmount,
        products: items.map((it) => ({
          productId: it.productId,
          name: it.name,
          quantity: it.quantity,
          price: it.price,
          manufacturer: it.manufacturer,
        })),
      };

      const response = await apiRequest("/purchases/createPurchase", {
        method: "POST",
        data: payload,
      });

      if (response?.success !== false) {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
          onClose();
        }, 2000);
      } else {
        setErrorModal({ show: true, message: response?.message || "Failed to create purchase" });
      }
    } catch (err) {
      console.error(err);
      setErrorModal({
        show: true,
        message: err?.response?.data?.message || "Failed to create purchase",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SUCCESS MODAL */}
      {successModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-green-600 text-xl font-bold mb-2">Success</h3>
            <p className="mb-4">Purchase added successfully.</p>
            <button
              onClick={() => setSuccessModal(false)}
              className="px-4 py-2 bg-teal-600 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {errorModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-red-600 text-xl font-bold mb-2">Unsuccessful</h3>
            <p className="mb-4">{errorModal.message}</p>
            <button
              onClick={() => setErrorModal({ show: false, message: "" })}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">New Purchase</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Top Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Supplier *</label>
                <select
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm"
                >
                  <option value="">Select supplier</option>
                  <option value="Supplier A">Supplier A</option>
                  <option value="Supplier B">Supplier B</option>
                </select>
                {errors.supplier && <p className="text-xs text-red-600">{errors.supplier}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Purchase Date *</label>
                <input
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm"
                />
                {errors.purchaseDate && <p className="text-xs text-red-600">{errors.purchaseDate}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Invoice Number *</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm"
                  placeholder="Enter invoice #"
                />
                {errors.invoiceNumber && <p className="text-xs text-red-600">{errors.invoiceNumber}</p>}
              </div>
            </div>

            {/* Items Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Items</label>
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="flex items-center gap-1 border border-gray-200 h-8 px-3 rounded-md text-xs shadow-sm hover:bg-slate-100"
                >
                  <Plus className="w-4 h-4" /> Add Item
                </button>
              </div>
              <div className="flex gap-2 text-sm font-semibold text-gray-600 px-2">
                <div className="flex-1">Product Name</div>
                <div className="w-20 text-center">QTY</div>
                <div className="w-24 text-center">Price</div>
                <div className="w-24 text-center">Manufacturer</div>
                <div className="w-20 text-center">Total</div>
                <div className="w-9" />
              </div>
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg flex-wrap">
                  <select
                    value={it.productId}
                    onChange={(e) => {
                      const p = productsList.find((x) => x.id === e.target.value);
                      handleItemChange(it.id, "productId", p?.id || "");
                      handleItemChange(it.id, "name", p?.name || "");
                    }}
                    className="flex-1 h-9 rounded-md border border-gray-200 px-3 text-sm shadow-sm bg-white"
                  >
                    <option value="">Select product</option>
                    {productsList.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>

                  <input
                    type="number"
                    min="0"
                    value={it.quantity}
                    onChange={(e) => handleItemChange(it.id, "quantity", e.target.value)}
                    className="w-20 h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center"
                  />

                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={it.price}
                    onChange={(e) => handleItemChange(it.id, "price", e.target.value)}
                    className="w-24 h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center"
                  />

                  <input
                    type="text"
                    value={it.manufacturer}
                    onChange={(e) => handleItemChange(it.id, "manufacturer", e.target.value)}
                    className="w-24 h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center"
                  />

                  <p className="w-20 text-sm font-medium text-center">Rs. {rowTotal(it).toFixed(2)}</p>

                  <button
                    type="button"
                    onClick={() => handleRemoveItem(it.id)}
                    className="h-9 w-9 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Totals */}
            {items.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600 w-16">Tax</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={taxAmount}
                    onChange={(e) => setTaxAmount(Number(e.target.value || 0))}
                    className="h-9 w-36 rounded-md border border-gray-200 px-3 text-sm shadow-sm"
                  />
                  <div className="flex-1" />
                  <span className="font-medium">Rs. {taxAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-teal-600">Rs. {totalAmount.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Status & Payment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Purchase Status</label>
                <select
                  value={purchaseStatus}
                  onChange={(e) => setPurchaseStatus(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm shadow-sm"
                >
                  <option>Draft</option>
                  <option>Received</option>
                  <option>Completed</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Payment Status</label>
                <select
                  value={paymentStatus}
                  onChange={(e) => setPaymentStatus(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 text-sm shadow-sm"
                >
                  <option>Pending</option>
                  <option>Partial</option>
                  <option>Paid</option>
                </select>
              </div>
            </div>

            {/* Partial Amount */}
            {paymentStatus === "Partial" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Partial Amount</label>
                <input
                  type="number"
                  min="0"
                  max={totalAmount}
                  value={partialAmount}
                  onChange={(e) => setPartialAmount(Number(e.target.value))}
                  className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm"
                />
                {errors.partialAmount && <p className="text-xs text-red-600">{errors.partialAmount}</p>}
              </div>
            )}

            {/* Balance */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Balance</label>
              <input
                type="number"
                value={balance}
                readOnly
                className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm bg-gray-100"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="h-9 px-4 py-2 rounded-md border border-gray-200 shadow-sm hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="h-9 px-4 py-2 rounded-md shadow text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
              >
                {loading ? "Creating..." : "Create Purchase"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseModal;
