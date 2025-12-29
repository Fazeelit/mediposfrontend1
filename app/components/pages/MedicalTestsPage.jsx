
"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import TestStatsCards from "../../components/test/TestStatsCards";
import TestsTable from "../../components/test/TestTable";
import TestModal from "../../components/test/TestModel";
import TestParametersModal from "../../components/test/TestParametersModal";


const dummyParameters = [
  {
    name: "Hemoglobin",
    min: "12",
    max: "16",
    unit: "g/dL",
    cost: 500,
    discount: 50,
  },
  {
    name: "WBC Count",
    min: "4000",
    max: "11000",
    unit: "/µL",
    cost: 700,
    discount: 100,
  },
  {
    name: "Platelets",
    min: "150000",
    max: "450000",
    unit: "/µL",
    cost: 600,
    discount: 0,
  },
];

const initialTests = [
  {
    id: "TEST-1001",
    patientName: "Ali Khan",
    age: "28",
    sex: "Male",
    testName: "Complete Blood Count",
    testType: "Blood Test",
    date: "2025-01-10",
    time: "10:30",
    fee: 1650,
    paymentStatus: "Paid",
    status: "Completed",
    notes: "Normal CBC report",
    parameters: [
      {
        name: "Hemoglobin",
        min: "12",
        max: "16",
        result: "14",
        unit: "g/dL",
      },
      {
        name: "WBC Count",
        min: "4000",
        max: "11000",
        result: "7200",
        unit: "/µL",
      },
    ],
  },
  {
    id: "TEST-1002",
    patientName: "Sara Ahmed",
    age: "35",
    sex: "Female",
    testName: "Platelet Test",
    testType: "Blood Test",
    date: "2025-01-12",
    time: "12:15",
    fee: 600,
    paymentStatus: "Pending",
    status: "In Progress",
    notes: "",
    parameters: [
      {
        name: "Platelets",
        min: "150000",
        max: "450000",
        result: "210000",
        unit: "/µL",
      },
    ],
  },
];


// const initialTests = [];

const MedicalTestsPage = () => {

 const [tests, setTests] = useState(initialTests);
  const [openTest, setOpenTest] = useState(false);
  const [openParams, setOpenParams] = useState(false);
  const [editTest, setEditTest] = useState(null);

  // --- Main Parameters State ---
  const [parameters, setParameters] = useState(dummyParameters);

  // --- Save Test Handler ---
  const handleSaveTest = (data) => {
    let totalFee = 0;

    data.parameters.forEach((p) => {
      const found = parameters.find(x => x.name === p.name);
      if (found) {
        totalFee += Number(found.cost || 0) - Number(found.discount || 0);
      }
    });

    data.fee = totalFee;

    if (editTest) {
      setTests(
        tests.map((t) => (t.id === editTest.id ? { ...data, id: editTest.id } : t))
      );
    } else {
      setTests([{ ...data, id: `TEST-${Date.now()}` }, ...tests]);
    }

    setOpenTest(false);
    setEditTest(null);
  };


  return (
    <main className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Medical Tests</h1>
          <p className="text-slate-600">Manage diagnostic tests & reports</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setOpenTest(true)}
            className="flex items-center gap-2 h-9 px-4 rounded-md text-sm
            bg-gradient-to-r from-teal-500 to-teal-600 text-white"
          >
            <Plus className="w-4 h-4" />
            New Test
          </button>

          <button
            onClick={() => setOpenParams(true)}
            className="h-9 px-4 rounded-md border border-gray-300 text-teal-700  bg-white hover:bg-slate-100"
          >
            + Add Parameters
          </button>
        </div>
      </div>


      <TestStatsCards tests={tests} />
      <TestsTable
        tests={tests}
        onEdit={(t) => {
          setEditTest(t);
          setOpenTest(true);
        }}
      />

      {/* TEST MODAL */}
      {openTest && (
        <TestModal
          parameters={parameters}
          editData={editTest}
          onClose={() => {
            setOpenTest(false);
            setEditTest(null);
          }}
          onSave={handleSaveTest}
        />
      )}

      {/* PARAMETER MODAL */}
      {openParams && (
        <TestParametersModal
          parameters={parameters}
          setParameters={setParameters}
          onClose={() => setOpenParams(false)}
        />
      )}
    </main>
  );
};

export default MedicalTestsPage;
