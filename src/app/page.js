import Image from "next/image";
import Sidebar from "./sidebar/sidebar";
import CustomerPage from "./pages/customer/page";

export default function Home() {
  return (
    <main className="p-30">
      <div className="flex">
        <Sidebar />
        <main className=" bg-gray-50">
          <div className=" text-center bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
              👋 Selamat Datang di Customer Insights
            </h1>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              Selamat datang di{" "}
              <span className="text-blue-600 font-semibold">
                Customer Insights Dashboard
              </span>
              ! 🎯 Pantau tren pelanggan secara real-time, eksplorasi data
              gender, lokasi, dan perangkat, serta dapatkan wawasan penting
              hanya dalam beberapa klik. Gunakan fitur pencarian, filter
              dinamis, dan visualisasi interaktif untuk pengalaman analisis data
              yang maksimal.
            </p>
            <hr className="my-6 border-t border-gray-300" />
            <p className="text-sm text-gray-400">
              PRESENTED BY:{" "}
              <span className="font-semibold text-blue-600">GUSWANDI</span>
            </p>

            <div className="mt-4 flex justify-center">
              <Image
                src="/me.jpg"
                alt="Foto Guswandi"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
