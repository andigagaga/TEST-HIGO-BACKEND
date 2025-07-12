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

export default function LocationChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/customers/location-summary"
        );
        const labels = res.data.map((item) => item._id || "Unknown");
        const values = res.data.map((item) => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Jumlah Customer per Location",
              data: values,
              backgroundColor: "#FF6384",
              borderRadius: 4,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching location data:", err);
      }
    };

    fetchLocationData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Chart by Location
      </h2>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p className="text-gray-600">Loading chart...</p>
      )}
    </div>
  );
}
