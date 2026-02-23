import "./DashboardHome.css";

export default function DashboardHome({ role }) {
  return (
    <div style={{ padding: "30px" }}>
      {/* TITLE */}
      <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>
        {role === "ADMIN" ? "Admin Dashboard" : "Employee Dashboard"}
      </h1>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <StatCard title="Employees" value="32" icon="👨‍💼" color="#6c5cff" />

        {role === "ADMIN" && (
          <StatCard title="Departments" value="5" icon="🏢" color="#22c55e" />
        )}

        <StatCard title="Present" value="28" icon="✅" color="#0ea5e9" />

        <StatCard title="Leave" value="4" icon="❌" color="#ef4444" />
      </div>
    </div>
  );
}

// ================= CARD COMPONENT =================
function StatCard({ title, value, icon, color }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          background: color,
          color: "white",
          width: "55px",
          height: "55px",
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      <div>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>
          {title}
        </p>
        <h2 style={{ margin: 0, fontSize: "26px", fontWeight: "600" }}>
          {value}
        </h2>
      </div>
    </div>
  );
}
