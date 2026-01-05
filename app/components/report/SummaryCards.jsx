"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "@/app/authservice/api";

const SummaryCards = () => {
  const [cards, setCards] = useState([
    { title: "Total Revenue", value: "Rs.0.00", bg: "bg-gradient-to-br from-emerald-500 to-emerald-600" },
    { title: "Total Expenses", value: "Rs.0.00", bg: "bg-gradient-to-br from-red-500 to-red-600" },
    { title: "Net Profit", value: "Rs.0.00", bg: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { title: "Profit Margin", value: "0%", bg: "bg-gradient-to-br from-purple-500 to-purple-600" },
  ]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        // ------------------- SALES -------------------
        const salesRes = await apiRequest("/sales");
        const salesData = Array.isArray(salesRes?.data)
          ? salesRes.data
          : Array.isArray(salesRes?.data?.data)
          ? salesRes.data.data
          : [];
        const totalSalesProfit = salesData.reduce((sum, sale) => sum + Number(sale.profit || 0), 0);

        // ------------------- APPOINTMENTS -------------------
        const apptRes = await apiRequest("/appointments");
        const apptData = Array.isArray(apptRes?.data)
          ? apptRes.data
          : Array.isArray(apptRes?.data?.data)
          ? apptRes.data.data
          : [];
        const totalApptFee = apptData.reduce((sum, appt) => sum + Number(appt.paidfee || 0), 0);

        // ------------------- TESTS -------------------
        const testsRes = await apiRequest("/tests");
        const testsData = Array.isArray(testsRes?.data)
          ? testsRes.data
          : Array.isArray(testsRes?.data?.data)
          ? testsRes.data.data
          : [];
        const totalTestFee = testsData.reduce((sum, test) => sum + Number(test.totalfee || 0), 0);

        // ------------------- TOTAL REVENUE -------------------
        const totalRevenue = totalSalesProfit + totalApptFee + totalTestFee;

        // ------------------- EXPENSES -------------------
        const expensesRes = await apiRequest("/expenses");
        const expensesData = Array.isArray(expensesRes?.data)
          ? expensesRes.data
          : Array.isArray(expensesRes?.data?.data)
          ? expensesRes.data.data
          : [];
        // ✅ Calculate total expenses using proper field name
        const totalExpenses = expensesData.reduce((sum, exp) => sum + Number(exp.totalamount || 0), 0);

        // ------------------- NET PROFIT & PROFIT MARGIN -------------------
        const netProfit = totalRevenue - totalExpenses;
        const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;

        // ------------------- UPDATE CARDS -------------------
        setCards([
          { title: "Total Revenue", value: `Rs.${totalRevenue.toFixed(2)}`, bg: "bg-gradient-to-br from-emerald-500 to-emerald-600" },
          { title: "Total Expenses", value: `Rs.${totalExpenses.toFixed(2)}`, bg: "bg-gradient-to-br from-red-500 to-red-600" },
          { title: "Net Profit", value: `Rs.${netProfit.toFixed(2)}`, bg: "bg-gradient-to-br from-blue-500 to-blue-600" },
          { title: "Profit Margin", value: `${profitMargin.toFixed(2)}%`, bg: "bg-gradient-to-br from-purple-500 to-purple-600" },
        ]);

        // 🔹 Debug logs
        console.log("Sales Profit:", totalSalesProfit);
        console.log("Appointment Paid Fee:", totalApptFee);
        console.log("Test Total Fee:", totalTestFee);
        console.log("Total Expenses:", totalExpenses);
        console.log("Net Profit:", netProfit);
        console.log("Profit Margin:", profitMargin.toFixed(2) + "%");

      } catch (error) {
        console.error("Failed to fetch summary data:", error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.title} className={`rounded-xl border-0 shadow-lg text-white ${card.bg}`}>
          <div className="p-6">
            <p className="text-sm mb-1">{card.title}</p>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
