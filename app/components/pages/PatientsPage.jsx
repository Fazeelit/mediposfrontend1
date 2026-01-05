"use client";

import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

import Header from "../../components/patients/Header";
import PatientCard from "../../components/patients/PatientCard";
import PatientSearch from "../../components/patients/PatientSearch";
import PatientTable from "../../components/patients/PatientTable";
import PatientCreateModal from "../../components/patients/PatientCreateModel";
import PatientUpdateModal from "../../components/patients/PatientUpdateModel";
import PatientDeleteModal from "../../components/patients/PatientDeleteModel";

const PatientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  /* =========================
     FETCH PATIENTS
     ========================= */
  const fetchPatients = async (query = "") => {
    try {
      const endpoint = query
        ? `/patients?search=${encodeURIComponent(query)}`
        : "/patients";

      const res = await apiRequest(endpoint, "GET");

      if (res?.success && Array.isArray(res.data)) {
        setPatients(res.data);
      } else {
        setPatients([]);
        toast.error(res?.message || "Failed to fetch patients");
      }
    } catch (error) {
      console.error("Failed to fetch patients", error);
      toast.error("Failed to load patients");
      setPatients([]);
    }
  };

  /* Initial load */
  useEffect(() => {
    fetchPatients();
  }, []);

  /* Debounced search */
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchPatients(searchTerm);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  /* =========================
     HANDLERS
     ========================= */
  const handleAddClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleEditClick = (patient) => {
    setSelectedPatient(patient);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteClick = (patient) => {
    setSelectedPatient(patient);
    setIsDeleteModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const closeCreateModal = () => setIsCreateModalOpen(false);
  const closeUpdateModal = () => {
    setSelectedPatient(null);
    setIsUpdateModalOpen(false);
  };
  const closeDeleteModal = () => {
    setSelectedPatient(null);
    setIsDeleteModalOpen(false);
  };

  const refreshPatients = () => fetchPatients(searchTerm);

  return (
    <main className="space-y-6">
      {/* Header */}
      <Header onAdd={handleAddClick} />

      {/* Stats Card */}
      <PatientCard
        title="Total Patients"
        count={patients.length}
        icon={<Users className="w-6 h-6 text-white" />}
      />

      {/* Search */}
      <PatientSearch value={searchTerm} onChange={handleSearchChange} />

      {/* Table */}
      <div className="flex-1 min-w-0">
        <PatientTable
          patients={patients}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      </div>

      {/* Create Modal */}
      {isCreateModalOpen && (
        <PatientCreateModal
          onClose={closeCreateModal}
          onCreated={() => {
            closeCreateModal();
            refreshPatients();
          }}
        />
      )}

      {/* Update Modal */}
      {isUpdateModalOpen && selectedPatient && (
        <PatientUpdateModal
          patient={selectedPatient}
          onClose={closeUpdateModal}
          onUpdated={refreshPatients}
        />
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && selectedPatient && (
        <PatientDeleteModal
          patient={selectedPatient}
          onClose={closeDeleteModal}
          onDeleted={refreshPatients}
        />
      )}
    </main>
  );
};

export default PatientsPage;
