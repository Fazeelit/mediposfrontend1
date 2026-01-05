"use client";

import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Clock, Stethoscope, Check, Printer } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

const AppointmentList = ({ onEdit }) => {
  const [appointments, setAppointments] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch appointments from API
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/appointments");
      if (res?.success && Array.isArray(res.data)) {
        setAppointments(res.data);
      } else {
        setAppointments([]);
      }
    } catch (err) {
      console.error("Failed to fetch appointments:", err);
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Filter appointments based on status, search, and selected date
  const filteredAppointments = appointments.filter((appt) => {
    const matchesStatus = statusFilter === "All" || appt.status === statusFilter;
    const matchesSearch = appt.patient.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(appt.date).toDateString() === selectedDate.toDateString()
      : true;
    return matchesStatus && matchesSearch && matchesDate;
  });

  // Update appointment status locally
  const updateStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt._id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  // Delete appointment
  const deleteAppointment = async (id) => {
    try {
      await apiRequest(`/appointments/deleteAppointment/${id}`, {
        method: "DELETE",
      });
      setAppointments((prev) => prev.filter((appt) => appt._id !== id));
      toast.success("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete appointment:", error);
      toast.error(
        error?.response?.data?.message || "Failed to delete appointment"
      );
    }
  };

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

  // Get token numbers only for confirmed patients
  const confirmedAppointments = appointments
    .filter((a) => a.status === "Confirmed")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const getTokenNumber = (appt) => {
    return confirmedAppointments.findIndex((a) => a._id === appt._id) + 1;
  };

  // Print individual slip in Thermal Receipt style for confirmed patients
  const printSlip = (appt) => {
    if (appt.status !== "Confirmed") return;

    const tokenNo = getTokenNumber(appt);

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const content = `
      <html>
        <head>
          <title>Appointment Slip</title>
          <style>
            body {
              font-family: monospace;
              font-size: 12px;
              padding: 10px;
              width: 80mm;
            }
            h2 {
              text-align: center;
              margin: 5px 0;
              font-size: 14px;
            }
            p { margin: 2px 0; }
            .divider {
              border-top: 1px dashed #000;
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <h2>MediPOS Token Slip</h2>
          <div class="divider"></div>
          <p><strong>Token No:</strong> ${tokenNo}</p>
          <p><strong>Patient:</strong> ${appt.patient}</p>
          <p><strong>Doctor:</strong> ${appt.doctor}</p>
          <p><strong>Time:</strong> ${appt.time}</p>
          <p><strong>Fee Paid:</strong> ${appt.fee} Rs</p>
          <div class="divider"></div>
          <p style="text-align:center;">Thank you for visiting!</p>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  // Print Token List Report in Thermal Receipt style
  const printTokenList = () => {
    if (confirmedAppointments.length === 0) {
      toast.error("No confirmed patients for token list");
      return;
    }

    const grossFee = confirmedAppointments.reduce((sum, appt) => sum + Number(appt.fee), 0);

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    let content = `
      <html>
        <head>
          <title>Token List Report</title>
          <style>
            body { font-family: monospace; font-size: 12px; padding: 10px; width: 80mm; }
            h2 { text-align: center; margin: 5px 0; font-size: 14px; }
            .divider { border-top: 1px dashed #000; margin: 5px 0; }
            p { margin: 2px 0; }
          </style>
        </head>
        <body>
          <h2>Token List Report</h2>
          <div class="divider"></div>
    `;

    confirmedAppointments.forEach((appt, idx) => {
      content += `
        <p>Token ${idx + 1}: ${appt.patient}</p>
        <p>Doctor: ${appt.doctor}</p>
        <p>Time: ${appt.time}</p>
        <p>Fee: ${appt.fee} Rs</p>
        <div class="divider"></div>
      `;
    });

    content += `
      <p><strong>Gross Fee: ${grossFee} Rs</strong></p>
      <p style="text-align:center;">Thank you!</p>
      <script>
        window.onload = function() { window.print(); }
      </script>
      </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  return (
    <div className="rounded-2xl shadow-lg bg-white/90 backdrop-blur border border-slate-200 lg:col-span-2 flex flex-col lg:flex-row gap-4">
      {/* Left: Date Picker */}
      <div className="w-full lg:w-1/4 p-4 border-r border-slate-200">
        <label className="block mb-2 font-medium text-slate-700">Filter by Date:</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
          value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
          onChange={(e) =>
            setSelectedDate(e.target.value ? new Date(e.target.value) : null)
          }
        />
        {/* Clear Date Button */}
        <button
          onClick={() => setSelectedDate(null)}
          className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-500"
        >
          Clear Date
        </button>
      </div>

      {/* Right: Appointments Content */}
      <div className="flex-1 flex flex-col">
        {/* Header with Status Filter and Search */}
        <div className="flex flex-col space-y-3 p-6 border-b border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="p-3 font-semibold tracking-tight text-xl">
              Appointments
              <span className="ml-2 text-sm font-normal text-slate-500">
                ({appointments.length})
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

              {/* Token List Print Report only in Confirmed section */}
              {statusFilter === "Confirmed" && confirmedAppointments.length > 0 && (
                <button
                  onClick={printTokenList}
                  className="inline-flex items-center justify-center h-9 px-4 text-sm rounded-md font-medium bg-blue-600 text-white shadow"
                >
                  <Printer className="w-4 h-4 mr-1" /> Token List Print Report
                </button>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by patient name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 p-2"
            />
          </div>
        </div>

        {/* Appointments List */}
        <div className="p-4">
          {loading ? (
            <div className="text-center py-12 text-slate-500">Loading...</div>
          ) : filteredAppointments.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-lg font-medium">No appointments</p>
              <p className="text-sm">No appointments match the selected criteria.</p>
            </div>
          ) : (
            <div className="space-y-5 max-h-[500px] overflow-y-auto">
              {filteredAppointments.map((appt) => (
                <div
                  key={appt._id}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-slate-200 cursor-pointer"
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
                            {appt.doctor} ({appt.fee} Rs)
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-blue-500" />
                            {appt.time}
                          </span>
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

                  {/* Action Buttons */}
                  <div className="mt-6 flex items-center gap-2 flex-wrap">
                    {appt.status === "Scheduled" && (
                      <button
                        onClick={() => updateStatus(appt._id, "Confirmed")}
                        className="flex-1 border border-green-600 text-green-700 rounded-md text-xs py-1"
                      >
                        <Check className="w-4 h-4 inline" /> Confirm
                      </button>
                    )}

                    {(appt.status === "Scheduled" || appt.status === "Confirmed") && (
                      <button
                        onClick={() => updateStatus(appt._id, "Completed")}
                        className="flex-1 border border-green-600 text-green-700 rounded-md text-xs py-1"
                      >
                        <Check className="w-4 h-4 inline" /> Complete
                      </button>
                    )}

                    {/* Print Slip only for Confirmed */}
                    {appt.status === "Confirmed" && (
                      <button
                        onClick={() => printSlip(appt)}
                        className="flex-1 border border-blue-500 text-blue-600 rounded-md text-xs py-1 flex items-center justify-center gap-1"
                      >
                        <Printer className="w-4 h-4 inline" /> Print Token
                      </button>
                    )}

                    {/* Delete only for Scheduled */}
                    {appt.status === "Scheduled" && (
                      <button
                        onClick={() => deleteAppointment(appt._id)}
                        className="p-1 rounded-md border border-gray-400 text-teal-600 hover:bg-gray-100 text-xs flex items-center gap-1 ml-auto"
                      >
                        <FaTrash className="w-4 h-4" /> Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
