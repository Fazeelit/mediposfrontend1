"use client";

import { useState } from "react";
import { apiRequest } from "@/app/authservice/api";

export default function ProductsCard({ products, addToCart }) {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleAdd = async (productId = selectedProductId) => {
    if (!productId) return;

    try {
      const res = await apiRequest(
        `/products/getProductById/${productId}`,
        { method: "GET" }
      );

      const product = res?.data || res;
      if (!product) throw new Error("Product not found");

      addToCart(product);
      setSelectedProductId("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch product");
    }
  };

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 4v16m8-8H4" />
    </svg>
  );

  const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" className="w-12 h-12 text-teal-600">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12l2 2 4-4" />
    </svg>
  );

  return (
    <div>
      {/* Select + Add */}
      <div className="p-4">
        <div className="flex gap-3 mb-5">
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
            className="flex w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="">Select product...</option>
            {products.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name} — Rs.{item.price}
              </option>
            ))}
          </select>

          <button
            onClick={() => handleAdd()}
            disabled={!selectedProductId}
            className={`inline-flex items-center gap-2 h-10 px-4 rounded-md
              ${selectedProductId
                ? "bg-teal-600 text-white"
                : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
          >
            <PlusIcon /> Add
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2
          bg-teal-600 text-white px-4 py-2 rounded-md flex gap-2 z-50">
          <CheckCircleIcon /> Item added to cart
        </div>
      )}

      {/* Products (NO GRID) */}
      <div className="h-[65vh] overflow-y-auto p-4">
        <div className="flex flex-wrap gap-4">
          {products.map((item) => (
            <div
              key={item._id}
              className="w-[220px] bg-white rounded-xl shadow
                hover:shadow-lg transition cursor-pointer"
            >
              <div className="p-4">
                <div className="aspect-square bg-teal-50 rounded-xl
                  mb-3 flex items-center justify-center">
                  <ShoppingCartIcon />
                </div>

                <h3 className="text-sm font-semibold mb-1">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 mb-2">
                  Stock: {item.stock}
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-teal-600">
                    Rs.{item.price}
                  </span>

                  <button
                    onClick={() => handleAdd(item._id)}
                    className="bg-teal-600 text-white h-7 px-3 rounded-md"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
