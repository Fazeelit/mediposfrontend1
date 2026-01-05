"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";
import { usePathname } from "next/navigation";

// Map routes to page titles
const routeTitleMap = {
  "/": "Dashboard",
  "/pos": "POS",
  "/appointments": "Appointments",
  "/patients": "Patients",
  "/doctors": "Doctors",
  "/products": "Products",
  "/purchases": "Purchases",
  "/suppliers": "Suppliers",
  "/sales": "Sales",
  "/tests": "Tests",
  "/expenses": "Expenses",
  "/reports": "Reports",
  "/users": "Users",
  "/roles": "Roles",
  "/activity": "Activity",
  "/settings": "Settings",
  "/Print": "Print Bill",
};

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const pageTitle = routeTitleMap[pathname] || "Page";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          title={pageTitle}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="md:ml-60 flex-1 min-w-0 pt-14 sm:pt-20 px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
