"use client";
import React, { useEffect, useState } from "react";
import { apiRequest } from "@/app/authservice/api";

const ExpenseCard = ({ title, icon, iconBg, textColor }) => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("/expenses", { method: "GET" });
      if (response?.success) {
        const expenses = response.data || [];
        let computedValue = 0;

        // Compute value based on card title
        switch (title.toLowerCase()) {
          case "total expenses":
            computedValue = expenses.reduce(
              (acc, exp) => acc + Number(exp.amount || 0),
              0
            );
            break;
          case "pending payments":
            computedValue = expenses
              .filter((exp) => exp.paymentStatus === "Pending")
              .reduce((acc, exp) => acc + Number(exp.amount || 0), 0);
            break;
          case "completed payments":
            computedValue = expenses
              .filter((exp) => exp.paymentStatus === "Completed")
              .reduce((acc, exp) => acc + Number(exp.amount || 0), 0);
            break;
          default:
            computedValue = expenses.length; // fallback: show total count
        }

        setValue(computedValue);
      } else {
        throw new Error(response?.message || "Failed to fetch expenses");
      }
    } catch (err) {
      console.error("ExpenseCard fetch error:", err);
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          {loading ? (
            <p className={`text-2xl font-bold mt-1 ${textColor}`}>...</p>
          ) : error ? (
            <p className="text-red-600 text-sm mt-1">{error}</p>
          ) : (
            <p className={`text-2xl font-bold mt-1 ${textColor}`}>
              {value.toLocaleString()}
            </p>
          )}
        </div>
        {icon && (
          <div
            className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;
