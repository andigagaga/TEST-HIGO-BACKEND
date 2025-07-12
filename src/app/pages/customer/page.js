"use client"; // wajib agar bisa pakai useState/useEffect di App Router

import { useEffect, useState } from "react";
import axios from "axios";
import GenderChartPage from "../../customer/chart/page";
import { handlePrintCustomer } from "../../pdf/printPdf";
import { FaPrint } from "react-icons/fa";
import toTitleCase from "../../case/case";

export default function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalData, setTotalData] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [gender, setGender] = useState("");
  const [device, setDevice] = useState("");
  const [location, setLocation] = useState("");

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/customers?page=${page}&limit=${limit}&name=${search}&gender=${gender}&device=${device}&location=${location}`
      );
      console.log("resss", res.data);
      setCustomers(res.data.data);
      setTotalPages(Math.ceil(res.data.totalPages / limit));
      setTotalData(res.data.totalData);
      setLoading(false);
    } catch (err) {
      console.error("Fetch failed", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [page, limit, search, gender, device, location]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Customer Table</h1>

      {/* search */}
      <div className="gap-9 mb-8">
        {/* <div>
          <GenderChartPage />
        </div> */}
        <div className="flex gap-3 no-print">
          <div>
            <label
              htmlFor="search"
              className="text-sm font-medium text-gray-700"
            >
              Search:
            </label>
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => {
                setPage(1); // reset ke halaman 1 setiap search
                setSearch(e.target.value);
              }}
              placeholder="Search by name"
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="text-sm font-medium text-gray-700"
            >
              Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => {
                setPage(1);
                setGender(e.target.value);
              }}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="device"
              className="text-sm font-medium text-gray-700"
            >
              Device:
            </label>
            <select
              id="device"
              value={device}
              onChange={(e) => {
                setPage(1);
                setDevice(e.target.value);
              }}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              {/* <option value="Oppo">Oppo</option> */}
              <option value="Xiaomi">Xiaomi</option>
              <option value="LG">LG</option>
              <option value="Google">Google</option>
              <option value="Sony">Sony</option>
              <option value="motorola">Motorola</option>
              <option value="OnePlus">Oneplus</option>
              <option value="Huawei">Huawei</option>
              <option value="Nokia">Nokia</option>
              {/* Tambahkan device lain jika perlu */}
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              Location:
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => {
                setPage(1);
                setLocation(e.target.value);
              }}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="urban">Urban</option>
              {/* <option value="rural">Rural</option> */}
              <option value="coastal">Coastal</option>
              <option value="sub urban">Sub urban</option>
              <option value="Suburban Fringe">Sub urban Fringe</option>
              <option value="metropolitan">Metropolitan</option>
            </select>
          </div>
          <div>
            <button
              onClick={() => {
                setPage(1);
                setLimit(10);
                setSearch("");
                setGender("");
                setDevice("");
                setLocation("");
              }}
              className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 px-4 py-2 rounded"
            >
              Reset Filter
            </button>
          </div>
          <div>
            <button
              onClick={() => window.print()}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {/* <FaPrint className="text-white" /> */}
              🖨️ Print all to PDF
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-300">
          {/* input search nya */}

          {/* tabel */}
          <table className="min-w-full text-sm text-gray-800 print-area">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Gender</th>
                <th className="p-4 text-left">Device</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">PDF</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr
                  key={c._id}
                  className="hover:bg-blue-50 border-t border-gray-200 divide-x divide-gray-300"
                >
                  <td className="p-4">{toTitleCase(c?.Name)}</td>
                  <td className="p-4">{c.Email}</td>
                  <td className="p-4">{c.gender}</td>
                  <td className="p-4">{toTitleCase(c?.Brand_Device)}</td>
                  <td className="p-4">{toTitleCase(c?.Location_Type)}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handlePrintCustomer(c)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      <FaPrint className="text-red-500" />
                      {/* Print */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* pagination */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded ${
                page === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center gap-3 mb-4">
              <label
                htmlFor="limit"
                className="text-sm font-medium text-gray-700"
              >
                Show
              </label>
              <select
                id="limit"
                value={limit}
                onChange={(e) => {
                  setPage(1);
                  setLimit(Number(e.target.value));
                }}
                className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[10, 20, 50, 100, 500, 1000, 2000].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-700">entries per page</span>
            </div>

            <span className="text-sm text-gray-600">
              Showing {(page - 1) * limit + 1}–
              {Math.min(page * limit, totalData)} of {totalData} data
            </span>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded ${
                page === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
