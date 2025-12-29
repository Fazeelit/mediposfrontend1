"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const PartialPaymentModal = ({ onClose, onUpdate }) => {
  const [purchases, setPurchases] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [totalAmount, setTotalAmount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch all purchases and suppliers
  useEffect(() => {
    const fetchAllPurchases = async () => {
      try {
        const res = await apiRequest("/purchases", { method: "GET" });
        const allPurchases = res?.data || [];
        setPurchases(allPurchases);
        setSuppliers([...new Set(allPurchases.map((p) => p.supplier))]);
      } catch (err) {
        console.error(err);
        setErrorMessage("Failed to fetch purchases");
        setShowError(true);
      }
    };
    fetchAllPurchases();
  }, []);

  // Handle supplier selection
  const handleSupplierChange = (supplier) => {
    setSelectedSupplier(supplier);
    setPaidAmount(""); // clear paid amount
    setPaymentStatus("Pending");

    // Sum of balances for the selected supplier
    const supplierPurchases = purchases.filter((p) => p.supplier === supplier);
    const total = supplierPurchases.reduce(
      (sum, p) => sum + ((p.totalAmount || 0) - (p.paidAmount || 0)),
      0
    );
    setTotalAmount(total);
  };

  // Automatically update payment status based on paidAmount
  useEffect(() => {
    const numericPaid = Number(paidAmount) || 0;

    if (numericPaid === 0) setPaymentStatus("Pending");
    else if (numericPaid < totalAmount) setPaymentStatus("Partial");
    else setPaymentStatus("Paid");
  }, [paidAmount, totalAmount]);

  const handleSubmit = async () => {
    if (!selectedSupplier) return;

    try {
      await apiRequest(`/purchases/createPurchase/${selectedSupplier}`, {
        method: "POST",
        data: {
          supplier: selectedSupplier,
          paidAmount: Number(paidAmount) || 0,
          paymentStatus,
        },
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onUpdate();
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
      setErrorMessage(err?.response?.data?.message || "Failed to update payment");
      setShowError(true);
    }
  };

  return (
    <>
      {/* Success */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <h2 className="font-bold text-green-700 text-lg">Success</h2>
            <p>Partial payment updated successfully</p>
          </div>
        </div>
      )}

      {/* Error */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <h2 className="font-bold text-red-700 text-lg">Error</h2>
            <p>{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Partial Payment</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Supplier Selection */}
            <div>
              <label className="block text-sm font-medium">Select Supplier</label>
              <select
                value={selectedSupplier}
                onChange={(e) => handleSupplierChange(e.target.value)}
                className="w-full h-9 px-3 border rounded-md text-sm"
              >
                <option value="">Select Supplier</option>
                {suppliers.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Details */}
            {selectedSupplier && (
              <>
                <div>
                  <label className="block text-sm font-medium">Total Amount</label>
                  <input
                    type="number"
                    value={totalAmount}
                    readOnly
                    className="w-full h-9 px-3 border rounded-md bg-gray-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Paid Amount</label>
                  <input
                    type="number"
                    value={paidAmount}
                    onChange={(e) => setPaidAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full h-9 px-3 border rounded-md text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Payment Status</label>
                  <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    className="w-full h-9 px-3 border rounded-md text-sm"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Partial">Partial</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedSupplier}
              className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 disabled:bg-gray-300"
            >
              Update Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartialPaymentModal;
