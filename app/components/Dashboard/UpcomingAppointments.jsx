"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch upcoming appointments from API
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/appointments");
      if (res?.success && Array.isArray(res.data)) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter only upcoming appointments
        const upcoming = res.data
          .filter((appt) => new Date(appt.date) >= today)
          .sort((a, b) => new Date(a.date) - new Date(b.date)); // sort by date ascending

        setAppointments(upcoming);
      } else {
        setAppointments([]);
      }
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
      toast.error("Failed to fetch upcoming appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="tracking-tight text-lg font-semibold text-slate-900 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-teal-600" />
          Upcoming Appointments
        </div>
      </div>

      <div className="p-6 pt-0">
        {loading ? (
          <div className="text-center py-6 text-slate-500">Loading...</div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-6 text-slate-500">
            No upcoming appointments
          </div>
        ) : (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {appointments.map((appt, index) => (
              <div
                key={appt._id || index}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div>
                  <p className="font-medium text-slate-900">{appt.patient}</p>
                  <p className="text-sm text-slate-600">{appt.doctor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">{appt.time}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(appt.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingAppointments;
