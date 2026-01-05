"use client";

import React, { useState, useEffect } from "react";
import { Plus, Printer, Edit, Trash2 } from "lucide-react";
import TestStatsCards from "../../components/test/TestStatsCards";
import TestsTable from "../../components/test/TestTable";
import TestModal from "../../components/test/TestModel";
import TestUpdateModal from "../../components/test/TestUpdateModel";
import TestParametersModal from "../../components/test/TestParametersModal";
import { apiRequest } from "@/app/authservice/api";

const MedicalTestsPage = () => {
  const [tests, setTests] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [openTest, setOpenTest] = useState(false);
  const [openParams, setOpenParams] = useState(false);
  const [editTest, setEditTest] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(false);

  /* ================= FETCH ALL TEST RECORDS ================= */
  const fetchTests = async () => {
    try {
      const res = await apiRequest("/tests");
      const data = Array.isArray(res) ? res : res?.data || [];

      const mappedTests = data
        .map((t) => {
          const totalFee =
            t.parameters?.reduce(
              (sum, p) => sum + Number(p.cost || 0),
              0
            ) || 0;

          return {
            ...t,
            id: t._id || `TEST-${Date.now()}-${Math.random()}`,
            fee: totalFee,
          };
        })
        // Recent report first
        .sort((a, b) => {
          const dateA = new Date(a.createdAt || a.date || 0);
          const dateB = new Date(b.createdAt || b.date || 0);
          return dateB - dateA;
        });

      setTests(mappedTests);
    } catch (err) {
      console.error("Failed to fetch tests:", err);
    }
  };

  /* ================= FETCH ALL PARAMETERS ================= */
  const fetchParameters = async () => {
    try {
      const res = await apiRequest("/testParameters");
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
    data.parameters?.forEach((p) => {
      totalFee += Number(p.cost || 0);
    });

    const newTest = {
      ...data,
      fee: totalFee,
      id: editTest?.id || `TEST-${Date.now()}`,
    };

    if (editTest) {
      setTests((prev) =>
        prev.map((t) => (t.id === editTest.id ? newTest : t))
      );
    } else {
      setTests((prev) => [newTest, ...prev]);
    }

    setOpenTest(false);
    setEditTest(null);
  };

  /* ================= DELETE TEST ================= */
const handleDeleteTest = async (id) => {
  if (!confirm("Are you sure you want to delete this test?")) return;

  try {
    const res = await apiRequest(`/tests/deleteTest/${id}`, {
      method: "DELETE",
    });

    if (res?.success) {
      // Remove the deleted test from state
      setTests((prev) => prev.filter((t) => t.id !== id));
    } else {
      alert(res.message || "Failed to delete test.");
    }
  } catch (err) {
    console.error("Failed to delete test:", err);
    alert(err.message || "Failed to delete test.");
  }
};

  /* ================= CALCULATE GROSS TOTAL ================= */
  const grossTotalFee = tests.reduce(
    (sum, t) => sum + Number(t.fee || 0),
    0
  );

  /* ================= PRINT TEST REPORT ================= */
  const handlePrintReport = (test) => {
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(
      `<h2 style="text-align:center;">Test Report</h2>`
    );

    printWindow.document.write(`
      <table style="width:100%; margin-top:10px; font-size:14px;">
        <tr>
          <td><strong>Patient:</strong> ${test.patient || "-"}</td>
          <td><strong>Age:</strong> ${test.age || "-"}</td>
          <td><strong>Gender:</strong> ${test.gender || "-"}</td>
        </tr>
        <tr>
          <td><strong>Doctor:</strong> ${test.doctor || "-"}</td>
          <td><strong>Date:</strong> ${test.date || "-"}</td>
          <td><strong>Mobile:</strong> ${test.mobile || "-"}</td>
        </tr>
      </table>
    `);

    const testGroups = Array.isArray(test.parameters)
      ? test.parameters.reduce((acc, param) => {
          const key = param.testName || test.name;
          if (!acc[key]) acc[key] = [];
          acc[key].push(param);
          return acc;
        }, {})
      : { [test.name]: [] };

    Object.entries(testGroups).forEach(([testName, params]) => {
      printWindow.document.write(
        `<h3 style="margin-top:20px;">Test Name: ${testName}</h3>`
      );

      printWindow.document.write(`
        <table border="1" style="border-collapse: collapse; width: 100%; margin-top:5px; font-size:14px;">
          <thead>
            <tr>
              <th style="padding:5px;">Parameter</th>
              <th style="padding:5px;">Min</th>
              <th style="padding:5px;">Max</th>
              <th style="padding:5px;">Unit</th>
              <th style="padding:5px;">Result</th>
            </tr>
          </thead>
          <tbody>
            ${params
              .map(
                (p) => `
              <tr>
                <td style="padding:5px;">${p.name}</td>
                <td style="padding:5px;">${p.min || "-"}</td>
                <td style="padding:5px;">${p.max || "-"}</td>
                <td style="padding:5px;">${p.unit || "-"}</td>
                <td style="padding:5px;">${p.result || "-"}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      `);
    });

    printWindow.document.close();
    printWindow.print();
  };

  return (
    <main className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Medical Tests</h1>
          <p className="text-slate-600">Manage diagnostic tests & reports</p>
        </div>

        <div className="flex gap-3 font-bold">
          <button
            onClick={() => setOpenTest(true)}
            className="flex items-center gap-2 h-9 px-4 rounded-md text-sm
            bg-gradient-to-r from-teal-500 to-teal-600 text-white "
          >
            <Plus className="w-4 h-4" />
            Conduct Test
          </button>

          <button
            onClick={() => setOpenParams(true)}
            className="h-9 px-4 rounded-md border border-gray-300
            text-teal-700 bg-white hover:bg-slate-100"
          >
            + Available Tests
          </button>
        </div>
      </div>

      {/* STATS + TABLE */}
      <TestStatsCards tests={tests} />

      <TestsTable
        tests={tests}
        onEdit={(t) => {
          setEditTest(t);
          setOpenUpdate(true); // Open the update modal
        }}
        renderActionColumn={(test) => (
          <div className="flex items-center gap-2 justify-center">
            {/* EDIT */}
            <button
              title="Edit"
              onClick={() => {
                setEditTest(test);
                setOpenUpdate(true); // Open update modal
              }}
              className="p-1 bg-blue-600 text-white rounded"
            >
              <Edit size={16} />
            </button>

            {/* DELETE */}
            <button
              title="Delete"
              onClick={() => handleDeleteTest(test.id)}
              className="p-1 bg-red-600 text-white rounded"
            >
              <Trash2 size={16} />
            </button>

            {/* PRINT (ALWAYS LAST) */}
            <button
              title="Print"
              className="p-1 bg-teal-600 text-white rounded"
              onClick={() => handlePrintReport(test)}
            >
              <Printer size={16} />
            </button>
          </div>
        )}
      />

      {/* GROSS TOTAL */}
      <div className="mt-4 text-right font-bold text-lg">
        Gross Total Fee:{" "}
        <span className="text-teal-600">{grossTotalFee}</span>
      </div>

      {/* NEW TEST MODAL */}
      {openTest && (
        <TestModal
          parameters={parameters}
          editData={editTest}
          onSave={handleSaveTest}
          onClose={() => {
            setOpenTest(false);
            setEditTest(null);
          }}
        />
      )}

      {/* UPDATE TEST MODAL */}
      {openUpdate && editTest && (
        <TestUpdateModal
          testId={editTest.id}
          onClose={() => {
            setOpenUpdate(false);
            setEditTest(null);
            fetchTests(); // Refresh list after update
          }}
        />
      )}

      {/* PARAMETERS MODAL */}
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
