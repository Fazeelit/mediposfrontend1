"use client";

import React, { useState, useEffect } from "react";
import DoctorCard from "../doctor/DoctorCard";
import DoctorEditModel from "../../components/doctor/DoctorEditModel";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all doctors
  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("/doctors/", { method: "GET" });
      setDoctors(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
      toast.error("Failed to fetch doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <main className="p-6">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Doctors</h1>
            <p className="text-slate-600 mt-1">Manage medical staff and consultants</p>
          </div>
          <button
            onClick={() => {
              setEditingDoctorId(null); // New doctor
              setIsModalOpen(true);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg hover:from-teal-600 hover:to-teal-700"
          >
            Add Doctor
          </button>
        </div>

        {loading ? (
          <p className="text-center text-slate-500">Loading doctors...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor._id}
                doctor={doctor}
                onEdit={() => {
                  setEditingDoctorId(doctor._id);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Doctor Edit/Add Modal */}
      {isModalOpen && (
        <DoctorEditModel
          doctorId={editingDoctorId} // Modal fetches doctor internally
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedDoctor) => {
            if (editingDoctorId) {
              // Update existing doctor
              setDoctors((prev) =>
                prev.map((d) => (d._id === updatedDoctor._id ? updatedDoctor : d))
              );
            } else {
              // Add new doctor
              setDoctors((prev) => [...prev, updatedDoctor]);
            }
          }}
        />
      )}
    </main>
  );
};

export default DoctorsPage;
