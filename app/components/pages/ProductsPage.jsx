"use client";

import { useState, useEffect } from "react";
import {
  Package,
  PackageCheck,
  TriangleAlert,
  TrendingDown,
} from "lucide-react";

import ProductCard from "../../components/products/ProductCard";
import ProductTable from "../../components/products/ProductTable";
import ProductEditModel from "../../components/products/ProductEditModel";
import ProductModel from "../../components/products/ProductModel"; // New product modal
import ProductFilter from "../../components/products/ProductFilter";
import { apiRequest } from "@/app/authservice/api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [newProductOpen, setNewProductOpen] = useState(false); // For new product modal
  const [editingProductId, setEditingProductId] = useState(null);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async () => {
    try {
      const res = await apiRequest("/products", { method: "GET" });
      setProducts(res.data.data || res.data);
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message || "Failed to fetch products"
      );
      setShowError(true);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ---------------- FILTERING ---------------- */
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Active" && p.status === "Active") ||
      (filter === "Low Stock" && p.stock <= 10) ||
      (filter === "Out of Stock" && p.stock === 0);

    return matchesSearch && matchesFilter;
  });

  /* ---------------- EDIT ACTION ---------------- */
  const openEditModal = (product) => {
    setEditingProductId(product._id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingProductId(null);
    fetchProducts(); // refresh list after update
  };

  /* ---------------- NEW PRODUCT ACTION ---------------- */
  const openNewProductModal = () => {
    setNewProductOpen(true);
  };

  const closeNewProductModal = () => {
    setNewProductOpen(false);
    fetchProducts(); // refresh list after adding new product
  };

  /* ---------------- STATS ---------------- */
  const stats = [
    {
      title: "Total Products",
      count: products.length,
      color: "blue",
      Icon: Package,
    },
    {
      title: "Active Products",
      count: products.filter((p) => p.status === "Active").length,
      color: "pink",
      Icon: PackageCheck,
    },
    {
      title: "Low Stock",
      count: products.filter((p) => p.stock <= 10).length,
      color: "amber",
      Icon: TriangleAlert,
    },
    {
      title: "Out of Stock",
      count: products.filter((p) => p.stock === 0).length,
      color: "red",
      Icon: TrendingDown,
    },
  ];

  return (
    <main className="p-6">
      {/* ERROR MODAL */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white p-6 rounded-xl text-center">
            <TriangleAlert className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <h2 className="font-bold text-red-700">Error</h2>
            <p>{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Product Inventory</h1>
          <p className="text-slate-600">Manage your product catalog</p>
        </div>

        {/* + NEW PRODUCT BUTTON */}
        <div>
          <button
            onClick={openNewProductModal}
            className="bg-teal-600 text-white px-4 py-2 rounded shadow hover:bg-teal-700 font-semibold"
          >
            + New Product
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => (
          <ProductCard key={i} {...stat} />
        ))}
      </div>

      <ProductFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      {/* TABLE */}
      <ProductTable products={filteredProducts} onEdit={openEditModal} />

      {/* EDIT MODAL */}
      {modalOpen && editingProductId && (
        <ProductEditModel productId={editingProductId} onClose={closeModal} />
      )}

      {/* NEW PRODUCT MODAL */}
      {newProductOpen && <ProductModel onClose={closeNewProductModal} />}
    </main>
  );
}
