"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  CalendarCheck,
  Users,
  Stethoscope,
  Package,
  PackagePlus,
  Receipt,
  FlaskConical,
  Wallet,
  BarChart3,
  UserCog,
  ShieldCheck,
  History,
  Settings,
  Layers,
  X,
} from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();
  const links = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "POS", icon: ShoppingCart, path: "/pos" },
    { name: "Appointments", icon: CalendarCheck, path: "/appointments" },
    { name: "Patients", icon: Users, path: "/patients" },
    { name: "Doctors", icon: Stethoscope, path: "/doctors" },
    { name: "Products", icon: Package, path: "/products" },
    { name: "Purchases", icon: PackagePlus, path: "/purchases" },
    { name: "Supplier", icon: Layers, path: "/suppliers" },
    { name: "Sales", icon: Receipt, path: "/sales" },
    { name: "Tests", icon: FlaskConical, path: "/tests" },
    { name: "Expenses", icon: Wallet, path: "/expenses" },
    { name: "Reports", icon: BarChart3, path: "/reports" },
    { name: "Users", icon: UserCog, path: "/users" },
    { name: "Roles", icon: ShieldCheck, path: "/roles" },
    { name: "Activity", icon: History, path: "/activity" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full relative">
          {/* Mobile close */}
          <button
            className="absolute top-6 right-4 md:hidden p-2 rounded-md text-teal-600 hover:bg-gray-200 transition"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 px-5 py-6 border-b border-gray-200 justify-start">
            <div className="p-2 bg-teal-600 rounded-xl shadow">
              <Stethoscope size={22} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-800">MediPOS</h2>
              <p className="text-xs text-slate-500">Clinic Management</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto py-4 font-medium text-lg">
            {links.map((link, i) => {
              const Icon = link.icon;
              const active = pathname === link.path;
              return (
                <Link
                  key={i}
                  href={link.path}
                  onClick={toggleSidebar}
                  className={`flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-lg transition-all ${
                    active
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white"
                      : "text-slate-600 hover:bg-gray-100 hover:text-teal-600"
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm">{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
