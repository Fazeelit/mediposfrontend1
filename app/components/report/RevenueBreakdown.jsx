"use client";

import React, { useEffect, useState } from "react";
import { apiRequest } from "@/app/authservice/api";

const RevenueBreakdown = () => {
  const [revenueItems, setRevenueItems] = useState([
    { label: "Pharmacy Sales", value: "Rs.0.00", bg: "bg-teal-50", text: "text-teal-600" },
    { label: "Consultation Fees", value: "Rs.0.00", bg: "bg-blue-50", text: "text-blue-600" },
    { label: "Test Fees", value: "Rs.0.00", bg: "bg-purple-50", text: "text-purple-600" },
  ]);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        // 1. Pharmacy Sales
        const salesRes = await apiRequest("/sales");
        const salesData = Array.isArray(salesRes) ? salesRes : salesRes.data || [];
        const pharmacyTotal = salesData.reduce((acc, item) => acc + (item.paidAmount || 0), 0);

        // 2. Consultation Fees
        const appointmentsRes = await apiRequest("/appointments");
        const appointmentsData = Array.isArray(appointmentsRes) ? appointmentsRes : appointmentsRes.data || [];
        const consultationTotal = appointmentsData.reduce((acc, item) => acc + (item.paidfee || 0), 0);

        // 3. Test Fees
        const testsRes = await apiRequest("/tests");
        const testsData = Array.isArray(testsRes) ? testsRes : testsRes.data || [];
        const testTotal = testsData.reduce((acc, item) => acc + (item.totalfee || 0), 0);

        // Update state
        setRevenueItems([
          { label: "Pharmacy Sales", value: `Rs.${pharmacyTotal.toFixed(2)}`, bg: "bg-teal-50", text: "text-teal-600" },
          { label: "Consultation Fees", value: `Rs.${consultationTotal.toFixed(2)}`, bg: "bg-blue-50", text: "text-blue-600" },
          { label: "Test Fees", value: `Rs.${testTotal.toFixed(2)}`, bg: "bg-purple-50", text: "text-purple-600" },
        ]);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchRevenue();
  }, []);

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">Revenue Breakdown</div>
      </div>
      <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {revenueItems.map((item) => (
          <div key={item.label} className={`text-center p-4 ${item.bg} rounded-xl`}>
            <p className="text-sm text-slate-600 mb-1">{item.label}</p>
            <p className={`text-2xl font-bold ${item.text}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
