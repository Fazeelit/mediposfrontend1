"use client";

import React from "react";
import { DollarSign, Receipt, TrendingUp } from "lucide-react";

const SalesStates = ({ stats }) => {
  // Default fallback
  const displayStats = stats || {
    totalRevenue: 0,
    totalProfit: 0,
    totalSales: 0,
    avgTransaction: 0,
  };

  const items = [
    {
      label: "Total Revenue",
      value: `Rs ${displayStats.totalRevenue.toFixed(2)}`,
      color: "emerald",
      icon: DollarSign,
    },
    {
      label: "Transactions",
      value: displayStats.totalSales,
      color: "blue",
      icon: Receipt,
    },
    {
      label: "Avg Transaction",
      value: `Rs ${displayStats.avgTransaction.toFixed(2)}`,
      color: "purple",
      icon: TrendingUp,
    },
    {
      label: "Total Profit",
      value: `Rs ${displayStats.totalProfit.toFixed(2)}`,
      color: "teal",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, i) => {
        const Icon = item.icon;

        // Tailwind does not support dynamic class names in template strings
        const textColor = `text-${item.color}-600`;
        const bgFrom = `from-${item.color}-500`;
        const bgTo = `to-${item.color}-600`;

        return (
          <div
            key={i}
            className="rounded-xl shadow-lg bg-white/80 backdrop-blur p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-slate-600">{item.label}</p>
              <p className={`text-2xl font-bold mt-1 ${textColor}`}>
                {item.value}
              </p>
            </div>

            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bgFrom} ${bgTo} flex items-center justify-center`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SalesStates;
