"use client";

import React, { useEffect, useState } from "react";
import { apiRequest } from "@/app/authservice/api";
import ExpenseRow from "./ExpenseRow";

const ExpensesTable = ({ onEdit }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all expenses
  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("/expenses", { method: "GET" });
      if (response?.success) {
        setData(response.data || []);
      } else {
        throw new Error(response?.message || "Failed to fetch expenses.");
      }
    } catch (err) {
      console.error("Error fetching expenses:", err);
      setError(err?.message || "Something went wrong while fetching expenses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-6 text-gray-500">Loading expenses...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 text-red-600">{error}</div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center p-6 text-gray-500">No expenses found.</div>
    );
  }

  return (
    <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-0 overflow-x-auto">
      <table className="w-full text-sm caption-bottom">
        <thead className="bg-slate-50">
          <tr className="border-b border-gray-300 text-gray-500">
            <th className="h-10 px-2 text-left font-semibold">Date</th>
            <th className="h-10 px-2 text-left font-semibold">Category</th>
            <th className="h-10 px-2 text-left font-semibold">Description</th>
            <th className="h-10 px-2 text-left font-semibold">Vendor</th>
            <th className="h-10 px-2 text-left font-semibold">Payment</th>
            <th className="h-10 px-2 text-left font-semibold">Amount</th>
            <th className="h-10 px-2 text-left font-semibold">Payment Status</th>            
          </tr>
        </thead>
        <tbody>
          {data.map((expense) => (
            <ExpenseRow key={expense._id} expense={expense} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
