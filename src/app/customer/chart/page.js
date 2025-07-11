"use client";

import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderChartPage() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchGenderData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/customers/gender-summary"
        );
        const labels = res.data.map((item) => item._id || "Unknown");
        const values = res.data.map((item) => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Jumlah Customer",
              data: values,
              backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching gender data:", err);
      }
    };

    fetchGenderData();
  }, []);

  return (
    <div className="p-10 bg-white min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Customer by Gender
      </h2>
      {chartData ? (
        <div className="flex justify-center">
          <div className="w-80 md:w-[400px]">
            <Pie data={chartData} />
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading chart...</p>
      )}
    </div>
  );
}
