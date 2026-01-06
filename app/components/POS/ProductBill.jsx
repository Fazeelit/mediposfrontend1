"use client";

import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/app/authservice/api";

export default function PrintBillPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, success: false, message: "" });

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("printCart");
    if (!stored) return;
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      setItems(parsed);
      setDiscount(0);
    } else {
      setItems(parsed.items || []);
      setDiscount(Number(parsed.discount || 0));
    }
  }, []);

  if (!mounted) return null;
  if (items.length === 0)
    return (
      <div className="p-4 bg-white rounded shadow text-center text-gray-500">
        No items to print.
      </div>
    );

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = Math.max(subtotal - discount, 0);
  const handleBack = () => router.back();

  /* =========================
     UPDATE STOCK AFTER SALE
     ========================= */
  const updateStockAfterSale = async () => {
    try {
      const res = await apiRequest("/products", { method: "GET" });
      const allProducts = res?.data || [];

      const productMap = new Map();
      allProducts.forEach((p) => {
        const key = p.name.trim().toLowerCase();
        if (productMap.has(key)) {
          const existing = productMap.get(key);
          productMap.set(key, {
            totalStock: existing.totalStock + Number(p.stock || 0),
            ids: [...existing.ids, p._id],
          });
        } else {
          productMap.set(key, {
            totalStock: Number(p.stock || 0),
            ids: [p._id],
          });
        }
      });

      for (const soldItem of items) {
        const key = soldItem.name.trim().toLowerCase();
        if (!productMap.has(key)) continue;

        let remainingQty = soldItem.qty;
        const productData = productMap.get(key);

        for (const id of productData.ids) {
          const product = allProducts.find((p) => p._id === id);
          if (!product) continue;

          const currentStock = Number(product.stock || 0);
          if (remainingQty <= 0) break;

          const deduction = Math.min(currentStock, remainingQty);
          const newStock = currentStock - deduction;

          await apiRequest(`/products/updateProduct/${id}`, {
            method: "PUT",
            data: { stock: newStock },
          });

          remainingQty -= deduction;
        }
      }

      console.log("Stock updated successfully!");
    } catch (err) {
      console.error("Failed to update stock:", err);
    }
  };

  /* =========================
     HANDLE PRINT & CREATE SALE
     ========================= */
  const handlePrintAndCreateSale = async () => {
    try {
      setLoading(true);

      const saleData = {
        products: items.map((item) => ({
          productId: item._id || item.id,
          name: item.name,
          quantity: item.qty,
          cost: item.cost,
          price: item.price,
        })),
        subtotal,
        discount,
        totalAmount: total,
        customerName: "Walk-in",
        paymentStatus: "Paid",
      };

      const res = await apiRequest("/sales/createSale", {
        method: "POST",
        data: saleData,
      });

      if (res?.success) {
        await updateStockAfterSale(); // Deduct stock
        localStorage.removeItem("printCart");

        setModal({ show: true, success: true, message: "Sale created successfully!" });

        setTimeout(() => {
          window.print();
          router.push("/pos");
        }, 1000);
      } else {
        setModal({ show: true, success: false, message: res?.message || "Failed to create sale" });
      }
    } catch (err) {
      console.error(err);
      setModal({ show: true, success: false, message: "Failed to create sale" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={handleBack}
        className="mb-4 bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <FaArrowLeft /> Back to Cart
      </button>

      <div className="invoice-container bg-white shadow p-4 mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-lg font-bold">Store Name</h2>
          <p className="text-xs">{new Date().toLocaleString()}</p>
          <hr className="my-2 border-t border-gray-400" />
        </div>

        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <th className="text-left">#</th>
              <th className="text-left">Unit</th>
              <th className="text-left">Item</th>              
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={item._id || item.id || idx}>
                <td>{idx + 1}</td>
                <td>{item.unit}</td>
                <td>{item.name || "-"}</td>
                <td className="text-right">{item.qty}</td>
                <td className="text-right">Rs.{item.price.toFixed(2)}</td>
                <td className="text-right font-bold">Rs.{(item.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="my-2 border-t border-gray-400" />

        <div className="text-xs space-y-1">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs.{subtotal.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-red-600 font-medium">
              <span>Discount</span>
              <span>Rs.{discount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between font-bold border-t pt-1">
            <span>Total</span>
            <span>Rs.{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center mt-2 text-xs">Thank you for shopping!</div>
      </div>

      <button
        onClick={handlePrintAndCreateSale}
        disabled={loading}
        className="mt-4 w-full bg-teal-600 text-white py-2 rounded"
      >
        {loading ? "Processing..." : "Print"}
      </button>

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
            top: 0;
            left: 0;
            width: 80mm;
            font-family: monospace;
            padding: 4mm;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 10pt;
          }
          td,
          th {
            padding: 2px 0;
          }
        }
      `}</style>
    </div>
  );
}
