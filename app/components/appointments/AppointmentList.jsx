"use client";

import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Calendar, Clock, Stethoscope, Check, X } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

const AppointmentList = ({ date, appointments = [], onEdit }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [localAppointments, setLocalAppointments] = useState([]);

  useEffect(() => {
    setLocalAppointments(appointments);
  }, [appointments]);

  const filteredAppointments = localAppointments.filter(
    (appt) => statusFilter === "All" || appt.status === statusFilter
  );

  // Update appointment status locally
  const updateStatus = (id, newStatus) => {
    setLocalAppointments((prev) =>
      prev.map((appt) =>
        appt._id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  // DELETE APPOINTMENT WITH TOAST
  const deleteAppointment = async (id) => {
    try {
      await apiRequest(`/appointments/deleteAppointment/${id}`, {
        method: "DELETE",
      });

      setLocalAppointments((prev) =>
        prev.filter((appt) => appt._id !== id)
      );

      toast.success("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete appointment:", error);

      toast.error(
        error?.response?.data?.message || "Failed to delete appointment"
      );
    }
  };

  // Badge colors
  const getBadgeClasses = (status) => {
    switch (status) {
      case "Scheduled":
        return "bg-purple-100 text-purple-800 border border-purple-200";
      case "Confirmed":
        return "bg-teal-100 text-teal-800 border border-teal-200";
      case "Completed":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border border-red-200";
      default:
        return "bg-teal-100 text-teal-800 border border-teal-200";
    }
  };

  return (
    <div className="rounded-2xl shadow-lg bg-white/90 backdrop-blur border border-slate-200 lg:col-span-2">
      {/* Header */}
      <div className="flex flex-col space-y-1.5 p-6 border-b border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="p-3 font-semibold tracking-tight text-xl">
            {date}
            <span className="ml-2 text-sm font-normal text-slate-500">
              ({appointments.length} appointments)
            </span>
          </div>

          <div className="px-5 flex gap-2 flex-wrap">
            {["All", "Scheduled", "Confirmed", "Completed"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`inline-flex items-center justify-center h-9 px-4 text-sm rounded-md font-medium ${
                  statusFilter === status
                    ? "bg-teal-600 text-white shadow"
                    : "border border-gray-200 text-gray-600 bg-white hover:bg-slate-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Appointments */}
      <div className="p-4">
        {localAppointments.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <Calendar className="w-10 h-10 mx-auto mb-3 text-slate-300" />
            <p className="text-lg font-medium">No appointments</p>
            <p className="text-sm">Schedule a new appointment to get started</p>
          </div>
        ) : (
          <div className="space-y-5 max-h-[500px] overflow-y-auto">
            {filteredAppointments.map((appt) => (
              <div
                key={appt._id}
                className="p-6 bg-white rounded-2xl shadow-lg border border-slate-200"
                onClick={() => onEdit?.(appt)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="-mt-5 h-12 w-12 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      {appt.patient?.charAt(0)}
                    </div>

                    <div>
                      <p className="text-lg font-semibold">{appt.patient}</p>
                      <p className="text-sm text-slate-600 flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1">
                          <Stethoscope className="w-4 h-4 text-teal-600" />
                          {appt.doctor}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-500" />
                          {appt.time}
                        </span>
                      </p>
                      <p className="text-sm text-slate-700 mt-1">
                        {appt.reason}
                      </p>
                    </div>
                  </div>

                  <span
                    onClick={(e) => e.stopPropagation()}
                    className={`px-4 py-0.5 text-xs rounded-full shadow ${getBadgeClasses(
                      appt.status
                    )}`}
                  >
                    {appt.status}
                  </span>
                </div>

                <div className="my-4 border-t border-slate-200"></div>

                <div
                  className="mt-6 flex items-center gap-2 flex-wrap"
                  onClick={(e) => e.stopPropagation()}
                >
                  {appt.status === "Scheduled" && (
                    <button
                      onClick={() =>
                        updateStatus(appt._id, "Confirmed")
                      }
                      className="flex-1 border border-green-600 text-green-700 rounded-md text-xs py-1"
                    >
                      <Check className="w-4 h-4 inline" /> Confirm
                    </button>
                  )}

                  {(appt.status === "Scheduled" ||
                    appt.status === "Confirmed") && (
                    <button
                      onClick={() =>
                        updateStatus(appt._id, "Completed")
                      }
                      className="flex-1 border border-green-600 text-green-700 rounded-md text-xs py-1"
                    >
                      <Check className="w-4 h-4 inline" /> Complete
                    </button>
                  )}

                  {appt.status !== "Cancelled" && (
                    <button
                      onClick={() =>
                        updateStatus(appt._id, "Cancelled")
                      }
                      className="border border-red-500 text-red-600 rounded-md p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  {/* Delete button */}
                  <button
                    onClick={() => deleteAppointment(appt._id)}
                    className="p-1 rounded-md border border-gray-400 text-teal-600 hover:bg-gray-100 text-xs flex items-center gap-1"
                  >
                    <FaTrash className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
