"use client";

import React, { useEffect, useState, useMemo } from "react";
import { TriangleAlert } from "lucide-react";
import { apiRequest } from "@/app/authservice/api";

const getArray = (res) =>
  Array.isArray(res?.data)
    ? res.data
    : Array.isArray(res?.data?.data)
    ? res.data.data
    : [];

const LowStockAlert = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiRequest("/products");
        setProducts(getArray(res));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Merge products by name and sum stock
  const lowStockItems = useMemo(() => {
    const map = new Map();

    products.forEach((p) => {
      const key = p.name.trim().toLowerCase();
      const stock = Number(p.stock) || 0;

      if (map.has(key)) {
        const existing = map.get(key);
        map.set(key, {
          ...existing,
          stock: existing.stock + stock,
          unit: p.unit || existing.unit || "",
        });
      } else {
        map.set(key, {
          name: p.name,
          stock,
          unit: p.unit || "",
        });
      }
    });

    // Filter only low stock products (total stock <= 10)
    return Array.from(map.values())
      .filter((p) => p.stock <= 10)
      .map((p) => ({
        ...p,
        stock: p.stock + (p.unit ? ` ${p.unit}` : ""),
        status: "Reorder",
      }));
  }, [products]);

  if (lowStockItems.length === 0) return null; // Hide alert if no low stock

  return (
    <div className="rounded-xl overflow-visible text-card-foreground border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="flex flex-col space-y-1.5 p-6 pt-7">
        <div className="tracking-tight text-lg font-semibold text-amber-900 flex items-center leading-none">
          <TriangleAlert className="w-5 h-5 mr-2 text-amber-600" />
          Low Stock Alert
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {lowStockItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            >
              <div>
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">Stock: {item.stock}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowStockAlert;
