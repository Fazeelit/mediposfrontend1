"use client";

import React, { useEffect, useState } from "react";
import SalesRow from "./SalesRow";
import { apiRequest } from "@/app/authservice/api";

const SalesTable = ({ search = "", filter = "all" }) => {
  const [allSales, setAllSales] = useState([]);
  const todayStr = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  // Fetch all sales once
  useEffect(() => {
    const fetchSales = async () => {
      try {
        const res = await apiRequest("/sales", { method: "GET" });
        if (res?.success) {
          // Calculate profit for each sale
          const enriched = res.data.map((sale) => {
            let totalCost = 0;
            if (sale.products && sale.products.length > 0) {
              sale.products.forEach((p) => {
                totalCost += (p.cost || 0) * (p.quantity || 0);
              });
            }
            const profit = (sale.totalAmount || 0) - totalCost;
            return { ...sale, profit };
          });
          setAllSales(enriched);
        }
      } catch (err) {
        console.error("Failed to fetch sales:", err);
      }
    };

    fetchSales();
  }, []);

  // Filter sales by search and date
  const filteredSales = allSales.filter((sale) => {
    const matchSearch =
      (sale.invoiceNumber?.toString().toLowerCase().includes(search.toLowerCase()) || false) ||
      (sale.customerName?.toLowerCase().includes(search.toLowerCase()) || false);

    const saleDateStr = new Date(sale.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    const matchFilter = filter === "all" || (filter === "today" && saleDateStr === todayStr);

    return matchSearch && matchFilter;
  });

  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
      <table className="whitespace-nowrap w-full text-sm">
        <thead className="border-b border-gray-300 bg-slate-50">
          <tr>
            {[
              "Invoice",
              "Date & Time",
              "Customer",
              "Items",
              "Payment",
              "Amount",
              "Profit",
              "Status",
            ].map((h) => (
              <th key={h} className="p-2 text-left font-semibold text-slate-600">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredSales.length > 0 ? (
            filteredSales.map((sale) => <SalesRow key={sale._id} sale={sale} />)
          ) : (
            <tr>
              <td colSpan="8" className="p-6 text-center text-slate-500">
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
