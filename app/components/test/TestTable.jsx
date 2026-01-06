"use client";

import React from "react";

const TestsTable = ({ tests = [], renderActionColumn, renderPrintColumn }) => {
  const screenHeaders = [
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
    <>
      {/* ================= PRINT STYLES ================= */}
      <style jsx global>{`
        @media print {
          @page {
            size: Letter;
            margin: 12mm;
          }

          body {
            background: white !important;
          }

          .screen-only {
            display: none !important;
          }

          .print-only {
            display: block !important;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }

          th,
          td {
            border: 1px solid #000;
            padding: 6px;
            font-size: 11px;
          }

          h2 {
            text-align: center;
            font-size: 14px;
            margin-bottom: 8px;
          }
        }

        .print-only {
          display: none;
        }
      `}</style>

      {/* ================= SCREEN VIEW ================= */}
      <div className="screen-only rounded-xl shadow-lg bg-white/80 backdrop-blur overflow-x-auto">
        <table className="w-full min-w-[1400px] text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-gray-300">
            <tr>
              {screenHeaders.map((h) => (
                <th key={h} className="p-3 text-left font-semibold text-slate-600">
                  {h}
                </th>
              ))}
              {renderPrintColumn && <th className="p-3 font-semibold">Print</th>}
            </tr>
          </thead>

          <tbody>
            {tests.length === 0 ? (
              <tr>
                <td colSpan={screenHeaders.length} className="p-4 text-center">
                  No tests available
                </td>
              </tr>
            ) : (
              tests.map((test, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{test.patient}</td>
                  <td className="p-2">{test.age}</td>
                  <td className="p-2">{test.gender}</td>
                  <td className="p-2">{test.doctor}</td>
                  <td className="p-2 font-semibold">{test.name}</td>
                  <td className="p-2">
                    {new Date(test.date).toLocaleDateString("en-GB")}
                  </td>
                  <td className="p-2">Rs. {test.fee}</td>
                  <td className="p-2">{test.status}</td>
                  <td className="p-2">{test.paymentStatus}</td>
                  <td className="p-2">
                    {test.parameters?.map((p, i) => (
                      <div key={i} className="text-xs">
                        {p.name}: {p.result || "-"} ({p.min || "-"}–{p.max || "-"}{" "}
                        {p.unit || "-"})
                      </div>
                    ))}
                  </td>
                  <td className="p-2">
                    {renderActionColumn && renderActionColumn(test)}
                  </td>
                  {renderPrintColumn && (
                    <td className="p-2">{renderPrintColumn(test)}</td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= PRINT VIEW ================= */}
      <div className="print-only">
        {tests.map((test, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            {/* Test Name Heading */}
            <h2>Test Name: {test.name}</h2>

            {/* Each test gets its own parameters table */}
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Result</th>
                  <th>Min</th>
                  <th>Max</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {test.parameters && test.parameters.length > 0 ? (
                  test.parameters.map((param, i) => (
                    <tr key={i}>
                      <td>{param.name}</td>
                      <td>{param.result || "-"}</td>
                      <td>{param.min || "-"}</td>
                      <td>{param.max || "-"}</td>
                      <td>{param.unit || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      No parameters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestsTable;
