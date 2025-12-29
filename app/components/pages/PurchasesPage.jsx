"use client";

import React, { useState, useEffect } from "react";
import { Plus, CheckCircle, AlertTriangle, Printer } from "lucide-react";
import PurchasesModal from "../../components/purchases/PurchasesModal";
import PartialPaymentModal from "../../components/purchases/PartialPaymentModal";
import { apiRequest } from "@/app/authservice/api";

const PurchasesPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openPartialModal, setOpenPartialModal] = useState(false);
  const [selectedPurchase, setSelectedPurchase] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------------- FETCH ---------------- */
  const fetchPurchases = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("/purchases", "GET");
      setPurchases(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch purchases:", error);
      setErrorMessage("Failed to fetch purchases");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  /* ---------------- FILTERS ---------------- */
  const supplierNames = [...new Set(purchases.map((p) => p.supplier))];

  const filteredPurchases = selectedSupplier
    ? purchases.filter((p) => p.supplier === selectedSupplier)
    : purchases;

  /* ---------------- GROUP BY SUPPLIER ---------------- */
  const groupBySupplier = (data) =>
    data.reduce((acc, item) => {
      if (!acc[item.supplier]) acc[item.supplier] = [];
      acc[item.supplier].push(item);
      return acc;
    }, {});

  /* ---------------- PARTIAL PAYMENT ---------------- */
  const handlePartialPayment = () => {
    const purchaseForPartial = purchases.find(
      (p) => p.paymentStatus === "Pending" || p.paymentStatus === "Partial"
    );

    if (!purchaseForPartial) {
      setErrorMessage("No purchase available for partial payment");
      setShowError(true);
      return;
    }

    setSelectedPurchase(purchaseForPartial);
    setOpenPartialModal(true);
  };

  /* ---------------- PRINT (SUPPLIER) ---------------- */
  const handlePrintReport = (supplier, items) => {
    const reportWindow = window.open("", "_blank");

    const total = items.reduce((s, p) => s + (p.totalAmount || 0), 0);
    const paid = items.reduce((s, p) => s + (p.paidAmount || 0), 0);

    reportWindow.document.write(`
      <html>
        <head>
          <title>${supplier} Purchase Report</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #000; padding: 8px; text-align: center; }
            th { background: #eee; }
            h2 { text-align: center; }
          </style>
        </head>
        <body>
          <h2>${supplier} Purchase Report</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Invoice</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${items
                .map(
                  (p, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td>${new Date(p.purchaseDate).toLocaleDateString()}</td>
                  <td>${p.invoiceNumber}</td>
                  <td>${p.products?.length || 0}</td>
                  <td>Rs.${p.totalAmount.toFixed(2)}</td>
                  <td>Rs.${p.paidAmount.toFixed(2)}</td>
                  <td>Rs.${(
                    p.totalAmount - p.paidAmount
                  ).toFixed(2)}</td>
                  <td>${p.purchaseStatus}</td>
                </tr>
              `
                )
                .join("")}
              <tr>
                <td colspan="4" style="text-align:right;font-weight:bold;">Total</td>
                <td>Rs.${total.toFixed(2)}</td>
                <td>Rs.${paid.toFixed(2)}</td>
                <td>Rs.${(total - paid).toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);

    reportWindow.document.close();
    reportWindow.print();
  };

  return (
    <main className="p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Purchases</h1>
          <p className="text-sm text-slate-600">Manage purchase orders</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center gap-1 h-8 px-3 text-sm text-white rounded-md bg-teal-600 hover:bg-teal-700"
          >
            <Plus size={16} /> New Purchase
          </button>

          <button
            onClick={handlePartialPayment}
            className="inline-flex items-center gap-1 h-8 px-3 text-sm text-white rounded-md bg-orange-600 hover:bg-orange-700"
          >
            <Plus size={16} /> Partial Payment
          </button>
        </div>
      </div>

      {/* Supplier Select + Purchase Print */}
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm font-medium">Select Supplier:</label>

        <select
          value={selectedSupplier}
          onChange={(e) => setSelectedSupplier(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="">All Suppliers</option>
          {supplierNames.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>

        <button
          disabled={!selectedSupplier}
          onClick={() =>
            handlePrintReport(
              selectedSupplier,
              purchases.filter((p) => p.supplier === selectedSupplier)
            )
          }
          className={`inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md text-white
            ${
              selectedSupplier
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          <Printer size={16} /> Purchase Print
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-center text-sm">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm bg-white">
            <thead className="bg-teal-600 text-white text-xs">
              <tr>
                <th>#</th>
                <th>Supplier</th>
                <th>Date</th>
                <th>Invoice</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(groupBySupplier(filteredPurchases)).map(
                ([supplier, items]) => {
                  const total = items.reduce(
                    (s, p) => s + (p.totalAmount || 0),
                    0
                  );
                  const paid = items.reduce(
                    (s, p) => s + (p.paidAmount || 0),
                    0
                  );

                  return (
                    <React.Fragment key={supplier}>
                      {items.map((p, i) => (
                        <tr key={p._id} className="border-b text-center">
                          <td>{i + 1}</td>
                          <td>{p.supplier}</td>
                          <td>
                            {p.purchaseDate
                              ? new Date(p.purchaseDate).toLocaleDateString()
                              : "-"}
                          </td>
                          <td>{p.invoiceNumber}</td>
                          <td>{p.products?.length || 0}</td>
                          <td>Rs.{p.totalAmount?.toFixed(2)}</td>
                          <td>Rs.{p.paidAmount?.toFixed(2)}</td>
                          <td>
                            Rs.
                            {(
                              (p.totalAmount || 0) -
                              (p.paidAmount || 0)
                            ).toFixed(2)}
                          </td>
                          <td>{p.purchaseStatus}</td>
                        </tr>
                      ))}

                      <tr className="bg-gray-100 font-semibold text-center">
                        <td colSpan="5" className="text-right">
                          {supplier} Total
                        </td>
                        <td>Rs.{total.toFixed(2)}</td>
                        <td>Rs.{paid.toFixed(2)}</td>
                        <td>Rs.{(total - paid).toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </React.Fragment>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modals */}
      {openModal && (
        <PurchasesModal
          onClose={() => {
            setOpenModal(false);
            fetchPurchases();
          }}
        />
      )}

      {openPartialModal && selectedPurchase && (
        <PartialPaymentModal
          purchase={selectedPurchase}
          onClose={() => setOpenPartialModal(false)}
          onUpdate={fetchPurchases}
        />
      )}

      {/* Alerts */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center">
            <AlertTriangle className="w-10 h-10 text-red-600 mx-auto mb-2" />
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center">
            <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
            <p>Success</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default PurchasesPage;
