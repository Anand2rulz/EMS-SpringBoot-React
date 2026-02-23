import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import API from "../services/Api";

function EmployeeAnalytics() {
  const [employees, setEmployees] = useState([]);
  const [empId, setEmpId] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load employees list
  useEffect(() => {
    API.get("/employees")
      .then(res => {
        console.log("Employees:", res.data);
        setEmployees(res.data.content || []);
      })
      .catch(err => console.error(err));
  }, []);

  const loadData = async () => {
    console.log("Button clicked. empId =", empId);

    if (!empId) {
      alert("Please select employee");
      return;
    }

    try {
      setLoading(true);

      const res = await API.get(`/analytics/employee/${empId}?year=2026&month=1`);
      console.log("Analytics response:", res.data);

      const formatted = res.data.map(a => ({
        date: a.date,
        score: a.status === "PRESENT" ? 1 : 0
      }));

      console.log("Formatted:", formatted);

      setData(formatted);
    } catch (e) {
      console.error("Analytics error:", e);
      alert("Error loading analytics");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>📊 Employee Monthly Performance</h2>

      <select
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
      >
        <option value="">Select Employee</option>
        {employees.map(e => (
          <option key={e.id} value={e.id}>{e.name}</option>
        ))}
      </select>

      <button onClick={loadData} style={{ marginLeft: 10 }}>
        Load Analytics
      </button>

      <div style={{ marginTop: 30 }}>
        {data.length === 0 ? (
          <p>No data to display</p>
        ) : (
          <LineChart width={700} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <CartesianGrid />
            <Line type="monotone" dataKey="score" stroke="#0d6efd" />
          </LineChart>
        )}
      </div>
    </div>
  );
}

export default EmployeeAnalytics;
