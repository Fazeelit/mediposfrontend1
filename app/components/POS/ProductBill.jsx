"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/app/authservice/api";

export default function PrintBillPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, success: false, message: "" });

  useEffect(() => {
    setMounted(true);
    const storedCart = localStorage.getItem("printCart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  if (!mounted) return null;

  if (!cart || cart.length === 0)
    return (
      <div className="p-4 bg-white rounded shadow text-center text-gray-500">
        No items to print.
      </div>
    );

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal - discount;

  const handleBack = () => router.back();

  const handlePrintAndCreateSale = async () => {
    try {
      setLoading(true);

      const saleData = {
        products: cart.map((item) => ({
          productId: item._id || item.id,
          name: item.name,
          quantity: item.qty,
          cost: item.cost,
          price: item.price,
        })),
        totalAmount: total,
        discount,
        customerName: "Walk-in",
        paymentStatus: "Paid",
      };

      const res = await apiRequest("/sales/createSale", {
        method: "POST",
        data: saleData,
      });

      if (res?.success) {
        localStorage.removeItem("printCart");
        setModal({
          show: true,
          success: true,
          message: "Sale created successfully!",
        });

        // Delay print to let modal show briefly
        setTimeout(() => {
          window.print();
          router.push("/pos");
        }, 1000);
      } else {
        setModal({
          show: true,
          success: false,
          message: res?.message || "Failed to create sale",
        });
      }
    } catch (err) {
      console.error("Failed to create sale:", err);
      setModal({
        show: true,
        success: false,
        message: "Failed to create sale",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-teal-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-teal-700 flex items-center gap-2"
        >
          <FaArrowLeft />
          Back to Cart
        </button>
      </div>

      {/* Invoice Container */}
      <div className="invoice-container bg-white rounded-xl shadow-lg w-full mx-auto p-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-black">Invoice</h2>
          <p className="text-sm text-gray-500">{new Date().toLocaleString()}</p>
        </div>

        <table className="w-full text-left border-collapse border">
          <thead>
            <tr className="bg-teal-500 text-black">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id || item.id || idx} className="even:bg-gray-50">
                <td className="p-2 border">{idx + 1}</td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.qty}</td>
                <td className="p-2 border">Rs.{item.price.toFixed(2)}</td>
                <td className="p-2 border font-bold text-black">
                  Rs.{(item.price * item.qty).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs.{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <span>Discount</span>
            <input
              type="number"
              min="0"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="border px-2 py-1 rounded w-24 text-right discount-input"
            />
          </div>

          <div className="flex justify-between font-bold text-black text-lg border-t pt-2 mt-2">
            <span>Total</span>
            <span>Rs.{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handlePrintAndCreateSale}
            disabled={loading}
            className="bg-teal-600 text-white px-6 py-2 rounded shadow hover:opacity-90 font-semibold"
          >
            {loading ? "Processing..." : "Print"}
          </button>
        </div>

        <div className="text-center mt-2 text-sm text-gray-500">
          Thank you for your purchase!
        </div>
      </div>

      {/* Success / Error Modal */}
      {modal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-80 text-center">
            <h3 className={`text-lg font-bold mb-2 ${modal.success ? "text-emerald-600" : "text-red-600"}`}>
              {modal.success ? "Success" : "Error"}
            </h3>
            <p className="mb-4">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="bg-teal-600 text-white px-4 py-2 rounded shadow hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Print CSS */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .invoice-container,
          .invoice-container * {
            visibility: visible;
          }
          .invoice-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }

          .discount-input {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            text-align: right;
          }
        }
      `}</style>
    </div>
  );
}
