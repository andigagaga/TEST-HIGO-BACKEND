"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DeviceChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/customers/device-summary"
        );
        const labels = res.data.map((item) => item._id || "Unknown");
        const values = res.data.map((item) => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Jumlah Customer per Device",
              data: values,
              backgroundColor: "#36A2EB",
              borderRadius: 4,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching device data:", err);
      }
    };

    fetchDeviceData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Chart by Device
      </h2>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p className="text-gray-600">Loading chart...</p>
      )}
    </div>
  );
}
