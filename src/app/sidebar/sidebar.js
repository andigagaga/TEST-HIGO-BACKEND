"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Customer Table", href: "/pages/customer" },
    { name: "Customer Chart", href: "/customer/chart" },
  ];

  return (
    <div className="h-screen w-64 bg-blue-800 text-white p-6 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-6">📊 Admin Panel</h2>
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`block px-4 py-2 rounded ${
                pathname === item.href ? "bg-blue-600" : "hover:bg-blue-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
