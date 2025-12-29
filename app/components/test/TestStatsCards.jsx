"use client";

import React from "react";
import { TestTube, Clock, CircleCheckBig } from "lucide-react";

const TestStatsCards = ({ tests }) => {
  const completed = tests.filter((t) => t.status === "Completed").length;
  const pending = tests.filter((t) => t.status === "Pending").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card title="Total Tests" value={tests.length} icon={<TestTube />} color="purple" />
      <Card title="Pending" value={pending} icon={<Clock />} color="amber" />
      <Card title="Completed" value={completed} icon={<CircleCheckBig />} color="emerald" />
    </div>
  );
};

const colorClasses = {
  purple: {
    text: "text-purple-600",
    bg: "from-purple-500 to-purple-600",
  },
  amber: {
    text: "text-amber-600",
    bg: "from-amber-500 to-amber-600",
  },
  emerald: {
    text: "text-emerald-600",
    bg: "from-emerald-500 to-emerald-600",
  },
};

const Card = ({ title, value, icon, color }) => {
  const classes = colorClasses[color] || colorClasses["purple"];
  return (
    <div className="rounded-xl shadow-lg bg-white/80 backdrop-blur p-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className={`text-2xl font-bold mt-1 ${classes.text}`}>{value}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${classes.bg} flex items-center justify-center text-white`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TestStatsCards;
