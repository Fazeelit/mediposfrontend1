"use client";

import React from "react";

const TestsTable = ({ tests, renderActionColumn, renderPrintColumn }) => {
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
    "Actions", // Edit + Delete    
  ];

  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
      <table className="w-full min-w-[1400px] text-sm whitespace-nowrap line-clamp-1">
        <thead className="bg-slate-50 border-b border-gray-300">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="p-3 text-left font-semibold text-slate-600"
              >
                {h}
              </th>
            ))}
            {renderPrintColumn && (
              <th className="p-3 text-left font-semibold text-slate-600">
                Print Report
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {tests.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length + (renderPrintColumn ? 1 : 0)}
                className="p-4 text-center text-slate-500"
              >
                No tests available
              </td>
            </tr>
          ) : (
            tests.map((test, index) => {
              const rowKey = test._id || `${test.name}-${test.date}-${index}`;
              return (
                <tr
                  key={rowKey}
                  className="border-b border-gray-200 hover:bg-slate-50"
                >
                  <td className="p-2">{test.patient || "-"}</td>
                  <td className="p-2">{test.age || "-"}</td>
                  <td className="p-2">{test.gender || "-"}</td>
                  <td className="p-2">{test.doctor || "-"}</td>
                  <td className="p-2 font-medium">{test.name || "-"}</td>
                  <td className="p-2">
                    {test.date
                      ? new Date(test.date).toLocaleDateString("en-GB")
                      : "-"}
                  </td>
                  <td className="p-2 font-semibold">Rs. {test.fee || 0}</td>
                  <td className="p-2">{test.status || "Pending"}</td>
                  <td className="p-2">{test.paymentStatus || "Pending"}</td>
                  <td className="p-2">
                    {test.parameters?.length ? (
                      test.parameters.map((p, i) => (
                        <div
                          key={`${rowKey}-param-${i}`}
                          className="text-xs text-slate-600"
                        >
                          {p.name}: {p.result || "-"} ({p.min || "-"}–{p.max || "-"}{" "}
                          {p.unit || "-"})
                        </div>
                      ))
                    ) : (
                      "-"
                    )}
                  </td>

                  {/* Actions Column */}
                  <td className="p-2">{renderActionColumn && renderActionColumn(test)}</td>

                  {/* Print Column */}
                  {renderPrintColumn && (
                    <td className="p-2">{renderPrintColumn(test)}</td>
                  )}
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
