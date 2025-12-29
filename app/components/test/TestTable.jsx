"use client";

import React from "react";

const TestsTable = ({ tests, onEdit }) => {
  const headers = [
    "Patient",
    "Age",
    "Gender",
    "Doctor",
    "Test Name",
    "Date",
    "Fee (Rs.)",
    "Status",
    "Payment Status",
    "Parameters",
    "Actions",
  ];

  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
      <table className="w-full text-sm whitespace-nowrap">
        <thead className="bg-slate-50 border-b border-gray-300">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="p-2 text-left font-semibold text-slate-600"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tests.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="p-4 text-center text-slate-500">
                No tests available
              </td>
            </tr>
          ) : (
            tests.map((test, index) => {
              const rowKey = test._id || `${test.name}-${test.date}-${index}`;
              return (
                <tr key={rowKey} className="border-b border-gray-200 hover:bg-slate-50">
                  <td className="p-2">{test.patient || "-"}</td>
                  <td className="p-2">{test.age || "-"}</td>
                  <td className="p-2">{test.gender || "-"}</td>
                  <td className="p-2">{test.doctor || "-"}</td>
                  <td className="p-2 font-medium">{test.name || "-"}</td>
                  <td className="p-2">{test.date ? new Date(test.date).toLocaleDateString("en-GB") : "-"}</td>
                  <td className="p-2 font-semibold">Rs. {test.totalfee || 0}</td>
                  <td className="p-2">{test.status || "Pending"}</td>
                  <td className="p-2">{test.paymentStatus || "Pending"}</td>
                  <td className="p-2">
                    {test.parameters?.length ? (
                      test.parameters.map((p, i) => (
                        <div key={`${rowKey}-param-${i}`} className="text-xs text-slate-600">
                          {p.name}: {p.result || "-"} ({p.min || "-"}–{p.max || "-"} {p.unit || "-"})
                        </div>
                      ))
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => onEdit(test)}
                      className="h-8 px-3 text-xs border rounded hover:bg-slate-100"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TestsTable;
