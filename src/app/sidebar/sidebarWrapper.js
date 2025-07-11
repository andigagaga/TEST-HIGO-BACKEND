"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function SidebarWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-blue-800 text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative bg-gray-50">
        {/* Toggle Button */}
        <button
          className="absolute top-4 left-4 z-10 p-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <HiOutlineMenuAlt3 size={24} />
        </button>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
