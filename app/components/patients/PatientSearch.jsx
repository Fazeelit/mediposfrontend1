"use client";

import React from "react";
import { Search } from "lucide-react";

const PatientSearch = ({ value, onChange }) => (
  <div className="rounded-xl border-0 shadow-lg bg-white/80 backdrop-blur p-4">
    <label htmlFor="patient-search" className="sr-only">
      Search patients
    </label>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
      <input
        id="patient-search"
        type="text"
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 md:text-sm pl-10"
        placeholder="Search patients by name, phone, or ID..."
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default PatientSearch;
