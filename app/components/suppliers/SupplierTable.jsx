"use client";

import React, { useState, useEffect } from "react";
import { Pen, Trash2 } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";
import { toast } from "react-hot-toast";

const SupplierTable = ({ onEdit, onDelete }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH Suppliers ---------------- */
  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/suppliers", "GET");

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-0">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full caption-bottom text-sm whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-300 bg-slate-100 text-gray-400">
              <th className="h-10 px-2 w-[90px] text-left font-semibold">Supplier ID</th>
              <th className="h-10 px-2 w-[120px] text-left font-semibold">Name</th>
              <th className="h-10 px-2 w-[120px] text-left font-semibold">Contact Person</th>
              <th className="h-10 px-2 w-[100px] text-left font-semibold">Phone</th>
              <th className="h-10 px-2 w-[150px] text-left font-semibold">Address</th>
              <th className="h-10 px-2 w-[120px] text-left font-semibold">Company Name</th>
              <th className="h-10 px-2 w-[80px] text-left font-semibold">Status</th>
              <th className="h-10 px-2 w-[90px] text-left font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  Loading suppliers...
                </td>
              </tr>
            ) : suppliers.length > 0 ? (
              suppliers.map((supplier) => (
                <tr
                  key={supplier._id || supplier.supplierId}
                  className="border-b border-gray-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="p-2 font-mono text-sm">{supplier.supplierId || "-"}</td>
                  <td className="p-2 text-sm font-medium text-slate-900">{supplier.name || "-"}</td>
                  <td className="p-2 text-sm">{supplier.contactPerson || "-"}</td>
                  <td className="p-2 text-sm">{supplier.phone || "-"}</td>
                  <td className="p-1 text-sm line-clamp-1">{supplier.address || "-"}</td>
                  <td className="p-2 text-sm">{supplier.companyName || "-"}</td>
                  <td className="p-2 text-sm">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${
                        supplier.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {supplier.status || "-"}
                    </span>
                  </td>
                  <td className="p-1">
                    <div className="flex gap-1">
                      <button
                        onClick={() => onEdit(supplier)}
                        className="h-7 w-7 flex items-center justify-center rounded-md border border-gray-300 hover:bg-slate-100 text-gray-700 transition"
                      >
                        <Pen className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onDelete(supplier)}
                        className="h-7 w-7 flex items-center justify-center rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center text-gray-500 py-4">
                  No suppliers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierTable;
