"use client";

import React, { useEffect, useState } from "react";
import {
  DollarSign,
  Calendar,
  TriangleAlert,
  TrendingUp,
  Package,
  TestTube,
  Receipt,
  Activity,
} from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

/**
 * Normalize API response
 */
const getArray = (res) =>
  Array.isArray(res?.data)
    ? res.data
    : Array.isArray(res?.data?.data)
    ? res.data.data
    : [];

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const last30Days = new Date();
        last30Days.setDate(today.getDate() - 30);

        // ---------- FETCH ALL DATA ----------
        const [
          salesRes,
          apptRes,
          testsRes,
          expenseRes,
          productRes,
          purchaseRes,
        ] = await Promise.all([
          apiRequest("/sales"),
          apiRequest("/appointments"),
          apiRequest("/tests"),
          apiRequest("/expenses"),
          apiRequest("/products"),
          apiRequest("/purchases"),
        ]);

        const sales = getArray(salesRes);
        const appointments = getArray(apptRes);
        const tests = getArray(testsRes);
        const expenses = getArray(expenseRes);
        const products = getArray(productRes);
        const purchases = getArray(purchaseRes);

        // ---------- Merge products by name and calculate total stock ----------
        const mergedProductsMap = new Map();
        products.forEach((p) => {
          const key = p.name.trim().toLowerCase();
          const stock = Number(p.stock) || 0;

          if (mergedProductsMap.has(key)) {
            const existing = mergedProductsMap.get(key);
            mergedProductsMap.set(key, {
              ...existing,
              stock: existing.stock + stock,
            });
          } else {
            mergedProductsMap.set(key, { ...p, stock });
          }
        });

        const mergedProducts = Array.from(mergedProductsMap.values());

        // ---------- TODAY ----------
        const todaysAppointments = appointments.filter(
          (a) => new Date(a.date).toDateString() === today.toDateString()
        );

        const todaysRevenue =
          sales
            .filter((s) => new Date(s.createdAt) >= today)
            .reduce((sum, s) => sum + Number(s.profit || 0), 0) +
          todaysAppointments.reduce(
            (sum, a) => sum + Number(a.paidfee || 0),
            0
          ) +
          tests
            .filter((t) => new Date(t.createdAt) >= today)
            .reduce((sum, t) => sum + Number(t.totalfee || 0), 0);

        // ---------- MONTHLY ----------
        const monthlySalesProfit = sales
          .filter((s) => new Date(s.createdAt) >= last30Days)
          .reduce((sum, s) => sum + Number(s.profit || 0), 0);

        const monthlyPaidSales = sales
          .filter((s) => new Date(s.createdAt) >= last30Days)
          .reduce((sum, s) => sum + Number(s.paidAmount || 0), 0);

        const monthlyAppointments = appointments
          .filter((a) => new Date(a.date) >= last30Days)
          .reduce((sum, a) => sum + Number(a.paidfee || 0), 0);

        const monthlyTests = tests
          .filter((t) => new Date(t.createdAt) >= last30Days)
          .reduce((sum, t) => sum + Number(t.totalfee || 0), 0);

        // ---------- INVESTMENT CALCULATIONS ----------
        const totalExpenses = expenses.reduce(
          (sum, e) => sum + Number(e.amount || 0),
          0
        );

        // ---------- EXPENSE CALCULATIONS ----------
        const totalInvestment = expenses.reduce(
          (sum, e) => sum + Number(e.investment || 0),
          0
        );

        const pendingPayments = expenses
          .filter((e) => e.paymentStatus === "Pending")
          .reduce((sum, e) => sum + Number(e.amount || 0), 0);

        const completedPayments = expenses
          .filter((e) => e.paymentStatus === "Completed")
          .reduce((sum, e) => sum + Number(e.amount || 0), 0);

        const monthlyProfit =
          monthlySalesProfit + monthlyAppointments + monthlyTests - totalExpenses + totalInvestment;

        // ---------- OTHER METRICS ----------
        const lowStockItems = mergedProducts.filter((p) => p.stock <= 10).length;

        const pendingTests = tests.filter(
          (t) => t.status !== "Completed"
        ).length;

        const totalProductPurchase = purchases.reduce(
          (sum, p) => sum + Number(p.totalAmount || 0),
          0
        );

        // ---------- SET DASHBOARD CARDS ----------
        setCards([
          {
            title: "Today's Revenue",
            value: `Rs.${todaysRevenue.toFixed(2)}`,
            subtitle: `${todaysAppointments.length} transactions`,
            icon: <DollarSign className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
          },
          {
            title: "Appointments Today",
            value: todaysAppointments.length,
            subtitle: `${pendingTests} pending`,
            icon: <Calendar className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
          },
          {
            title: "Low Stock Items",
            value: lowStockItems,
            subtitle: "Stock < 10",
            icon: <TriangleAlert className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
          },
          {
            title: "Monthly Profit",
            value: `Rs.${monthlyProfit.toFixed(2)}`,
            subtitle: "Revenue - Expenses",
            icon: <TrendingUp className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
          },
          {
            title: "Total Product Purchase",
            value: `Rs.${totalProductPurchase.toFixed(2)}`,
            subtitle: "All purchases",
            icon: <Package className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
          },
          {
            title: "Pending Tests",
            value: pendingTests,
            subtitle: `Total: ${tests.length}`,
            icon: <TestTube className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
          },
          {
            title: "Month Sales",
            value: `Rs.${monthlyPaidSales.toFixed(2)}`,
            subtitle: "Paid Amount",
            icon: <Receipt className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
          },
          {
            title: "Total Expenses",
            value: `Rs.${totalExpenses.toFixed(2)}`,
            subtitle: `Pending: Rs.${pendingPayments.toFixed(
              2
            )} | Completed: Rs.${completedPayments.toFixed(2)}`,
            icon: <Activity className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-slate-500 to-slate-700",
          },
        ]);
      } catch (error) {
        console.error("Dashboard cards error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl shadow bg-white/80 backdrop-blur hover:shadow-lg transition-all"
        >
          <div className="p-6 flex justify-between">
            <div>
              <p className="text-sm text-slate-600">{card.title}</p>
              <h3 className="text-lg font-bold text-slate-900">{card.value}</h3>
              <p className="text-xs text-slate-500">{card.subtitle}</p>
            </div>
            <div
              className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
