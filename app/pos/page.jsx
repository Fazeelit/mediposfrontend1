// app/pos/page.jsx
"use client";

import MainLayout from "../components/MainLayout";
import POSPage from "../components/pages/POSPage";

export default function POSRoute() {
  return (
    <MainLayout>
      <POSPage />
    </MainLayout>
  );
}
