import React, { useEffect, useState } from "react";
import API from "../services/Api";
import EmployeeAnalytics from "./EmployeeAnalytics";
import ChatBot from "./ChatBot";

function Dashboard() {
  const [stats, setStats] = useState({
    employees: 0,
    departments: 0,
    present: 0,
    onLeave: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const empRes = await API.get("/employees");
      const deptRes = await API.get("/departments");

      // If you have attendance & leave APIs, replace these later
      setStats({
        employees: empRes.data.length,
        departments: deptRes.data.length,
        present: Math.floor(empRes.data.length * 0.8), // temp demo
        onLeave: Math.floor(empRes.data.length * 0.2)   // temp demo
      });
    } catch (err) {
      console.error("Dashboard stats error", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h2 className="mb-4">📊 Dashboard</h2>

      {/* ===== STAT CARDS ===== */}
      <div style={{ display: "flex", gap: 20, marginBottom: 30 }}>

        <div style={cardStyle("#0d6efd")}>
          <h5>Total Employees</h5>
          <h2>{stats.employees}</h2>
        </div>

        <div style={cardStyle("#198754")}>
          <h5>Departments</h5>
          <h2>{stats.departments}</h2>
        </div>

        <div style={cardStyle("#ffc107")}>
          <h5>Present Today</h5>
          <h2>{stats.present}</h2>
        </div>

        <div style={cardStyle("#dc3545")}>
          <h5>On Leave</h5>
          <h2>{stats.onLeave}</h2>
        </div>

      </div>

      {/* ===== ANALYTICS SECTION ===== */}
      <div style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <EmployeeAnalytics />
      </div>

      {/* ===== CHATBOT ===== */}
      <ChatBot />

    </div>
  );
}

// ===== CARD STYLE FUNCTION =====
const cardStyle = (color) => ({
  flex: 1,
  background: color,
  color: "white",
  padding: 20,
  borderRadius: 15,
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
});

export default Dashboard;
