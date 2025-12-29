"use client";

import React from "react";
import { Search } from "lucide-react";

const SalesFilters = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur p-4">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* 🔍 Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-md border border-gray-200 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Search by invoice, patient or product..."
          />
        </div>

        {/* 🎯 Filters */}
        <div className="flex gap-2 flex-wrap">
          {["all", "today"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`h-8 px-4 rounded-md text-xs font-medium transition ${
                filter === f
                  ? "bg-teal-600 text-white"
                  : "border border-gray-200 text-slate-600 hover:bg-gray-100"
              }`}
            >
              {f === "all" ? "All" : f === "today" ? "Today" : f}
            </button>
          ))}

          {/* Optional Revenue Filter */}
          {/* <button
            onClick={() => setFilter("highRevenue")}
            className={`h-8 px-4 rounded-md text-xs font-medium transition ${
              filter === "highRevenue"
                ? "bg-teal-600 text-white"
                : "border border-gray-200 text-slate-600 hover:bg-gray-100"
            }`}
          >
            High Revenue
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SalesFilters;
