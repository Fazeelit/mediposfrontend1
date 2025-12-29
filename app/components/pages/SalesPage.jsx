"use client";

import React, { useEffect, useState } from "react";
import SalesFilters from "../../components/sales/SalesFilters";
import SalesTable from "../../components/sales/SalesTable";
import SalesStates from "../../components/sales/SalesStates";
import { apiRequest } from "@/app/authservice/api";

const SalesPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sales, setSales] = useState([]);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalProfit: 0,
    totalSales: 0,
    avgTransaction: 0,
  });

  useEffect(() => {
    fetchData();
  }, [search, filter]);

  const fetchData = async () => {
    try {
      const res = await apiRequest("/sales", { method: "GET" });
      if (res?.success) {
        let filteredSales = res.data;

        // 🔍 Search filter
        if (search) {
          filteredSales = filteredSales.filter((sale) =>
            sale.customerName.toLowerCase().includes(search.toLowerCase()) ||
            sale.products.some((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            )
          );
        }

        // 🎯 Status filter
        if (filter !== "all") {
          filteredSales = filteredSales.filter(
            (sale) => sale.paymentStatus === filter
          );
        }

        // 📊 Calculate profit per sale
        filteredSales = filteredSales.map((sale) => {
          const totalCost = sale.products?.reduce(
            (sum, p) => sum + (p.cost || 0) * (p.quantity || 0),
            0
          ) || 0;
          const profit = (sale.totalAmount || 0) - totalCost;
          return { ...sale, profit, totalCost };
        });

        const totalRevenue = filteredSales.reduce(
          (sum, s) => sum + (s.totalAmount || 0),
          0
        );
        const totalProfit = filteredSales.reduce(
          (sum, s) => sum + (s.profit || 0),
          0
        );
        const totalSales = filteredSales.length;
        const avgTransaction = totalSales > 0 ? totalRevenue / totalSales : 0;

        setSales(filteredSales);
        setStats({ totalRevenue, totalProfit, totalSales, avgTransaction });
      }
    } catch (error) {
      console.error("Failed to fetch sales", error);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Sales History</h1>
        <p className="text-slate-600 mt-1">View sales, revenue & profit</p>
      </div>

      <SalesStates stats={stats} />
      <SalesFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <SalesTable search={search} filter={filter} />
    </main>
  );
};

export default SalesPage;
