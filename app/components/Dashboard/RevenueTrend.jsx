"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
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

const RevenueTrend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const [salesRes, apptRes, testsRes] = await Promise.all([
          apiRequest("/sales"),
          apiRequest("/appointments"),
          apiRequest("/tests"),
        ]);

        const sales = getArray(salesRes);
        const appointments = getArray(apptRes);
        const tests = getArray(testsRes);

        // Get last 7 days
        const today = new Date();
        const last7Days = Array.from({ length: 7 }).map((_, i) => {
          const d = new Date();
          d.setDate(today.getDate() - (6 - i)); // oldest first
          d.setHours(0, 0, 0, 0);
          return d;
        });

        const revenueData = last7Days.map((day) => {
          const dayStr = day.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
          });

          // Calculate revenue for the day
          const dayRevenue =
            sales
              .filter(
                (s) =>
                  new Date(s.createdAt).toDateString() === day.toDateString()
              )
              .reduce((sum, s) => sum + Number(s.profit || 0), 0) +
            appointments
              .filter(
                (a) =>
                  new Date(a.date).toDateString() === day.toDateString()
              )
              .reduce((sum, a) => sum + Number(a.paidfee || 0), 0) +
            tests
              .filter(
                (t) =>
                  new Date(t.createdAt).toDateString() === day.toDateString()
              )
              .reduce((sum, t) => sum + Number(t.totalfee || 0), 0);

          return { date: dayStr, revenue: dayRevenue };
        });

        setData(revenueData);
      } catch (error) {
        console.error("RevenueTrend error:", error);
      }
    };

    fetchRevenue();
  }, []);

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-6">
      <div className="tracking-tight text-lg font-semibold text-slate-900 mb-4">
        Revenue Trend (Last 7 Days)
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="date" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#14B8A6"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueTrend;
