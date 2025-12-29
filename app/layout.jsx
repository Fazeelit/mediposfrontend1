import "./globals.css";
import MainLayout from "./components/MainLayout";

export const metadata = {
  title: "MediPOS",
  description: "MediPOS - Medical Point of Sale System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen overflow-x-hidden">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
