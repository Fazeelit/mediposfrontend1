"use client";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

const COLORS = {
  Scheduled: "#0EA5E9",
  Confirmed: "#14B8A6",
  Completed: "#10B981",
};

const AppointmentsStatus = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/appointments");

      if (!res?.success || !Array.isArray(res.data)) {
        throw new Error("Invalid response");
      }

      // Count statuses
      const counts = res.data.reduce(
        (acc, appt) => {
          acc[appt.status] = (acc[appt.status] || 0) + 1;
          return acc;
        },
        { Scheduled: 0, Confirmed: 0, Completed: 0 }
      );

      // Prepare chart data
      const chartData = Object.keys(counts).map((status) => ({
        name: status,
        value: counts[status],
        color: COLORS[status],
      }));

      setData(chartData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load appointment status");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-6">
      <div className="tracking-tight text-lg font-semibold text-slate-900 mb-4">
        Appointments Status
      </div>

      {loading ? (
        <div className="text-center text-slate-500 py-12">Loading...</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AppointmentsStatus;
