import React, { useEffect, useState } from "react";
import API from "../services/Api";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

// Glass card wrapper
function GlassCard({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {children}
    </div>
  );
}

export default function Analytics() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [empId, setEmpId] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const empRes = await API.get("/employees", {
      params: { page: 0, size: 1000 }
    });
    const deptRes = await API.get("/departments");

    setEmployees(empRes.data.content || []);
    setDepartments(deptRes.data || []);
  };

  const deptCounts = departments.map((d) => ({
    name: d.name,
    count: employees.filter((e) => e.department?.id === d.id).length,
  }));

  const barData = {
    labels: deptCounts.map((d) => d.name),
    datasets: [
      {
        label: "Employees",
        data: deptCounts.map((d) => d.count),
        backgroundColor: "#6c5cff",
        borderRadius: 8,
      },
    ],
  };

  const pieData = {
    labels: deptCounts.map((d) => d.name),
    datasets: [
      {
        data: deptCounts.map((d) => d.count),
        backgroundColor: [
          "#6c5cff",
          "#22c55e",
          "#facc15",
          "#ef4444",
          "#3b82f6",
        ],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  const loadEmployeePerformance = async () => {
    if (!empId) return alert("Select employee");

    const res = await API.get(
      `/analytics/employee/${empId}?year=2026&month=1`
    );

    setData(
      res.data.map((a) => ({
        date: a.date,
        score: a.status === "PRESENT" ? 1 : 0,
      }))
    );
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">
          📊 Analytics Overview
        </h1>
        <p className="text-gray-500">
          Company & employee performance insights
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <p className="text-gray-400">Total Employees</p>
          <h2 className="text-3xl font-bold">{employees.length}</h2>
        </GlassCard>

        <GlassCard>
          <p className="text-gray-400">Departments</p>
          <h2 className="text-3xl font-bold">{departments.length}</h2>
        </GlassCard>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard>
          <h3 className="font-semibold mb-4">
            Employees by Department
          </h3>
          <Bar data={barData} />
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-4">
            Department Distribution
          </h3>
          <div style={{ width: "260px", height: "260px", margin: "0 auto" }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </GlassCard>
      </div>

      {/* ✅ EMPLOYEE PERFORMANCE BOX */}
      <GlassCard>
        <h3 className="font-semibold mb-6 flex items-center gap-2">
          📈 Employee Monthly Performance
        </h3>

        {/* CONTROL BOX */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-gray-50 p-4 rounded-xl mb-6">
          <select
            className="px-4 py-2 rounded-lg border w-full md:w-64"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          >
            <option value="">Select Employee</option>
            {employees.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          <button
            onClick={loadEmployeePerformance}
            className="bg-[#6c5cff] text-white px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Load Analytics
          </button>
        </div>

        {/* GRAPH / EMPTY STATE */}
        {data.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            📭 No performance data to display
          </div>
        ) : (
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#6c5cff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
