"use client";

import { useState, useMemo } from "react";
import { apiRequest } from "@/app/authservice/api";

export default function ProductsCard({ products, addToCart }) {
  const [search, setSearch] = useState("");
  const [showToast, setShowToast] = useState(false);

  /* =========================
     MERGE PRODUCTS WITH SAME NAME
     ========================= */
  const mergedProducts = useMemo(() => {
    const map = new Map();

    products.forEach((p) => {
      const key = p.name.trim().toLowerCase();
      if (map.has(key)) {
        const existing = map.get(key);
        map.set(key, {
          ...existing,
          stock: existing.stock + (Number(p.stock) || 0),
          price: p.price, // optionally keep last price or min/max
        });
      } else {
        map.set(key, { ...p, stock: Number(p.stock) || 0 });
      }
    });

    return Array.from(map.values());
  }, [products]);

  /* =========================
     FILTER PRODUCTS BY SEARCH
     ========================= */
  const filteredProducts = useMemo(() => {
    if (!search) return mergedProducts;
    return mergedProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, mergedProducts]);

  /* =========================
     ADD PRODUCT
     ========================= */
  const handleAdd = async (productId) => {
    if (!productId) return;

    try {
      const res = await apiRequest(
        `/products/getProductById/${productId}`,
        { method: "GET" }
      );

      const product = res?.data || res;
      if (!product) throw new Error("Product not found");

      addToCart(product);
      setSearch("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch product");
    }
  };

  /* =========================
     ICONS
     ========================= */
  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth={2} d="M9 12l2 2 4-4" />
    </svg>
  );

  return (
    <div>
      {/* =========================
         SEARCH BAR
         ========================= */}
      <div className="p-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product..."
            className="w-full rounded-full border pl-11 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
      </div>

      {/* =========================
         TOAST
         ========================= */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-2 rounded-md flex gap-2 z-50">
          <CheckCircleIcon /> Item added to cart
        </div>
      )}

      {/* =========================
         PRODUCT LIST
         ========================= */}
      <div className="h-[65vh] overflow-y-auto px-4">
        <ul className="space-y-2">
          {filteredProducts.map((item) => (
            <li
              key={item._id || item.name}
              className="flex justify-between items-center bg-white border rounded-lg px-4 py-3 hover:bg-teal-50"
            >
              <div>
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-xs text-slate-500">
                  Total Stock: {item.stock}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-bold text-teal-600">
                  Rs.{item.price}
                </span>

                <button
                  onClick={() => handleAdd(item._id)}
                  className="bg-teal-600 text-white h-8 px-3 rounded-md"
                >
                  <PlusIcon />
                </button>
              </div>
            </li>
          ))}

          {filteredProducts.length === 0 && (
            <li className="text-center text-sm text-slate-500 py-6">
              No products found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
