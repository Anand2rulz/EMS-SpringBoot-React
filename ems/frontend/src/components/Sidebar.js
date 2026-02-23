import "./Sidebar.css";

export default function Sidebar({
  page, setPage, role, username, onLogout, dark, setDark
}) {
  const item = (id, label) => (
    <div
      className={`menu-item ${page === id ? "active" : ""}`}
      onClick={() => setPage(id)}
    >
      {label}
    </div>
  );

  return (
    <div className="sidebar">
      <h2>🚀 EMS</h2>

      <div className="user-box">
        👤 {username} <br />
        <small>{role}</small>
      </div>

      {item("dashboard", "Dashboard")}
      {role === "ADMIN" && item("employees", "Employees")}
      {item("analytics", "Analytics")}

      <div className="menu-item" onClick={() => setDark(!dark)}>
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </div>

      <div className="logout" onClick={onLogout}>🚪 Logout</div>
    </div>
  );
}

