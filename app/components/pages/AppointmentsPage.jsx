"use client";

import { useState, useEffect } from "react";
import { apiRequest } from "@/app/authservice/api";

import Header from "../../components/appointments/Header";
import Calendar from "../../components/appointments/Calender";
import AppointmentList from "../../components/appointments/AppointmentList";
import AppointmentModal from "../../components/appointments/AppointmentModel";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH ALL APPOINTMENTS ---------------- */
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/appointments", { method: "GET" });

      console.log("Fetched appointments:", res); // 🔍 Debug API response

      // Adjust depending on how apiRequest returns data
      const data = res?.data?.data || res?.data || [];
      setAppointments(data);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  /* ---------------- CREATE APPOINTMENT ---------------- */
  const handleCreate = async (newAppointment) => {
    try {
      const res = await apiRequest("/appointments", {
        method: "POST",
        body: newAppointment,
      });

      const created = res?.data || res;
      setAppointments((prev) => [...prev, created]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to create appointment:", error);
    }
  };

  /* ---------------- UPDATE APPOINTMENT ---------------- */
  const handleUpdate = async (updatedAppointment) => {
    try {
      const res = await apiRequest(`/appointments/${updatedAppointment._id}`, {
        method: "PUT",
        body: updatedAppointment,
      });

      const updated = res?.data || res;
      setAppointments((prev) =>
        prev.map((appt) => (appt._id === updated._id ? updated : appt))
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to update appointment:", error);
    }
  };

  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      <div className="space-y-6 w-full">
        {/* Header */}
        <Header
          title="Appointments"
          description="Manage patient appointments and schedules"
          onNew={() => {
            setEditingAppointment(null);
            setIsModalOpen(true);
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            events={appointments.map((a) => new Date(a.date))}
          />

          {/* Appointment List */}
          <AppointmentList
            loading={loading}
            date="All Appointments"
            appointments={appointments}
            onEdit={(appt) => {
              setEditingAppointment(appt);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AppointmentModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          appointment={editingAppointment}
        />
      )}
    </main>
  );
};

export default AppointmentsPage;
