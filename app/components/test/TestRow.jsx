
"use client";

import React from "react";

const TestRow = ({ test, onEdit }) => {
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Sample Collected": "bg-blue-100 text-blue-800 border-blue-200",
    "In Progress": "bg-purple-100 text-purple-800 border-purple-200",
    Completed: "bg-green-100 text-green-800 border-green-200",
    Reported: "bg-teal-100 text-teal-800 border-teal-200",
  };

  const paymentColors = {
    Pending: "bg-orange-100 text-orange-800 border-orange-200",
    Partial: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Paid: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-slate-50">
      {/* Test ID */}
      <td className="p-2 font-mono">{test.id}</td>

      {/* Patient Name */}
      <td className="p-2">
        <p className="font-medium">{test.patientName}</p>
      </td>

      {/* Test Name + Parameters */}
      <td className="p-2">
        <p className="font-medium">{test.testName}</p>

        {test.parameters?.length > 0 && (
          <div className="mt-1 space-y-0.5">
            {test.parameters.map((p, index) => (
              <p key={index} className="text-xs text-slate-500">
                {p.name}:{" "}
                <span className="font-medium text-slate-600">
                  {p.result || "-"}
                </span>{" "}
                ({p.min}–{p.max} {p.unit})
              </p>
            ))}
          </div>
        )}
      </td>

      {/* Category / Test Type */}
      <td className="p-2">
        <span className="border border-gray-200 rounded-md px-2.5 py-0.5 text-xs">
          {test.testType}
        </span>
      </td>

      {/* Date */}
      <td className="p-2">{test.date}</td>

      {/* Fee */}
      <td className="p-2">
        <p className="font-semibold">
          ${Number(test.fee || 0).toFixed(2)}
        </p>
        <span
          className={`inline-block mt-1 text-xs border rounded-md px-2 py-0.5 ${
            paymentColors[test.paymentStatus] ||
            "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          {test.paymentStatus}
        </span>
      </td>

      {/* Status */}
      <td className="p-2">
        <span
          className={`text-xs border rounded-md px-2 py-0.5 ${
            statusColors[test.status] ||
            "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          {test.status}
        </span>
      </td>

      {/* Actions */}
      <td className="p-2">
        <button
          onClick={() => onEdit(test)}
          className="h-8 px-3 text-xs border border-slate-200 rounded-md hover:bg-slate-100"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default TestRow;
