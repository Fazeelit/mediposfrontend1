"use client";

import React from "react";

const SalesRow = ({ sale }) => {
  const date = new Date(sale.createdAt);

  return (
    <tr className="border-b border-gray-200 hover:bg-slate-50 text-sm">
      {/* Invoice */}
      <td className="p-2 font-mono font-medium">
        {sale.invoiceNumber || sale._id.slice(-6)}
      </td>

      {/* Date / Time */}
      <td className="p-2">
        <p className="font-medium">{date.toLocaleDateString()}</p>
        <p className="text-xs text-slate-500">{date.toLocaleTimeString()}</p>
      </td>

      {/* Patient */}
      <td className="p-2 font-medium">{sale.patientName || "Walk-in"}</td>

      {/* Items */}
      <td className="p-2 text-slate-600">{sale.products?.length || 0} items</td>

      {/* Payment Status */}
      <td className="p-2">
        <span
          className={`border rounded-md px-2 py-0.5 text-xs ${
            sale.paymentStatus === "Paid"
              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
              : "bg-amber-100 text-amber-700 border-amber-200"
          }`}
        >
          {sale.paymentStatus}
        </span>
      </td>

      {/* Amount */}
      <td className="p-2 font-bold text-slate-900">
        Rs {sale.totalAmount?.toFixed(2)}
      </td>

      {/* Profit */}
      <td className="p-2 font-bold">
        <span
          className={sale.profit >= 0 ? "text-emerald-600" : "text-red-600"}
          title={`Revenue: Rs ${(sale.totalAmount - sale.profit).toFixed(2)}`}
        >
          Rs {sale.profit?.toFixed(2)}
        </span>
      </td>

      {/* Status */}
      <td className="p-2">
        <span className="px-2 py-0.5 text-xs rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
          Completed
        </span>
      </td>
    </tr>
  );
};

export default SalesRow;
