"use client";

import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

import Header from "../../components/suppliers/Header";
import SupplierCard from "../../components/suppliers/SupplierCard";
import SupplierSearch from "../../components/suppliers/SupplierSearch";
import SupplierTable from "../../components/suppliers/SupplierTable";
import SupplierCreateModal from "../../components/suppliers/SupplierCreateModel";
import SupplierUpdateModal from "../../components/suppliers/SupplierUpdateModel";
import SupplierDeleteModal from "../../components/suppliers/SupplierDeleteModel";

const SuppliersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  /* =========================
     FETCH Suppliers
     ========================= */
  const fetchSuppliers = async (query = "") => {
    try {
      const endpoint = query
        ? `/suppliers?search=${encodeURIComponent(query)}`
        : "/suppliers";

      const res = await apiRequest(endpoint, "GET");

      // Adjust depending on API response
      if (Array.isArray(res)) {
        setSuppliers(res);
      } else if (res?.success && Array.isArray(res.data)) {
        setSuppliers(res.data);
      } else {
        setSuppliers([]);
        toast.error(res?.message || "Failed to fetch suppliers");
      }
    } catch (error) {
      console.error("Failed to fetch suppliers", error);
      toast.error("Failed to load suppliers");
      setSuppliers([]);
    }
  };

  /* Initial load */
  useEffect(() => {
    fetchSuppliers();
  }, []);

  /* Debounced search */
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchSuppliers(searchTerm);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  /* =========================
     HANDLERS
     ========================= */
  const handleAddClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleEditClick = (supplier) => {
    setSelectedSupplier(supplier);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteClick = (supplier) => {
    setSelectedSupplier(supplier);
    setIsDeleteModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const closeCreateModal = () => setIsCreateModalOpen(false);
  const closeUpdateModal = () => {
    setSelectedSupplier(null);
    setIsUpdateModalOpen(false);
  };
  const closeDeleteModal = () => {
    setSelectedSupplier(null);
    setIsDeleteModalOpen(false);
  };

  const refreshSuppliers = () => fetchSuppliers(searchTerm);

  return (
    <main className="space-y-6">
      {/* Header */}
      <Header onAdd={handleAddClick} />

      {/* Stats Card */}
      <SupplierCard
        title="Total Suppliers"
        count={suppliers.length}
        icon={<Users className="w-6 h-6 text-white" />}
      />

      {/* Search */}
      <SupplierSearch value={searchTerm} onChange={handleSearchChange} />

      {/* Table */}
      <div className="flex-1 min-w-0">
        <SupplierTable
          Suppliers={suppliers}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      </div>

      {/* Create Modal */}
      {isCreateModalOpen && (
        <SupplierCreateModal
          onClose={closeCreateModal}
          onCreated={() => {
            closeCreateModal();
            refreshSuppliers();
          }}
        />
      )}

      {/* Update Modal */}
      {isUpdateModalOpen && selectedSupplier && (
        <SupplierUpdateModal
          supplier={selectedSupplier}
          onClose={closeUpdateModal}
          onUpdated={refreshSuppliers}
        />
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && selectedSupplier && (
        <SupplierDeleteModal
          supplier={selectedSupplier}
          onClose={closeDeleteModal}
          onDeleted={refreshSuppliers}
        />
      )}
    </main>
  );
};

export default SuppliersPage;
