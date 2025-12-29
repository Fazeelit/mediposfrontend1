import React from "react";
import Cards from "../Dashboard/Card";
import DashboardGraphs from "../Dashboard/DashboardGraph";
import LowStockAlert from "../Dashboard/LowStockAlert";
import UpcomingAppointments from "../Dashboard/UpcomingAppointments";

const Dashboard = () => {
  return (
    <div className="p-4">
      {/* Top Cards */}
      <Cards />

      {/* Graphs */}
      <DashboardGraphs />

      {/* Alerts & Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7">
        <LowStockAlert />
        <UpcomingAppointments />
      </div>
    </div>
  );
};

export default Dashboard;
