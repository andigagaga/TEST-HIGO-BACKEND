import Image from "next/image";
import Sidebar from "./sidebar/sidebar";
import CustomerPage from "./pages/customer/page";

export default function Home() {
  return (
    <main className="p-64">
      <div className="flex">
        <Sidebar />
        <main className=" bg-gray-50">
          <div className=" text-center bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              👋 Selamat Datang di Customer Insights
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jelajahi data pelanggan dengan mudah, lihat tren gender dalam
              chart, dan temukan informasi penting dalam sekejap. Gunakan fitur
              pencarian dan filter untuk menemukan data yang Anda butuhkan.
            </p>
            <hr className="my-6 border-t border-gray-300" />
            <p className="text-sm text-gray-400">
              WEB BY:{" "}
              <span className="font-semibold text-blue-600">GUSWANDI</span>
            </p>
          </div>
        </main>
      </div>
    </main>
  );
}
