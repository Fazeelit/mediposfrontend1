"use client";

import { useState, useEffect } from "react";
import { apiRequest } from "@/app/authservice/api";

import Header from "../../components/appointments/Header";
import AppointmentList from "../../components/appointments/AppointmentList";
import AppointmentModal from "../../components/appointments/AppointmentModel";
import AppointmentUpdateModal from "../../components/appointments/AppointmentUpdateModel"; // fixed typo

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH ALL APPOINTMENTS ---------------- */
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/appointments", { method: "GET" });

      console.log("Fetched appointments:", res);

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
      const res = await apiRequest("/appointments/createAppointment", {
        method: "POST",
        data: newAppointment, // use data for apiRequest
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
      const res = await apiRequest(`/appointments/updateAppointment/${updatedAppointment._id}`, {
        method: "PUT",
        data: updatedAppointment, // use data
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
    <main className="flex flex-col gap-4 p-4">
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

      {/* Modal */}
      {isModalOpen && (
        <>
          {!editingAppointment ? (
            <AppointmentModal
              onClose={() => setIsModalOpen(false)}
              onCreate={handleCreate}
            />
          ) : (
            <AppointmentUpdateModal
              onClose={() => setIsModalOpen(false)}
              onUpdate={handleUpdate}
              appointment={editingAppointment}
            />
          )}
        </>
      )}
    </main>
  );
};

export default AppointmentsPage;
