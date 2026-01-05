"use client";

import React from "react";
import { Pen, Trash2 } from "lucide-react";

const PatientTable = ({ patients, onEdit, onDelete }) => (
  <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur p-0">
    <div className="overflow-x-auto max-w-full">
      <table className="min-w-full caption-bottom text-sm whitespace-nowrap">
        <thead>
          <tr className="border-b border-gray-300 bg-slate-100 text-gray-400">
            <th className="h-10 px-2 text-left font-semibold">Patient</th>
            <th className="h-10 px-2 text-left font-semibold">ID</th>
            <th className="h-10 px-2 text-left font-semibold">Contact</th>
            <th className="h-10 px-2 text-left font-semibold">Age/Gender</th>
            <th className="h-10 px-2 text-left font-semibold">Blood Group</th>
            <th className="h-10 px-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient._id || patient.patientId}
              className="border-b border-gray-100 hover:bg-slate-50 transition-colors"
            >
              {/* Patient */}
              <td className="p-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {patient.name?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{patient.name}</p>
                    
                  </div>
                </div>
              </td>

              {/* ID */}
              <td className="p-2 font-mono text-sm">{patient.patientId || "-"}</td>

              {/* Contact */}
              <td className="p-2 text-sm">
                <p className="font-medium text-slate-900">{patient.phone || "-"}</p>
                {patient.emergencyPhone && (
                  <p className="text-xs text-slate-500">
                    Emergency: {patient.emergencyPhone}
                  </p>
                )}
              </td>

              {/* Age / Gender */}
              <td className="p-2 text-sm">
                <p className="font-medium text-slate-900">
                  {patient.age ? `${patient.age} years` : "-"}
                </p>
                <p className="text-xs text-slate-500">{patient.gender || "-"}</p>
              </td>

              {/* Blood Group */}
              <td className="p-2 text-sm">
                {patient.bloodgroup && (
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-red-200 text-red-800">
                    {patient.bloodgroup}
                  </div>
                )}
              </td>

              {/* Actions */}
              <td className="p-2">
                <div className="flex gap-2">
                  {/* Edit */}
                  <button
                    onClick={() => onEdit(patient)}
                    className="h-8 w-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-slate-100 text-gray-700 transition"
                  >
                    <Pen className="w-4 h-4" />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => onDelete(patient)}
                    className="h-8 w-8 flex items-center justify-center rounded-md border border-red-200 text-red-600 hover:bg-red-50 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PatientTable;
