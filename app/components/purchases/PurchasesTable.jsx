"use client";

import React from "react";
import { Package } from "lucide-react";

const ProductTable = ({ products = [] }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          {/* ================= HEADER ================= */}
          <thead>
            <tr className="border-b bg-slate-50 text-gray-500">
              <th className="h-10 px-3 text-left font-semibold">Product Name</th>
              <th className="h-10 px-3 text-left font-semibold">Category</th>
              <th className="h-10 px-3 text-left font-semibold">Price</th>
              <th className="h-10 px-3 text-left font-semibold">Stock</th>
              <th className="h-10 px-3 text-left font-semibold">SKU</th>
              <th className="h-10 px-3 text-left font-semibold">Status</th>
              <th className="h-10 px-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody className="[&_tr:last-child]:border-0">
            {products.length === 0 ? (
              /* ---------- EMPTY STATE ---------- */
              <tr key="no-products">
                <td colSpan={7}>
                  <div className="text-center py-14 text-slate-500">
                    <Package className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="text-lg font-medium">No products found</p>
                    <p className="text-sm">Try adjusting your filters or adding new products</p>
                  </div>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                /* ---------- PRODUCT ROW ---------- */
                <tr
                  key={product._id ?? product.id ?? Math.random()} // ✅ unique key
                  className="border-b border-gray-100 hover:bg-slate-50 transition"
                >
                  <td className="px-3 py-2 font-medium">{product.name ?? "-"}</td>
                  <td className="px-3 py-2">{product.category ?? "-"}</td>
                  <td className="px-3 py-2">{product.price?.toLocaleString() ?? 0}</td>
                  <td className="px-3 py-2">{product.stock ?? 0}</td>
                  <td className="px-3 py-2">{product.sku ?? "-"}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status ?? "Inactive"}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
