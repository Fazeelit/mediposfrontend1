"use client";

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import TestStatsCards from "../../components/test/TestStatsCards";
import TestsTable from "../../components/test/TestTable";
import TestModal from "../../components/test/TestModel";
import TestParametersModal from "../../components/test/TestParametersModal";
import { apiRequest } from "@/app/authservice/api";

const MedicalTestsPage = () => {
  const [tests, setTests] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [openTest, setOpenTest] = useState(false);
  const [openParams, setOpenParams] = useState(false);
  const [editTest, setEditTest] = useState(null);

  /* ================= FETCH ALL TEST RECORDS ================= */
  const fetchTests = async () => {
    try {
      const res = await apiRequest("/tests"); // GET all tests
      const data = Array.isArray(res) ? res : res?.data || [];

      const mappedTests = data.map((t) => {
        const totalFee = t.parameters?.reduce(
          (sum, p) => sum + Number(p.cost || 0),
          0
        );
        return {
          ...t,
          id: t._id || `TEST-${Date.now()}-${Math.random()}`,
          fee: totalFee || 0,
        };
      });

      setTests(mappedTests);
    } catch (err) {
      console.error("Failed to fetch tests:", err);
    }
  };

  /* ================= FETCH ALL PARAMETERS ================= */
  const fetchParameters = async () => {
    try {
      const res = await apiRequest("/testParameters"); // GET all test parameters
      const data = Array.isArray(res) ? res : res?.data || [];
      setParameters(data);
    } catch (err) {
      console.error("Failed to fetch parameters:", err);
    }
  };

  useEffect(() => {
    fetchTests();
    fetchParameters();
  }, []);

  /* ================= HANDLE SAVE TEST ================= */
  const handleSaveTest = (data) => {
    let totalFee = 0;
    data.parameters.forEach((p) => {
      const paramInfo = parameters.find((x) => x.name === p.name);
      if (paramInfo) {
        totalFee += Number(paramInfo.cost || 0);
      }
    });

    const newTest = {
      ...data,
      fee: totalFee,
      id: editTest?.id || `TEST-${Date.now()}`,
    };

    if (editTest) {
      setTests(tests.map((t) => (t.id === editTest.id ? newTest : t)));
    } else {
      setTests([newTest, ...tests]);
    }

    setOpenTest(false);
    setEditTest(null);
  };

  /* ================= CALCULATE GROSS TOTAL ================= */
  const grossTotalFee = tests.reduce((sum, t) => sum + Number(t.fee || 0), 0);

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

      {/* Stats & Table */}
      <TestStatsCards tests={tests} />
      <TestsTable
        tests={tests}
        onEdit={(t) => {
          setEditTest(t);
          setOpenTest(true);
        }}
      />

      {/* Gross Total Fee */}
      <div className="mt-4 text-right font-bold text-lg">
        Gross Total Fee: <span className="text-teal-600">{grossTotalFee}</span>
      </div>

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
